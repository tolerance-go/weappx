/* global test, expect, afterEach */
import wepyx, { _clean } from '../src/index';

afterEach(() => {
  _clean();
});

test('onError type', () => {
  expect(() => {
    wepyx.model({
      namespace: 'n',
    });
    wepyx.init({
      onError: 1,
    });
    wepyx.start();
  }).toThrowError(/onError type must be Function/);
});

test('onError work', done => {
  wepyx.model({
    namespace: 'n',
    actions: {
      add() {
        return async () => {
          throw new Error();
        };
      },
    },
  });
  wepyx.init({
    onError(error) {
      expect(error).toBeInstanceOf(Error);
      expect(this).toEqual(wepyx);
      done();
    },
  });
  wepyx.start();
  wepyx.dispatcher.n.add();
});

test('effects params type', done => {
  wepyx.model({
    namespace: 'n',
    state: {},
    actions: {
      add() {
        return async ({ dispatcher, state, getState, loading }) => {
          expect(loading).toBeInstanceOf(Object);
          expect(dispatcher).toBeInstanceOf(Object);
          expect(state).toBeInstanceOf(Object);
          expect(getState).toBeInstanceOf(Function);
          done();
        };
      },
    },
  });
  wepyx.start();
  wepyx.dispatcher.n.add();
});
