const isEqual = function (argument1, argument2) {
  const bothElementsAreArrays = Array.isArray(argument1) && Array.isArray(argument2);
  if (!bothElementsAreArrays) {
    return argument1 === argument2;
  }
  const array1 = argument1;
  const array2 = argument2;
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

exports.isEqual = isEqual;
