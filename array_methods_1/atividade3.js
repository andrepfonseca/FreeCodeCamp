const concatenateArrayNumbersIntoString = (arrayOfNumbers) => {
  let stringOfNumbers = "";
  let iterator = 0;
  arrayOfNumbers.forEach((element) => {
    iterator += 1;
    stringOfNumbers += element;
    if (iterator % 3 == 0) {
      stringOfNumbers += ".";
    }
  });
  return stringOfNumbers;
};

console.log(concatenateArrayNumbersIntoString([1, 2, 3, 4, 5, 6, 7, 8]));
// “123.456.78”
