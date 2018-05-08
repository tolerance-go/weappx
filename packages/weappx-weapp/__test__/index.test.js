/* global test, expect */
import connector from '../src/index';

test('export', () => {
  expect(connector.connectPage).toBeInstanceOf(Function);
  expect(connector.connectComponent).toBeInstanceOf(Function);
  expect(connector.setStore).toBeInstanceOf(Function);
});
