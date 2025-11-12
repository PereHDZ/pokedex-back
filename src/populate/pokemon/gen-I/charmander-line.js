import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateCharmanderLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0004',
      dexNum: '0004',
      name: { en: 'Charmander' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0005',
      dexNum: '0005',
      name: { en: 'Charmeleon' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0006',
      dexNum: '0006',
      name: { en: 'Charizard' },
      typing: [ getPokemonTypeId(typeMap, 'fire'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}