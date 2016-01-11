function arrayPairSum(sum, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] + array[j] === sum && i !== j) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

console.log(arrayPairSum(10, [3, 4, 5, 6, 7]));
console.log(arrayPairSum(8, [3, 4, 5, 4, 4]));
console.log(arrayPairSum(10, [3, 5, 6, 8]));
