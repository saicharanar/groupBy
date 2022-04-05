
const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let outerIndex = 0; outerIndex < array1.length; outerIndex++) {
    for (let innerIndex = 0; innerIndex < array1[outerIndex].length; innerIndex++) {

      if (array1[outerIndex][innerIndex] !== array2[outerIndex][innerIndex]) {
        return false;
      }

    }
  }
  return true;
}

const assert = function (actual, expected, message) {
  const testResult = areArraysEqual(actual, expected);
  const status = testResult ? '✅' : '❌';
  console.log(status, '-', message);

  return testResult;
};

exports.assert = assert;
