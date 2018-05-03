/* global test, expect, afterEach */
import weappx from '../src/index';
import { connector } from './helper';

test('onError type', () => {
  expect(() => {
    const app = weappx();
    app.model({
      namespace: 'n',
    });
    app.init({
      connector,
      onError: 1,
    });
    app.start();
  }).toThrowError(/onError type must be Function/);
});

test('onError work', done => {
  const app = weappx();
  app.model({
    namespace: 'n',
    actions: {
      add() {
        return async () => {
          throw new Error();
        };
      },
    },
  });
  app.init({
    connector,
    onError(error) {
      expect(error).toBeInstanceOf(Error);
      expect(this).toEqual(app);
      done();
    },
  });
  app.start();
  app.dispatcher.n.add();
});

test('effects params type', done => {
  const app = weappx();
  app.init({ connector });
  app.model({
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
  app.start();
  app.dispatcher.n.add();
});
