import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populatePidgeyLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0016',
      dexNum: '0016',
      name: { en: 'Pidgey' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0017',
      dexNum: '0017',
      name: { en: 'Pidgeotto' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0018',
      dexNum: '0018',
      name: { en: 'Pidgeot' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  for (const pokemon of pokemons) {
    await pokemonActions.createPokemon(pokemon);
  }

  return pokemons.length
}