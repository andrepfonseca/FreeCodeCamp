const sliceArray = (array, arrayLength = 0) => {
  if (arrayLength == 0) {
    return array[0];
  } else if (arrayLength < 0) {
    return [];
  } else {
    return array.slice(0, arrayLength);
  }
};

console.log(sliceArray([7, 9, 0, -2], 3));
// [7, 9, 0]
console.log(sliceArray([7, 9, 0, -2]));
// 7
console.log(sliceArray([], 3));
// []
console.log(sliceArray([7, 9, 0, -2], 6));
// [7, 9, 0, -2]
console.log(sliceArray([7, 9, 0, -2], -3));
// []
