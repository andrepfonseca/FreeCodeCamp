const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const getMaxMinAndDifferenceBetweenMaxAndMinAges = (arrayOfPeople) => {
  let maxAge;
  let minAge;
  arrayOfPeople.map((element) => {
    if (element.age > maxAge || maxAge == undefined) maxAge = element.age;
    if (element.age < minAge || minAge == undefined) minAge = element.age;
  });
  return [minAge, maxAge, maxAge - minAge];
};

// teste
console.log(getMaxMinAndDifferenceBetweenMaxAndMinAges(input));
// [13, 67, 54];
