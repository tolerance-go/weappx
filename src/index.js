import { handleActions, createActions } from 'redux-actions';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { setStore, connect } from './connect';
import { eventBus, actionTakeMiddleware } from './actionTakeMiddleware';
import thunkMiddleware from './tunkMiddleware';
import produce from 'immer';
import { globalObject } from './global';
import assert from './utils/assert';
import some from './utils/some';

const SPLIT = '/';

const prefix = (name, propName) => {
  return `${name}${SPLIT}${propName}`;
};

// const isEmpty = obj => {
//   return !Object.keys(obj).length;
// };

/**
 * 用 immer 包装 reducer
 *
 * @param {any} cb
 * @returns
 */
const produceWrapp = cb => {
  return (state, action) => {
    return produce(state, draft => {
      return cb(draft, action.payload);
    });
  };
};

const wepyx = {
  eventBus,
  dispatcher: {},
  
  _setups: {},
  _actions: {},
  _models: {},
  _reducers: {},
  // 待注入到 thunk 的 dispatcher namespace maps
  _composeDispatcher: {},
  // 待注入到 thunk 的 take namespace maps
  _takes: {},
  _store: undefined,
  _extraEnhancers: [],
  _effectsErrorDefaultHandle: error => {
    throw error;
  },

  init(options) {
    const { extraMiddlewares, onError } = options;

    if (extraMiddlewares) {
      assert(Array.isArray(extraMiddlewares), 'extraMiddlewares type must be Array');
      this._extraEnhancers = extraMiddlewares;
    }

    if (onError) {
      assert(typeof onError === 'function', 'onError type must be Function');
      this._effectsErrorDefaultHandle = onError;
    }
  },

  models(models) {
    models.forEach(model => this.model(model));
  },

  _model(options) {
    const { namespace, state = {}, mutations = {}, actions = {} } = options;
    let { setups = {} } = options;

    this._models[namespace] = namespace;

    // init reducer
    for (let rName in mutations) {
      if (!mutations.hasOwnProperty(rName)) continue;

      // 默认的 action 会对 mutations 里面的 key 进行赋值
      !actions[rName] && (actions[rName] = payload => payload);

      mutations[prefix(namespace, rName)] = produceWrapp(mutations[rName]);
      delete mutations[rName];
    }
    this._reducers[namespace] = handleActions(mutations, state);

    // add actions meta
    for (let actionName in actions) {
      const payloadCreator = actions[actionName];
      // this._composeDispatcher[namespace] 不可以在此取值，它只是容器，是动态添值的
      const metaCreator = () => ({
        namespace,
        wepyxScope: this,
      });
      actions[actionName] = [payloadCreator, metaCreator];
    }
    // https://redux-actions.js.org/docs/api/createAction.html#createactionsactionmap
    this._actions[namespace] = createActions({ [namespace]: actions })[namespace];

    if (typeof setups === 'function') {
      setups = { setup: setups };
    }
    this._setups[namespace] = setups;
  },

  model(options) {
    const { namespace } = options;

    assert(
      false === ['global', 'loading'].includes(namespace),
      `model namespace:${namespace} is reserved; please use other namespace`
    );
    assert(namespace, `model namespace must be exsit`);
    assert(undefined === this._models[namespace], `model[namespace=${namespace}] must be union`);

    this._model(options);
  },

  start() {
    // effect for model just for test so put model to here
    const loadingModel = {
      namespace: 'loading',

      state: {
        '@namespaceLoadingCounts': {},
      },

      mutations: {
        save(state, { actionType, loading }) {
          state[actionType] = loading;

          const [namespace, actionCreatorName] = actionType.split(SPLIT);
          const loadingCounts = state['@namespaceLoadingCounts'];

          if (!loadingCounts[namespace]) {
            loadingCounts[namespace] = 0;
          }

          if (loading) {
            loadingCounts[namespace]++;
          } else {
            loadingCounts[namespace]--;
          }

          state[namespace] = !!loadingCounts[namespace];

          state.global = some(loadingCounts);
        },
      },
    };

    // default upload loadingModel
    this._model(loadingModel);

    const rootReducer = combineReducers(this._reducers);

    const middlewares = [thunkMiddleware, actionTakeMiddleware].concat(this._extraEnhancers);

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    // 包装 actionCreator => dispatch
    for (let namespace in this._actions) {
      if (!this._actions.hasOwnProperty(namespace)) continue;
      this.dispatcher[namespace] || (this.dispatcher[namespace] = {});
      for (let actionName in this._actions[namespace]) {
        if (!this._actions[namespace].hasOwnProperty(actionName)) continue;

        this.dispatcher[namespace][actionName] = (...args) =>
          store.dispatch(this._actions[namespace][actionName](...args));
      }
    }

    // compose global & inner dispatcher
    Object.keys(this._models).forEach(namespace => {
      const dispatcher = this.dispatcher;

      const innerDispatcher = dispatcher[namespace];
      const namespaces = Object.keys(dispatcher);
      const dispatchersInNamespace = Object.keys(innerDispatcher);

      const compose = namespaces.concat(dispatchersInNamespace).reduce((obj, key) => {
        if (obj[key]) {
          console.warn(
            `dispatcher[action=${key}] on model[namespace=${namespace}] has conflict with global dispathcer, precedence use globals`
          );
          return obj;
        }
        obj[key] = dispatcher[key] || innerDispatcher[key];
        return obj;
      }, {});

      this._composeDispatcher[namespace] = compose;
    });

    Object.keys(this._models).forEach(namespace => {
      const take = type => {
        if (new RegExp(`${namespace}\/.*`, 'ig').test(type)) {
          console.warn(
            `take action type:${type}, You don't have to add a prefix when you operate under the current model[namespace:${namespace}].`
          );
        } else {
          type = prefix(namespace, type);
        }
        return eventBus.take(type).then(action => action.payload);
      };
      this._takes[namespace] = take;
    });

    // call setup
    for (let namespace in this._setups) {
      if (!this._setups.hasOwnProperty(namespace)) continue;
      for (let sName in this._setups[namespace]) {
        if (!this._setups[namespace].hasOwnProperty(sName)) continue;
        // @todo 注入 history
        this._setups[namespace][sName].call(this, {
          dispatcher: this._composeDispatcher[namespace],
          take: this._takes[namespace],
          eventBus,
        });
      }
    }

    setStore(store);

    this._store = store;

    return store;
  },
};

// for test just
const _clean = () => {
  wepyx._setups = {};
  wepyx._actions = {};
  wepyx._models = {};
  wepyx._reducers = {};
  wepyx._store = undefined;
  wepyx._composeDispatcher = {};
  wepyx._extraEnhancers = [];
  wepyx._effectsErrorDefaultHandle = error => {
    throw error;
  };
  globalObject._dispatcher = wepyx.dispatcher = {};
};

globalObject._dispatcher = wepyx.dispatcher;

export default wepyx;

export { connect, _clean };
