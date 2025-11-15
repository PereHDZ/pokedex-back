import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0051To0060 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0051',
      dexNum: '0051',
      name: { en: 'Dugtrio' },
      typing: [ getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0052',
      dexNum: '0052',
      name: { en: 'Meowth' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0053',
      dexNum: '0053',
      name: { en: 'Persian' },
      typing: [ getPokemonTypeId(typeMap, 'normal') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0054',
      dexNum: '0054',
      name: { en: 'Psyduck' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0055',
      dexNum: '0055',
      name: { en: 'Golduck' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0056',
      dexNum: '0056',
      name: { en: 'Mankey' },
      typing: [ getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0057',
      dexNum: '0057',
      name: { en: 'Primeape' },
      typing: [ getPokemonTypeId(typeMap, 'fighting') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0058',
      dexNum: '0058',
      name: { en: 'Growlithe' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0059',
      dexNum: '0059',
      name: { en: 'Arcanine' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0060',
      dexNum: '0060',
      name: { en: 'Poliwag' },
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