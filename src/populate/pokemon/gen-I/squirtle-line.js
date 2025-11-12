import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateSquirtleLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0007',
      dexNum: '0007',
      name: { en: 'Charmander' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0008',
      dexNum: '0008',
      name: { en: 'Wartortle' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0009',
      dexNum: '0009',
      name: { en: 'Blastoise' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}