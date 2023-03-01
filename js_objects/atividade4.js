let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const createNewObjectKey = (object, keyToBeCreated, valueOfNewKey) =>
  (object[keyToBeCreated] = valueOfNewKey);

createNewObjectKey(programming, "isFun", true);
console.log(programming);
