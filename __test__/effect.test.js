/* global test, expect, afterEach */
import wepyx, { _clean, connect } from '../src/index';
import { delay } from './helper';
import { ERANGE } from 'constants';
import { debug } from 'util';

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
