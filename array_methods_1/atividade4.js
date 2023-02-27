const filterStringsWithUpToFiveChars = (arrayOfStrings) =>
  arrayOfStrings.filter((element) => element.length <= 5);

// teste
console.log(
  filterStringsWithUpToFiveChars([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);
// ["pato", "oi", "comer"]
