import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0021To0030 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0021',
      dexNum: '0021',
      name: { en: 'Spearow' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0022',
      dexNum: '0022',
      name: { en: 'Fearow' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0023',
      dexNum: '0023',
      name: { en: 'Ekans' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0024',
      dexNum: '0024',
      name: { en: 'Arbok' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0025',
      dexNum: '0025',
      name: { en: 'Pikachu' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0026',
      dexNum: '0026',
      name: { en: 'Raichu' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0027',
      dexNum: '0027',
      name: { en: 'Sandshrew' },
      typing: [ getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0028',
      dexNum: '0028',
      name: { en: 'Sandslash' },
      typing: [ getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0029',
      dexNum: '0029',
      name: { en: 'Nidoran♀' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0030',
      dexNum: '0030',
      name: { en: 'Nidorina' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
};
