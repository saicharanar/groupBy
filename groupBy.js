const assert = require('./assert.js').assert;

const areArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index])
      return false;
  }
  return true;
};

const areEqual = function (elementOne, elementTwo) {
  if (elementOne.length === undefined || elementTwo.length === undefined) {
    return elementOne === elementTwo;
  }
  return areArraysEqual(elementOne, elementTwo);
};

const isIncludes = function (element, array) {
  if (element.length === undefined) {
    return array.includes(element);
  }

  for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
    if (array[outerIndex].length === undefined) {
      continue;
    }
    if (areArraysEqual(element, array[outerIndex])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (array) {
  const unique = [];
  for (let index = 0; index < array.length; index++) {
    if (!isIncludes(array[index], unique)) {
      unique.push(array[index]);
    }
  }
  return unique;
};

const groupSameElements = function (array) {
  const unique = uniqueElements(array);
  const groupedElements = [];

  for (let outerIndex = 0; outerIndex < unique.length; outerIndex++) {
    const sameElements = [];
    for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
      if (areEqual(unique[outerIndex], array[innerIndex])) {
        sameElements.push(array[innerIndex]);
      }
    }
    groupedElements.push(sameElements);
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
// console.log(groupSameElements([[[1], [2]], [[1], [2]], 1]));