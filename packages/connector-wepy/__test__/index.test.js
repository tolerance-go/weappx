/* global test, expect */
import connector from '../src/index';

test('export', () => {
  expect(connector.connect).toBeInstanceOf(Function);
  expect(connector.setStore).toBeInstanceOf(Function);
});
