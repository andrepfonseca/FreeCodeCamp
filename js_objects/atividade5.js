let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const printAllLanguagesOnObject = (object) =>
  object.languages.map((element) => console.log(element));

printAllLanguagesOnObject(programming);
