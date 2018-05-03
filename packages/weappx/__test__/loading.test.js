/* global test, expect, afterEach */
import weappx from '../src/index';
import { delay, connector } from './helper';

test('model loading namespace confilct', () => {
  expect(() => {
    const app = weappx();
    app.init({ connector });
    app.model({
      namespace: 'global',
    });
    app.start();
  }).toThrowError(/model namespace:\w+ is reserved; please use other namespace/);

  expect(() => {
    const app = weappx();
    app.init({ connector });
    app.model({
      namespace: 'loading',
    });
    app.start();
  }).toThrowError(/model namespace:\w+ is reserved; please use other namespace/);
});

test('model loading', done => {
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
          await delay(200);
        };
      },
      asyncAdd2() {
        return async ({ take }) => {
          await delay(400);
        };
      },
    },
  });
  app.start();
  const getState = app._store.getState;

  expect(getState().loading.n).toBeFalsy();
  expect(getState().loading['n/asyncAdd']).toBeFalsy();
  expect(getState().loading.global).toBeFalsy();
  app.dispatcher.n.asyncAdd().then(() => {
    expect(getState().loading.n).toBeTruthy();
    expect(getState().loading['n/asyncAdd']).toBeFalsy();
    expect(getState().loading.global).toBeTruthy();
  });
  app.dispatcher.n.asyncAdd2().then(() => {
    expect(getState().loading.n).toBeFalsy();
    expect(getState().loading['n/asyncAdd2']).toBeFalsy();
    expect(getState().loading.global).toBeFalsy();
    done();
  });
  expect(getState().loading.n).toBeTruthy();
  expect(getState().loading['n/asyncAdd']).toBeTruthy();
  expect(getState().loading.global).toBeTruthy();
});
