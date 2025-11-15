import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0081To0090 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0081',
      dexNum: '0081',
      name: { en: 'Magnemite' },
      typing: [ getPokemonTypeId(typeMap, 'electric'), getPokemonTypeId(typeMap, 'steel') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0082',
      dexNum: '0082',
      name: { en: 'Magneton' },
      typing: [ getPokemonTypeId(typeMap, 'electric'), getPokemonTypeId(typeMap, 'steel') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0083',
      dexNum: '0083',
      name: { en: "Farfetch'd" },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0084',
      dexNum: '0084',
      name: { en: 'Doduo' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0085',
      dexNum: '0085',
      name: { en: 'Dodrio' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0086',
      dexNum: '0086',
      name: { en: 'Seel' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0087',
      dexNum: '0087',
      name: { en: 'Dewgong' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'ice') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0088',
      dexNum: '0088',
      name: { en: 'Grimer' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0089',
      dexNum: '0089',
      name: { en: 'Muk' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0090',
      dexNum: '0090',
      name: { en: 'Shellder' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}