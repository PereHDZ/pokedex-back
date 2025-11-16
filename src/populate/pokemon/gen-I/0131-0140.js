import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0131To0140 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0131',
      dexNum: '0131',
      name: { en: 'Lapras' },
      typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'ice') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0132',
      dexNum: '0132',
      name: { en: 'Ditto' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0133',
      dexNum: '0133',
      name: { en: 'Eevee' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0134',
      dexNum: '0134',
      name: { en: 'Vaporeon' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0135',
      dexNum: '0135',
      name: { en: 'Jolteon' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0136',
      dexNum: '0136',
      name: { en: 'Flareon' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0137',
      dexNum: '0137',
      name: { en: 'Porygon' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0138',
      dexNum: '0138',
      name: { en: 'Omanyte' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0139',
      dexNum: '0139',
      name: { en: 'Omastar' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0140',
      dexNum: '0140',
      name: { en: 'Kabuto' },
      typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}