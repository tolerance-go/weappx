import eventBus from '../eventBus';

const actionTakeMiddleware = ({ dispatch, getState }) => next => action => {
  const acfun = typeof action === 'function';
  !acfun && eventBus.emit(action.type, action);
  const returnValue = next(action);
  !acfun && eventBus.emit(`${action.type}:after`, action);
  return returnValue;
};

export default actionTakeMiddleware;
