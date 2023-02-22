import { pokemons, pokemonTypesInPortuguese } from "./data.js";

const foundPokemon = (pokemonName) => {
  return pokemons.find((pokemon) => pokemon.name == pokemonName);
};

const selectedPokemonsFromType = (typeName) => {
  return pokemons.filter((pokemon) => pokemon.type.includes(typeName));
};

const pokemonsArrayWithTypesInPortuguese = (pokemonsArray) => {
  return pokemonsArray.map((pokemon) => {
    const newPokemonTypes = pokemon.type.map(
      (pokemonType) => (pokemonType = pokemonTypesInPortuguese[pokemonType])
    );
    pokemon.type = newPokemonTypes;
    return pokemon;
  });
};

console.log("Procurar por pokemon por nome: \n");
console.log(foundPokemon("krabby"));
console.log(
  "\n ============================================================= \n"
);
console.log("Selecionar pokemon por tipo: \n");
console.log(selectedPokemonsFromType("grass"));
console.log(
  "\n ============================================================= \n "
);
console.log("Traduzir todos os tipos de pokemon para portugues: \n");
console.log(pokemonsArrayWithTypesInPortuguese(pokemons));
