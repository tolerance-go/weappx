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
      index = this._listeners.length;
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
    const listeners = this._match(type);
    if (typeof listeners === 'undefined') return;
    listeners.forEach(listen => {
      listen.cb.call(listen.scope, payload);
    });
  },
  _match(type) {
    for (let key in this._listeners) {
      if (new RegExp(key).test(type)) {
        return this._listeners[key];
      }
    }
  },
};

export default eventBus;
