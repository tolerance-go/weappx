import eventBus from './eventBus';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.meta && action.payload && typeof action.payload === 'function') {
    const rootState = getState();
    const { namespace, app, composeDispatcher, takes } = action.meta;
    const changeLoading = loading =>
      dispatch({
        type: 'loading/save',
        payload: { actionType: action.type, loading },
      });

    changeLoading(true);

    return action
      .payload({
        dispatcher: composeDispatcher[namespace],
        take: takes[namespace],
        getState,
        state: rootState[namespace],
        loading: rootState['loading'],
        eventBus,
      })
      .then(result => {
        changeLoading(false);
        return result;
      })
      .catch(error => {
        return app._effectsErrorDefaultHandle(error);
      });
  }

  return next(action);
};

export default thunkMiddleware;
