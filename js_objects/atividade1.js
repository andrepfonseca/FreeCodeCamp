let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addNewLanguage = (object, newLanguage) =>
  object.languages.push(newLanguage);

addNewLanguage(programming, "Swift");
console.log(programming);
