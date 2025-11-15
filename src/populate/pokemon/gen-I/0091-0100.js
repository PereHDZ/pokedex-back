import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0091To0100 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0091',
      dexNum: '0091',
      name: { en: 'Cloyster' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'ice') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0092',
      dexNum: '0092',
      name: { en: 'Gastly' },
      typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0093',
      dexNum: '0093',
      name: { en: 'Haunter' },
      typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0094',
      dexNum: '0094',
      name: { en: 'Gengar' },
      typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0095',
      dexNum: '0095',
      name: { en: 'Onix' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0096',
      dexNum: '0096',
      name: { en: 'Drowzee' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0097',
      dexNum: '0097',
      name: { en: 'Hypno' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0098',
      dexNum: '0098',
      name: { en: 'Krabby' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0099',
      dexNum: '0099',
      name: { en: 'Kingler' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0100',
      dexNum: '0100',
      name: { en: 'Voltorb' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}