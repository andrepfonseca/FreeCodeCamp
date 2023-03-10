import { pokemons, pokemonTypesInPortuguese, Pokemon, pokemonTypes } from "./dataTS";

const getPokemonByName = (pokemonName: string): Pokemon | undefined => 
    pokemons.find((pokemon: Pokemon): boolean => pokemon.name == pokemonName);

const getPokemonsByType = (typeName: string): Pokemon[] => 
    pokemons.filter((pokemon: Pokemon): boolean => pokemon.type.includes(typeName));

const translatePokemonTypesToPortuguese = (pokemonsArray: Pokemon[]): Pokemon[] => 
    pokemonsArray.map((pokemon: Pokemon): Pokemon => {
        const translatedTypes = pokemon.type.map(
            (pokemonType: string): string =>
                (pokemonType = pokemonTypesInPortuguese[pokemonType as keyof pokemonTypes]))
        pokemon.type = translatedTypes;
        return pokemon;
  });

console.log("Procurar por pokemon por nome: \n");
console.log(getPokemonByName("krabby"));
console.log(
  "\n ============================================================= \n"
);
console.log("Selecionar pokemon por tipo: \n");
console.log(getPokemonsByType("grass"));
console.log(
  "\n ============================================================= \n "
);
console.log("Traduzir todos os tipos de pokemon para portugues: \n");
console.log(translatePokemonTypesToPortuguese(pokemons));
