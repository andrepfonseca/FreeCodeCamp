let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const changeDifficulty = (object, newDifficulty) =>
  (object.difficulty = newDifficulty);

changeDifficulty(programming, 10);
console.log(programming);
