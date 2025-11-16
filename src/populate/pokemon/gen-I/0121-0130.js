import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0121To0130 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0121',
      dexNum: '0121',
      name: { en: 'Starmie' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0122',
      dexNum: '0122',
      name: { en: 'Mr. Mime' },
      typing: [ getPokemonTypeId(typeMap, 'psychic'), getPokemonTypeId(typeMap, 'fairy') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0123',
      dexNum: '0123',
      name: { en: 'Scyther' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0124',
      dexNum: '0124',
      name: { en: 'Jynx' },
      typing: [ getPokemonTypeId(typeMap, 'ice'), getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0125',
      dexNum: '0125',
      name: { en: 'Electabuzz' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0126',
      dexNum: '0126',
      name: { en: 'Magmar' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0127',
      dexNum: '0127',
      name: { en: 'Pinsir' },
      typing: [ getPokemonTypeId(typeMap, 'bug') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0128',
      dexNum: '0128',
      name: { en: 'Tauros' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0129',
      dexNum: '0129',
      name: { en: 'Magikarp' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0130',
      dexNum: '0130',
      name: { en: 'Gyarados' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}