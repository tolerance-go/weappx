import eventBus from './eventBus';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.meta && action.payload && typeof action.payload === 'function') {
    const { namespace, wepyxScope } = action.meta;
    const changeLoading = loading =>
      dispatch({
        type: 'loading/save',
        payload: { actionType: action.type, loading },
      });

    changeLoading(true);

    return action
      .payload({
        dispatcher: wepyxScope._composeDispatcher[namespace],
        take: wepyxScope._takes[namespace],
        getState,
        state: getState()[namespace],
        loading: getState()['loading'],
        eventBus,
      })
      .then(result => {
        changeLoading(false);
        return result;
      })
      .catch(error => {
        return wepyxScope._effectsErrorDefaultHandle.call(wepyxScope, error);
      });
  }

  return next(action);
};

export default thunkMiddleware;
