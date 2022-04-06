const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const frequencyOfElements = function (elementList) {
  return [[1, 1]];
}

const testFrequency = function (elementList, expected, message) {
  const actual = frequencyOfElements(elementList);
  console.log(actual);
  assert(actual, expected, message);
}

const frequencyTestCases = function () {
  testFrequency(
    [1],
    [[1, 1]],
    'A single element'
  );
}

frequencyTestCases();