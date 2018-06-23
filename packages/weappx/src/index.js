import { handleActions, createActions } from 'redux-actions';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import eventBus from './eventBus';
import actionTakeMiddleware from './middlewares/actionTake';
import thunkMiddleware from './middlewares/tunk';
import produce from 'immer';
import assert from './utils/assert';

const SPLIT = '/';

const prefix = (name, propName) => {
  return `${name}${SPLIT}${propName}`;
};

/**
 * 用 immer 包装 reducer
 */
const produceWrapp = cb => {
  return (state, action) => {
    return produce(state, draft => {
      return cb(draft, action.payload);
    });
  };
};

function create() {
  const app = {
    eventBus,
    dispatcher: {},
    init,
    model,
    use,
    models,
    start,
    _setups: {},
    _actions: {},
    _models: {},
    _reducers: {},
    _store: undefined,
    _effectsErrorDefaultHandle: error => {
      throw error;
    },
  };

  const _composeDispatcher = {}; // 待注入到 thunk 的 dispatcher namespace maps
  const _takes = {}; // 待注入到 thunk 的 take namespace maps
  let _connector;
  let _extraModels = [];
  let _suffixMiddlewares = [thunkMiddleware, actionTakeMiddleware];
  let _prefixMiddlewares = [];
  let _extraEnhancers = []; // eslint-disable-line

  return app;

  function init(options) {
    const { connector } = options;
    assert(connector, '[weappx.init]:connector is required');

    for (let k in connector) {
      if (!connector.hasOwnProperty(k)) continue;
      if (k.match(/^connect/i)) {
        const oldConnect = connector[k];
        connector[k] = (maps = {}, ...other) => {
          Object.assign(maps, {
            dispatcher: () => this.dispatcher,
          });
          return oldConnect(maps, ...other);
        };
      }
    }
    _connector = connector;
    use(options);
  }

  function use(options) {
    assert(typeof options === 'object', '[app.use]: options type must be object');
    const { suffixMiddlewares, prefixMiddlewares, onError, extraModels } = options;

    if (suffixMiddlewares) {
      assert(Array.isArray(suffixMiddlewares), '[app.use]: suffixMiddlewares type must be Array');
      _suffixMiddlewares = _suffixMiddlewares.concat(suffixMiddlewares);
    }

    if (prefixMiddlewares) {
      assert(Array.isArray(prefixMiddlewares), '[app.use]: prefixMiddlewares type must be Array');
      _prefixMiddlewares = _prefixMiddlewares.concat(prefixMiddlewares);
    }

    if (onError) {
      assert(typeof onError === 'function', '[app.use]: onError type must be Function');
      app._effectsErrorDefaultHandle = onError;
    }

    if (extraModels) {
      assert(Array.isArray(extraModels), `[app.use]: _extraModels type must be Array`);
      _extraModels = _extraModels.concat(extraModels);
    }
  }

  function model(options) {
    const { namespace, state = {}, mutations = {}, actions = {} } = options;
    let { setups = {} } = options;

    assert(namespace, `model namespace must be exsit`);
    assert(undefined === app._models[namespace], `model[namespace=${namespace}] must be union`);

    app._models[namespace] = namespace;

    // init reducer
    for (let rName in mutations) {
      if (!mutations.hasOwnProperty(rName)) continue;

      // 默认的 action 会对 mutations 里面的 key 进行赋值
      !actions[rName] && (actions[rName] = payload => payload);

      mutations[prefix(namespace, rName)] = produceWrapp(mutations[rName]);
      delete mutations[rName];
    }
    app._reducers[namespace] = handleActions(mutations, state);

    // add actions meta
    for (let actionName in actions) {
      const payloadCreator = actions[actionName];
      // _composeDispatcher[namespace] 不可以在此取值，它只是容器，是动态添值的
      const metaCreator = () => ({
        namespace,
        app,
        takes: _takes,
        composeDispatcher: _composeDispatcher,
      });
      actions[actionName] = [payloadCreator, metaCreator];
    }
    // https://redux-actions.js.org/docs/api/createAction.html#createactionsactionmap
    app._actions[namespace] = createActions({ [namespace]: actions })[namespace];

    if (typeof setups === 'function') {
      setups = { setup: setups };
    }
    app._setups[namespace] = setups;
  }

  function models(models) {
    models.forEach(model => app.model(model));
  }

  function start() {
    assert(_connector, '[weappx.start]:connector is required, please call [weappx.init] first');

    _extraModels.forEach(m => model(m));

    const rootReducer = combineReducers(app._reducers);

    const store = createStore(
      rootReducer,
      applyMiddleware(..._prefixMiddlewares.concat(_suffixMiddlewares))
    );

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

      _composeDispatcher[namespace] = compose;
    });

    Object.keys(this._models).forEach(namespace => {
      const take = type => {
        if (new RegExp(`${namespace}/.*`, 'ig').test(type)) {
          console.warn(
            `take action type:${type}, You don't have to add a prefix when you operate under the current model[namespace:${namespace}].`
          );
        } else {
          type = prefix(namespace, type);
        }
        return eventBus.take(type).then(action => action.payload);
      };
      _takes[namespace] = take;
    });

    // call setup
    for (let namespace in this._setups) {
      if (!this._setups.hasOwnProperty(namespace)) continue;
      for (let sName in this._setups[namespace]) {
        if (!this._setups[namespace].hasOwnProperty(sName)) continue;
        // @todo 注入 history
        this._setups[namespace][sName].call(this, {
          dispatcher: _composeDispatcher[namespace],
          take: _takes[namespace],
          eventBus,
        });
      }
    }

    _connector.setStore(store);

    this._store = store;

    return store;
  }
}

export default create;
