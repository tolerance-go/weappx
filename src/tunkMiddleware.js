const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.meta && action.payload && typeof action.payload === 'function') {
    const { namespace, composeDispatcher, takes } = action.meta;

    return action.payload({
      dispatcher: composeDispatcher[namespace],
      take: takes[namespace],
      getState,
      state: getState()[namespace],
    });
  }

  return next(action);
};

export default thunkMiddleware;
