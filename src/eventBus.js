const eventBus = {
  _listeners: {},
  take(type) {
    return new Promise(resolve => {
      const un = this.listen(type, payload => {
        resolve(payload);
        un();
      });
    });
  },
  listen(type, cb, scope) {
    let index;
    if (typeof this._listeners[type] !== 'undefined') {
      index = listeners.length;
      this._listeners[type].push({ scope, cb });
    } else {
      index = 0;
      this._listeners[type] = [{ scope, cb }];
    }
    const unListen = () => {
      this._listeners[type].splice(index, 1);
    };
    return unListen;
  },
  emit(type, payload) {
    const listeners = this._listeners[type];
    if (typeof listeners === 'undefined') return;
    listeners.forEach(listen => {
      listen.cb.call(listen.scope, payload);
    });
  },
};

export default eventBus;
