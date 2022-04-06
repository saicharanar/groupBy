const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const occurrence = function (counts, element) {
  for (let index = 0; index < counts.length; index++) {
    if (isEqual(counts[index][0], element)) {
      counts[index][1]++;
      return counts;
    }
  }

  counts.push([element, 1]);
  return counts;
}

const frequencyOfElements = function (elementList) {
  let counts = [];

  for (let index = 0; index < elementList.length; index++) {
    counts = occurrence(counts, elementList[index]);
  }

  return counts;
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
  testFrequency(
    [1, 2],
    [[1, 1], [2, 1]],
    'A double element array with no duplication'
  );
  testFrequency(
    [1, 2, 2],
    [[1, 1], [2, 2]],
    'A double element array with duplication'
  );
  testFrequency(
    [1, 2, 3],
    [[1, 1], [2, 1], [3, 1]],
    'A triple element array with no duplication'
  );
  testFrequency(
    [1, 2, 2],
    [[1, 1], [2, 2]],
    'A triple element array with duplication'
  );
  testFrequency(
    [1, [2]],
    [[1, 1], [[2], 1]],
    'A nested array element array with no duplication'
  );
  testFrequency(
    [1, [2], [2]],
    [[1, 1], [[2], 2]],
    'A nested array element array with duplication'
  );
}

frequencyTestCases();