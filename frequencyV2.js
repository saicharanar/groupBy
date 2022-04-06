const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const incrementCountIfPresent = function (group, element) {
  for (let index = 0; index < group.length; index++) {
    if (isEqual(group[index][0], element)) {
      group[index][1]++;
    }
  }

  return group;
}

const pushIfNotPresent = function (group, element) {
  for (let index = 0; index < group.length; index++) {
    if (isEqual(group[index][0], element)) {
      return group;
    }
  }

  group.push([element, 1]);
  return group;
}

const frequencyOfElements = function (elementList) {
  let group = [];

  for (let index = 0; index < elementList.length; index++) {
    group = incrementCountIfPresent(group, elementList[index]);
    group = pushIfNotPresent(group, elementList[index]);
  }

  return group;
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