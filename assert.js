
const isEqual = function (actual, expected) {
  const bothElementsAreArrays = Array.isArray(actual) && Array.isArray(expected);
  if (!bothElementsAreArrays) {
    return actual === expected;
  }
  const array1 = actual;
  const array2 = expected;
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!isEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
};
const assert = function (actual, expected, message) {
  const testResult = isEqual(actual, expected);
  const status = testResult ? '✅' : '❌';
  console.log(status, '-', message);

  return testResult;
};

exports.assert = assert;
exports.isEqual = isEqual;
