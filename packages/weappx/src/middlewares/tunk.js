import eventBus from '../eventBus';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.meta && action.payload && typeof action.payload === 'function') {
    const rootState = getState();
    const { namespace, app, composeDispatcher, takes } = action.meta;

    action.payload = action
      .payload({
        dispatcher: composeDispatcher[namespace],
        take: takes[namespace],
        getState,
        state: rootState[namespace],
        eventBus,
      })
      .catch(error => {
        return app._effectsErrorDefaultHandle(error);
      });
    next(action);
    return action.payload;
  }

  return next(action);
};

export default thunkMiddleware;
