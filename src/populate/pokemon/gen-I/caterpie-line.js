import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateCaterpieLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0010',
      dexNum: '0010',
      name: { en: 'Caterpie' },
      typing: [ getPokemonTypeId(typeMap, 'bug') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0011',
      dexNum: '0011',
      name: { en: 'Metapod' },
      typing: [ getPokemonTypeId(typeMap, 'bug') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0012',
      dexNum: '0012',
      name: { en: 'Butterfree' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}