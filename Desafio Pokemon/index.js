import { pokemons, pokemonTypesInPortuguese } from "./data.js";

const findPokemonByName = (pokemonName) => {
  const pokemonObject = pokemons.find((pokemon) => {
    if (pokemon.name == pokemonName) {
      return pokemon;
    }
  });
  return pokemonObject;
};

const selectAllPokemonsFromType = (typeName) => {
  const filteredPokemonsByType = pokemons.filter((pokemon) => {
    if (pokemon.type.includes(typeName)) {
      return pokemon;
    }
  });
  return filteredPokemonsByType;
};

const translatePokemonTypes = (pokemons) => {
  const pokemonsArrayInPortuguese = pokemons.map((pokemon) => {
    for (let i = 0; i < pokemon.type.length; i++) {
      if (pokemonTypesInPortuguese[pokemon.type[i]]) {
        pokemon.type[i] = pokemonTypesInPortuguese[pokemon.type[i]];
      }
    }
    return pokemon;
  });
  return pokemonsArrayInPortuguese;
};

console.log("Procurar por pokemon por nome: \n");
console.log(findPokemonByName("krabby"));
console.log(
  "\n ============================================================= \n"
);
console.log("Selecionar pokemon por tipo: \n");
console.log(selectAllPokemonsFromType("grass"));
console.log(
  "\n ============================================================= \n "
);
console.log("Traduzir todos os tipos de pokemon para portugues: \n");
console.log(translatePokemonTypes(pokemons));
