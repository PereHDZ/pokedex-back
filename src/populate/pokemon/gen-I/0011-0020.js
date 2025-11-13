import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populate0011To0020 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0011',
      dexNum: '0011',
      name: { en: 'Metapod' },
      typing: [ getPokemonTypeId(typeMap, 'bug') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0012',
      dexNum: '0012',
      name: { en: 'Butterfree' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0013',
      dexNum: '0013',
      name: { en: 'Weedle' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0014',
      dexNum: '0014',
      name: { en: 'Kakuna' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0015',
      dexNum: '0015',
      name: { en: 'Beedrill' },
      typing: [ getPokemonTypeId(typeMap, 'bug'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
{
      identification: '0016',
      dexNum: '0016',
      name: { en: 'Pidgey' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0017',
      dexNum: '0017',
      name: { en: 'Pidgeotto' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0018',
      dexNum: '0018',
      name: { en: 'Pidgeot' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0019',
      dexNum: '0019',
      name: { en: 'Rattata' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0020',
      dexNum: '0020',
      name: { en: 'Raticate' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
};