const some = obj => {
  for (let k in obj) {
    if (!obj.hasOwnProperty(k)) continue;
    if (obj[k]) return true;
  }
  return false;
};

const SPLIT = '/';

const createLoading = (options = {}) => {
  const { namespace = 'loading', global = 'global' } = options;
  const loadingModel = {
    namespace,

    state: {
      '@namespaceLoadingCounts': {},
    },

    mutations: {
      save(state, { actionType, loading }) {
        state[actionType] = loading;

        const [namespace, actionCreatorName] = actionType.split(SPLIT); // eslint-disable-line
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

        state[global] = some(loadingCounts);
      },
    },
  };

  const changeLoading = (dispatch, type, loading) =>
    dispatch({
      type: `${namespace}/save`,
      payload: { actionType: type, loading },
    });

  const prefixMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.meta && action.payload && action.payload instanceof Function) {
      changeLoading(dispatch, action.type, true);
    }
    return next(action);
  };

  const suffixMiddleware = ({ dispatch, getState }) => next => action => {
    if (action.meta && action.payload && action.payload instanceof Promise) {
      action.payload.then(result => {
        changeLoading(dispatch, action.type, false);
        return result;
      });
    }
    return next(action);
  };

  return {
    prefixMiddlewares: [prefixMiddleware],
    suffixMiddlewares: [suffixMiddleware],
    extraModels: [loadingModel],
  };
};

export default createLoading;
