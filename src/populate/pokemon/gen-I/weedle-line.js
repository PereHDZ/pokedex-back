import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateWeedleLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0013',
      dexNum: '0013',
      name: { en: 'Weedle' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0014',
      dexNum: '0014',
      name: { en: 'Kakuna' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0015',
      dexNum: '0015',
      name: { en: 'Beedrill' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}