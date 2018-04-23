/* global test, expect, afterEach */
import wepyx, { _clean } from '../src/index';
import { delay } from './helper';

afterEach(() => {
  _clean();
});

test('model loading namespace confilct', () => {
  expect(() => {
    wepyx.model({
      namespace: 'global',
    });
    wepyx.start();
  }).toThrowError(/model namespace:\w+ is reserved; please use other namespace/);

  expect(() => {
    wepyx.model({
      namespace: 'loading',
    });
    wepyx.start();
  }).toThrowError(/model namespace:\w+ is reserved; please use other namespace/);
});

test('model loading', done => {
  wepyx.model({
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
  wepyx.start();
  const getState = wepyx._store.getState;

  expect(getState().loading.n).toBeFalsy();
  expect(getState().loading['n/asyncAdd']).toBeFalsy();
  expect(getState().loading.global).toBeFalsy();
  wepyx.dispatcher.n.asyncAdd().then(() => {
    expect(getState().loading.n).toBeTruthy();
    expect(getState().loading['n/asyncAdd']).toBeFalsy();
    expect(getState().loading.global).toBeTruthy();
  });
  wepyx.dispatcher.n.asyncAdd2().then(() => {
    expect(getState().loading.n).toBeFalsy();
    expect(getState().loading['n/asyncAdd2']).toBeFalsy();
    expect(getState().loading.global).toBeFalsy();
    done();
  });
  expect(getState().loading.n).toBeTruthy();
  expect(getState().loading['n/asyncAdd']).toBeTruthy();
  expect(getState().loading.global).toBeTruthy();
});
