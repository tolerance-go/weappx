import { getStore, setStore } from './store';
import isEqual from 'lodash.isequal';

function normalizeMap(map) {
  return Array.isArray(map)
    ? map.map(key => ({ key, val: key }))
    : Object.keys(map).map(key => ({ key, val: map[key] }));
}

function mapState(states) {
  const res = {};
  const store = getStore();
  const state = store.getState();
  states.forEach(({ key, val }) => {
    res[key] = typeof val === 'function' ? val.call(this, state) : state[val];
  });
  return res;
}

function connectComponent(states = {}, setData = 'setData') {
  states = normalizeMap(states);
  return function(ComponentOptions) {
    let unSubscribe = null;

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    const methods = ComponentOptions.methods || {};
    const lifetimes = ComponentOptions.lifetimes || {};
    const attached = lifetimes.attached || methods.attached || ComponentOptions.attached;
    const detached = lifetimes.detached || methods.detached || ComponentOptions.detached;

    methods.attached && delete methods.attached;
    methods.detached && delete methods.detached;

    const onStateChange = function() {
      const newStates = mapState(states);
      let hasChanged = false;
      Object.keys(newStates).forEach(k => {
        const newV = newStates[k];
        if (!isEqual(this.data[k], newV)) {
          // 不相等
          hasChanged = true;
        }
      });
      hasChanged && this[setData](newStates);
    };

    return {
      ...ComponentOptions,
      lifetimes: {
        ...lifetimes,
        attached: undefined,
        detached: undefined,
      },
      data: Object.assign(ComponentOptions.data || {}, mapState(states)),
      attached() {
        const store = getStore();
        unSubscribe = store.subscribe(onStateChange.bind(this));
        onStateChange.call(this);
        attached && attached.apply(this, arguments);
      },
      detached() {
        unSubscribe && unSubscribe();
        unSubscribe = null;
        detached && detached.apply(this, arguments);
      },
    };
  };
}

function connectPage(states = {}, setData = 'setData') {
  states = normalizeMap(states);
  return function(PageOptions) {
    let unSubscribe = null;

    const pageLifetimes = PageOptions.pageLifetimes || {};
    const onLoad = pageLifetimes.load || PageOptions.onLoad;
    const onUnload = pageLifetimes.unload || PageOptions.onUnload;
    const onShow = pageLifetimes.show || PageOptions.onShow;
    const onHide = pageLifetimes.hide || PageOptions.onHide;

    const onStateChange = function() {
      if (this.$hide) {
        this.$changedWhenHide = true;
        return;
      }
      const newStates = mapState(states);
      let hasChanged = false;
      Object.keys(newStates).forEach(k => {
        const newV = newStates[k];
        if (!isEqual(this.data[k], newV)) {
          // 不相等
          hasChanged = true;
        }
      });
      hasChanged && this[setData](newStates);
    };

    return {
      ...PageOptions,
      pageLifetimes: {
        ...pageLifetimes,
        load: undefined,
        unload: undefined,
        show: undefined,
        hide: undefined,
      },
      data: Object.assign(PageOptions.data || {}, mapState(states)),
      onLoad() {
        const store = getStore();
        unSubscribe = store.subscribe(onStateChange.bind(this));
        onStateChange.call(this);
        onLoad && onLoad.apply(this, arguments);
      },
      onUnload() {
        unSubscribe && unSubscribe();
        unSubscribe = null;
        onUnload && onUnload.apply(this, arguments);
      },
      onShow() {
        this.$hide = false;
        if (this.$changedWhenHide) {
          onStateChange.call(this);
          this.$changedWhenHide = false;
        }
        onShow && onShow.apply(this, arguments);
      },
      onHide() {
        this.$hide = true;
        onHide && onHide.apply(this, arguments);
      },
    };
  };
}

const connector = { connectPage, connectComponent, setStore, getStore };

export default connector;
