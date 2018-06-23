/* global test, expect, afterEach */
import weappx from '../src/index';
import createLoading from '../../weappx-plugin-loading/src/index';

test('onError type', () => {
  expect(() => {
    const app = weappx({
      onError: 1,
    });
    app.model({
      namespace: 'n',
    });
    app.start();
  }).toThrowError(/onError type must be Function/);
});

test('onError work', done => {
  const app = weappx({
    onError(error) {
      expect(error).toBeInstanceOf(Error);
      expect(this).toEqual(app);
      done();
    },
  });
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
  app.start();
  app.dispatcher.n.add();
});

test('effects params type', done => {
  const app = weappx();
  app.use(createLoading());
  app.model({
    namespace: 'n',
    state: {},
    actions: {
      add() {
        return async ({ dispatcher, state, getState }) => {
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
