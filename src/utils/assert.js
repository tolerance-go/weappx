export default function assert(condition, error = 'assert no pass') {
  let correct = condition;
  if (typeof condition === 'function') {
    correct = condition();
  }
  if (!correct) {
    throw new Error(error);
  }
}
