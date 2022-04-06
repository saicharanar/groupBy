const assert = require('./assert.js').assert;
const isEqual = require('./isEqual.js').isEqual;

const contains = function (array, element) {
  if (!Array.isArray(element)) {
    return array.includes(element);
  }

  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (array) {
  const unique = [];
  for (let index = 0; index < array.length; index++) {
    if (!contains(unique, array[index])) {
      unique.push(array[index]);
    }
  }
  return unique;
};

const elementGroup = function (element, array) {
  const group = [];
  for (let index = 0; index < array.length; index++) {
    if (isEqual(element, array[index])) {
      group.push(array[index]);
    }
  }
  return group;
}

const groupSameElements = function (array) {
  const unique = uniqueElements(array);
  const groupedElements = [];
  for (let index = 0; index < unique.length; index++) {
    groupedElements.push(elementGroup(unique[index], array));
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
  testElementGrouping([[1, 1], 1, [1, 1], 1], [[[1, 1], [1, 1]], [1, 1]], 'An array with numbers and an array');
};

elementGroupingTestCases();
