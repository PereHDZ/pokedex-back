import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0111To0120 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0111',
      dexNum: '0111',
      name: { en: 'Rhyhorn' },
      typing: [ getPokemonTypeId(typeMap, 'ground'), getPokemonTypeId(typeMap, 'rock') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0112',
      dexNum: '0112',
      name: { en: 'Rhydon' },
      typing: [ getPokemonTypeId(typeMap, 'ground'), getPokemonTypeId(typeMap, 'rock') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0113',
      dexNum: '0113',
      name: { en: 'Chansey' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0114',
      dexNum: '0114',
      name: { en: 'Tangela' },
      typing: [ getPokemonTypeId(typeMap, 'grass') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0115',
      dexNum: '0115',
      name: { en: 'Kangaskhan' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0116',
      dexNum: '0116',
      name: { en: 'Horsea' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0117',
      dexNum: '0117',
      name: { en: 'Seadra' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0118',
      dexNum: '0118',
      name: { en: 'Goldeen' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0119',
      dexNum: '0119',
      name: { en: 'Seaking' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0120',
      dexNum: '0120',
      name: { en: 'Staryu' },
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