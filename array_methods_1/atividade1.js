const createCloneArray = (arrayToBeCloned) =>
  (newArray = arrayToBeCloned.map((element) => element));

console.log(createCloneArray([1, 2, 4, 0]));
// [1, 2, 4, 0]
console.log(createCloneArray([1, 2, [7, 10]]));
// [1, 2, [7, 10]]
