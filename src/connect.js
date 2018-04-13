import { globalObject } from './global';
import { connect as _connect, setStore } from 'wepy-redux';

const connect = maps => {
  Object.assign(maps, {
    dispatcher: () => globalObject._dispatcher,
  });
  return _connect(maps);
};

export { setStore, connect };
