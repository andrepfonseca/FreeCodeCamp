const arr = [1, 2, 3];
const stringConcat = arr.reduce((acc, cur) => acc.toString() + cur.toString());
console.log(stringConcat); // "123"
