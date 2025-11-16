import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0141To0151 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0141',
      dexNum: '0141',
      name: { en: 'Kabutops' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0142',
      dexNum: '0142',
      name: { en: 'Aerodactyl' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0143',
      dexNum: '0143',
      name: { en: 'Snorlax' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0144',
      dexNum: '0144',
      name: { en: 'Articuno' },
      typing: [ getPokemonTypeId(typeMap, 'ice'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0145',
      dexNum: '0145',
      name: { en: 'Zapdos' },
      typing: [ getPokemonTypeId(typeMap, 'electric'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0146',
      dexNum: '0146',
      name: { en: 'Moltres' },
      typing: [ getPokemonTypeId(typeMap, 'fire'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0147',
      dexNum: '0147',
      name: { en: 'Dratini' },
      typing: [ getPokemonTypeId(typeMap, 'dragon') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0148',
      dexNum: '0148',
      name: { en: 'Dragonair' },
      typing: [ getPokemonTypeId(typeMap, 'dragon') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0149',
      dexNum: '0149',
      name: { en: 'Dragonite' },
      typing: [ getPokemonTypeId(typeMap, 'dragon'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0150',
      dexNum: '0150',
      name: { en: 'Mewtwo' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0151',
      dexNum: '0151',
      name: { en: 'Mew' },
      typing: [ getPokemonTypeId(typeMap, 'psychic') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}