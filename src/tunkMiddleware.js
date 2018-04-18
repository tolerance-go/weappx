import eventBus from './eventBus';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.meta && action.payload && typeof action.payload === 'function') {
    const { namespace, composeDispatcher, takes } = action.meta;
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
        state: getState()[namespace],
        eventBus,
      })
      .then(result => {
        changeLoading(false);
        return result;
      });
  }

  return next(action);
};

export default thunkMiddleware;
