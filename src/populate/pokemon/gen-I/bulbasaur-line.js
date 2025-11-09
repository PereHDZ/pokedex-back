import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateBulbasaurLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0001',
      dexNum: 1,
      name: { en: 'Bulbasaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
    },
    {
      id: '0002',
      dexNum: 2,
      name: { en: 'Ivysaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
    },
    {
      id: '0003',
      dexNum: 3,
      name: { en: 'Venusaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}