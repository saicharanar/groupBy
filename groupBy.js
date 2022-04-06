const assertLib = require('./assert.js');
const assert = assertLib.assert;
const areEqual = assertLib.areEqual;

const doesIncludes = function (array, element) {
  if (!Array.isArray(element)) {
    return array.includes(element);
  }

  for (let index = 0; index < array.length; index++) {
    if (areEqual(element, array[index])) {
      return true;
    }
  }
  return false;
};

const uniqueElements = function (array) {
  const unique = [];
  for (let index = 0; index < array.length; index++) {
    if (!doesIncludes(unique, array[index])) {
      unique.push(array[index]);
    }
  }
  return unique;
};

// const elementGroup = function (element, array) {
//   const group = [];
//   for (let index = 0; index < array.length; index++) {
//     if (areEqual(element, array[index])) {
//       group.push(array[index]);
//     }
//   }
//   return group;
// }

// const groupSameElements = function (array) {
//   const unique = uniqueElements(array);
//   const groupedElements = [];
//   for (let index = 0; index < unique.length; index++) {
//     groupedElements.push(elementGroup(unique[index], array));
//   }
//   return groupedElements;
// };

const testElementsFrequency = function (array, expected, message) {
  const actual = groupSameElements(array);
  console.log(actual);
  console.log(expected);
  assert(actual, expected, message);
};

const elementGroupingTestCases = function () {
  testElementsFrequency([1], [[1, 1]], 'A single element');
  // testElementsFrequency([[1]], [[[1]]], 'A single element as array');
  // testElementsFrequency([1, [1], [1]], [[1], [[1], [1]]], 'An array with numbers and an array');
  // testElementsFrequency([1, 2], [[1], [2]], 'An array with only numbers');
  // testElementsFrequency([1, 2, 1], [[1, 1], [2]], 'An array with only numbers');
  // testElementsFrequency([1, 2, [1]], [[1], [2], [[1]]], 'An array with numbers and an array');
  // testElementsFrequency([1, 2, [1, 1]], [[1], [2], [[1, 1]]], 'An array with numbers and an array');
  // testElementsFrequency([1, 2, [1, 1], [1, 1]], [[1], [2], [[1, 1], [1, 1]]], 'An array with numbers and an array');
  // testElementsFrequency([1, 2, 1], [[1, 1], [2]], 'An array with numbers and an array');
  // testElementsFrequency([1, 2, 3, 1, 2, 4], [[1, 1], [2, 2], [3], [4]], 'An array with numbers and an array');
  // testElementsFrequency([[1, 1], 1, [1, 1], 1], [[[1, 1], [1, 1]], [1, 1]], 'An array with numbers and an array');
};

elementGroupingTestCases();
// console.log(groupSameElements([[[1], [2]], [[1], [2]], 1]));
// console.log(groupSameElements([[[1], [2]], [[1], [2]]]));