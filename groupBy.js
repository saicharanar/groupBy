const assert = require('./assert.js').assert;

const areArraysEqual = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let index = 0; index < arrayOne.length; index++) {
    if (arrayOne[index] !== arrayTwo[index])
      return false;
  }
  return true;
};

const areEqual = function (elementOne, elementTwo) {
  if (!Array.isArray(elementOne) || !Array.isArray(elementTwo)) {
    return elementOne === elementTwo;
  }

  return areArraysEqual(elementOne, elementTwo);
};

const isIncludes = function (element, set) {
  if (!Array.isArray(element)) {
    return set.includes(element);
  }

  for (let outerIndex = 0; outerIndex < set.length; outerIndex++) {
    if (!Array.isArray(set[outerIndex])) {
      continue;
    }
    if (areArraysEqual(element, set[outerIndex])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (set) {
  const unique = [];
  for (let index = 0; index < set.length; index++) {
    if (!isIncludes(set[index], unique)) {
      unique.push(set[index]);
    }
  }
  return unique;
};

const elementGroup = function (uniqueElement, set) {
  const sameElements = [];
  for (let innerIndex = 0; innerIndex < set.length; innerIndex++) {
    if (areEqual(uniqueElement, set[innerIndex])) {
      sameElements.push(set[innerIndex]);
    }
  }
  return sameElements;
}

const groupSameElements = function (set) {
  const unique = uniqueElements(set);
  const groupedElements = [];

  for (let outerIndex = 0; outerIndex < unique.length; outerIndex++) {
    groupedElements.push(elementGroup(unique[outerIndex], set));
  }
  return groupedElements;
};

const testElementGrouping = function (array, expected, message) {
  const actual = groupSameElements(array);
  console.log(actual);
  console.log(expected);
  assert(actual, expected, message);
};

const elementGroupingTestCases = function () {
  testElementGrouping([1], [[1]], 'A single element');
  testElementGrouping([[1]], [[[1]]], 'A single element as array');
  testElementGrouping([1, [1], [1]], [[1], [[1], [1]]], 'An array with numbers and an array');
  testElementGrouping([1, 2], [[1], [2]], 'An array with only numbers');
  testElementGrouping([1, 2, 1], [[1, 1], [2]], 'An array with only numbers');
  testElementGrouping([1, 2, [1]], [[1], [2], [[1]]], 'An array with numbers and an array');
  testElementGrouping([1, 2, [1, 1]], [[1], [2], [[1, 1]]], 'An array with numbers and an array');
  testElementGrouping([1, 2, [1, 1], [1, 1]], [[1], [2], [[1, 1], [1, 1]]], 'An array with numbers and an array');
  testElementGrouping([1, 2, 1], [[1, 1], [2]], 'An array with numbers and an array');
  testElementGrouping([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'An array with numbers and an array');
  testElementGrouping([[1, 1], 1, [1, 1], 1], [[1, 1], [[1, 1], [1, 1]]], 'An array with numbers and an array');
};

elementGroupingTestCases();
