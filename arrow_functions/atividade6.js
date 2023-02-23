/* function getEvenNumbers(array) {
  let evenNumbers = [];
  for (let i of array) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
} */

const getEvenNumbers = (array) => {
  return array.filter((element) => element % 2 == 0);
};
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
