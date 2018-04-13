/* global test, expect, afterEach */
import eventBus from '../src/eventBus';
afterEach(() => (eventBus._listeners = {}));

test('listen', done => {
  eventBus.listen(
    'e',
    function(data) {
      expect(data).toEqual(1);
      expect(this.scope).toEqual(2);
      done();
    },
    { scope: 2 }
  );
  eventBus.emit('e', 1);
});

test('unlisten', done => {
  let cb = 0;
  const un = eventBus.listen('e', () => {
    cb = 1;
  });
  un();
  eventBus.emit('e');
  if (cb === 0) done();
});

test('take', () => {
  expect.assertions(2);
  const promise = eventBus.take('e');
  expect(promise).toBeInstanceOf(Promise);
  promise.then(data => {
    expect(data).toEqual(1);
  });
  eventBus.emit('e', 1);
  eventBus.emit('e', 1);
});
