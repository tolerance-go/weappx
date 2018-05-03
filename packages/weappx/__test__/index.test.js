/* global test, expect, afterEach */
import weappx from '../src/index';
import { connector } from './helper';

test('mode must be union', () => {
  expect(() => {
    const app = weappx();
    app.init({ connector });
    app.model({
      namespace: 'n',
    });
    app.model({
      namespace: 'n',
    });
  }).toThrowError(/model\[namespace=\w+\] must be union/);
});

test('mutations', () => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
  });
  app.start();
  app.dispatcher.n.add(1);
  expect(app._store.getState().n).toEqual({ count: 1 });
});

test('actions', () => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
    actions: {
      add(params) {
        return params * 10;
      },
    },
  });
  app.start();
  app.dispatcher.n.add(1);
  expect(app._store.getState().n).toEqual({ count: 10 });
});

test('async actions', () => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
    actions: {
      asyncAdd(params) {
        return async ({ dispatcher, getState, state, eventBus }) => {
          expect(eventBus).toBeInstanceOf(Object);
          expect(getState().n).toEqual({ count: 0 });
          expect(state).toEqual({ count: 0 });
          const data = await new Promise(resolve => {
            setTimeout(() => {
              resolve(params);
            }, 100);
          });
          dispatcher.n.add(data);
          return 'done';
        };
      },
    },
  });
  app.start();
  expect.assertions(5);
  return app.dispatcher.n.asyncAdd(10).then(result => {
    expect(result).toBe('done');
    expect(app._store.getState().n).toEqual({ count: 10 });
  });
});

test('action meta', () => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
    actions: {
      n() {},
      asyncAdd() {
        return async ({ dispatcher }) => {
          expect(dispatcher.asyncAdd).toBeTruthy();
          expect(dispatcher.add).toBeTruthy();
          expect(dispatcher.n.asyncAdd).toBeTruthy();
          expect(dispatcher.n.add).toBeTruthy();
          expect(dispatcher.n).toBeInstanceOf(Object);
        };
      },
    },
  });
  app.start();
  expect.assertions(5);
  return app.dispatcher.n.asyncAdd();
});

test('init', () => {
  expect(() => {
    const app = weappx();
    app.init({
      connector,
      extraMiddlewares: {},
    });
  }).toThrowError(/extraMiddlewares type must be Array/);
});

test('setups', done => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    mutations: {
      add() {},
    },
    setups: {
      f({ take, dispatcher, eventBus }) {
        expect(eventBus).toBeInstanceOf(Object);
        expect(take).toBeInstanceOf(Object);
        expect(dispatcher).toBeInstanceOf(Object);
        expect(dispatcher.add).toBeInstanceOf(Function);
        done();
      },
    },
  });
  app.start();
});

test('setups func', done => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    setups: () => {
      done();
    },
  });
  app.start();
});

test('take', done => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
    actions: {
      asyncAdd() {
        return async ({ take }) => {
          const data = await take('n/event');
          expect(data).toEqual(1);
          done();
        };
      },
    },
  });
  app.start();
  app.dispatcher.n.asyncAdd();
  app._store.dispatch({
    type: 'n/event',
    payload: 1,
  });
});

test('action after', done => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state, payload) {
        state.count += payload;
      },
    },
    actions: {
      asyncAdd() {
        return async ({ take, getState }) => {
          expect(getState().n).toEqual({ count: 0 });
          await take('add:after');
          expect(getState().n).toEqual({ count: 1 });
          done();
        };
      },
    },
  });
  app.start();
  app.dispatcher.n.asyncAdd();
  app._store.dispatch({
    type: 'n/add',
    payload: 1,
  });
});

test('mutations return new state', () => {
  const app = weappx();
  app.init({ connector });
  app.model({
    namespace: 'n',
    state: {
      count: 0,
    },
    mutations: {
      add(state) {
        return 1;
      },
    },
  });
  app.start();
  app.dispatcher.n.add(1);
  expect(app._store.getState().n).toEqual(1);
});
