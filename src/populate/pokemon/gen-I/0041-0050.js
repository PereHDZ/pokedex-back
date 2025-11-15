import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0041To0050 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0041',
      dexNum: '0041',
      name: { en: 'Zubat' },
      typing: [ getPokemonTypeId(typeMap, 'poison'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0042',
      dexNum: '0042',
      name: { en: 'Golbat' },
      typing: [ getPokemonTypeId(typeMap, 'poison'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0043',
      dexNum: '0043',
      name: { en: 'Oddish' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0044',
      dexNum: '0044',
      name: { en: 'Gloom' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0045',
      dexNum: '0045',
      name: { en: 'Vileplume' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0046',
      dexNum: '0046',
      name: { en: 'Paras' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'grass') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0047',
      dexNum: '0047',
      name: { en: 'Parasect' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'grass') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0048',
      dexNum: '0048',
      name: { en: 'Venonat' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'grass') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0049',
      dexNum: '0049',
      name: { en: 'Venomoth' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'grass') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0050',
      dexNum: '0050',
      name: { en: 'Diglett' },
      typing: [ getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}