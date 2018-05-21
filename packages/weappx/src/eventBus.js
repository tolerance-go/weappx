const eventBus = {
  _listeners: {},
  _eventCache: {},
  isHappened(type) {
    return !!this._eventCache[type];
  },
  takeLast(type) {
    if (this._eventCache.hasOwnProperty(type)) {
      return Promise.resolve(this._eventCache[type]);
    }
    return this.take(type);
  },
  take(type) {
    return new Promise((resolve, reject) => {
      try {
        this.once(type, resolve);
      } catch (err) {
        reject(err);
      }
    });
  },
  once(type, cb, scope) {
    const un = this.listen(type, payload => {
      cb.call(scope, payload);
      un();
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
    this._eventCache[type] = payload;
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
