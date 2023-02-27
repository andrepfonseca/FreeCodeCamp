const concatenateArrayNumbersIntoString = (array) => {
  return array.reduce((acc, cur, index) => {
    if (index % 3 === 0 && index != 0) acc += ".";
    return (acc += cur);
  }, "");
};

console.log(concatenateArrayNumbersIntoString([1, 2, 3, 4, 5, 6, 7, 8]));
// “123.456.78”
