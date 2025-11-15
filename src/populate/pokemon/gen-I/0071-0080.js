import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0071To0080 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0071',
      dexNum: '0071',
      name: { en: 'Victreebel' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0072',
      dexNum: '0072',
      name: { en: 'Tentacool' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0073',
      dexNum: '0073',
      name: { en: 'Tentacruel' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0074',
      dexNum: '0074',
      name: { en: 'Geodude' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0075',
      dexNum: '0075',
      name: { en: 'Graveler' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0076',
      dexNum: '0076',
      name: { en: 'Golem' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0077',
      dexNum: '0077',
      name: { en: 'Ponyta' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0078',
      dexNum: '0078',
      name: { en: 'Rapidash' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0079',
      dexNum: '0079',
      name: { en: 'Slowpoke' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0080',
      dexNum: '0080',
      name: { en: 'Slowbro' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}