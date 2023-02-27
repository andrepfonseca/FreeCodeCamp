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
  const agesArray = arrayOfPeople.map((element) => element.age);
  return [
    Math.min(...agesArray),
    Math.max(...agesArray),
    Math.max(...agesArray) - Math.min(...agesArray),
  ];
};

// teste
console.log(getMaxMinAndDifferenceBetweenMaxAndMinAges(input));
// [13, 67, 54];
