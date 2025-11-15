import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0061To0070 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0061',
      dexNum: '0061',
      name: { en: 'Poliwhirl' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0062',
      dexNum: '0062',
      name: { en: 'Poliwrath' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0063',
      dexNum: '0063',
      name: { en: 'Abra' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0064',
      dexNum: '0064',
      name: { en: 'Kadabra' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0065',
      dexNum: '0065',
      name: { en: 'Alakazam' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0066',
      dexNum: '0066',
      name: { en: 'Machop' },
      typing: [ getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0067',
      dexNum: '0067',
      name: { en: 'Machoke' },
      typing: [ getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0068',
      dexNum: '0068',
      name: { en: 'Machamp' },
      typing: [ getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0069',
      dexNum: '0069',
      name: { en: 'Bellsprout' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0070',
      dexNum: '0070',
      name: { en: 'Weepinbell' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}