import { pokemons, pokemonTypesInPortuguese } from "./data.js";

const foundPokemon = (pokemonName) => {
  const pokemonObjetct = pokemons.find((pokemon) => {
    if (pokemon.name == pokemonName) {
      return pokemon;
    }
  });
  return pokemonObjetct;
};

const selectPokemonFromType = (typeName) => {
  const filteredPokemons = pokemons.filter((pokemon) => {
    if (pokemon.type.includes(typeName)) {
      return pokemon;
    }
  });
  return filteredPokemons;
};

const translatePokemonTypes = (pokemons) => {
  const translatedArray = pokemons.map((pokemon) => {
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemonTypesInPortuguese[pokemon.type[i]]) {
        pokemon.type[i] = pokemonTypesInPortuguese[pokemon.type[i]];
      }
    }
    return pokemon;
  });
  return translatedArray;
};

console.log("Procurar por pokemon por nome: \n");
console.log(foundPokemon("krabby"));
console.log(
  "\n ============================================================= \n"
);
console.log("Selecionar pokemon por tipo: \n");
console.log(selectPokemonFromType("grass"));
console.log(
  "\n ============================================================= \n "
);
console.log("Traduzir todos os tipos de pokemon para portugues: \n");
console.log(translatePokemonTypes(pokemons));
