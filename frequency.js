const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const contains = function (elementList, element) {
  if (!Array.isArray(element)) {
    return elementList.includes(element);
  }

  for (let index = 0; index < elementList.length; index++) {
    if (isEqual(element, elementList[index])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (elementList) {
  const unique = [];
  for (let index = 0; index < elementList.length; index++) {
    if (!contains(unique, elementList[index])) {
      unique.push(elementList[index]);
    }
  }
  return unique;
};

const occurrence = function (elementList, element) {
  let count = 0;
  for (let innerIndex = 0; innerIndex < elementList.length; innerIndex++) {
    if (isEqual(element, elementList[innerIndex])) {
      count++;
    }
  }
  return count;
}

const frequencyOfElements = function (elementList) {
  const unique = uniqueElements(elementList);
  const group = [];

  for (let outerIndex = 0; outerIndex < unique.length; outerIndex++) {
    const elementFrequency = occurrence(elementList, unique[outerIndex]);
    group.push([unique[outerIndex], elementFrequency]);
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
    'A double element array'
  );
  testFrequency(
    [1, 2, 2],
    [[1, 1], [2, 2]],
    'A triple element array with duplication'
  );
  testFrequency(
    [1, [1]],
    [[1, 1], [[1], 1]],
    'A double element array with array without duplication'
  );

}

frequencyTestCases();