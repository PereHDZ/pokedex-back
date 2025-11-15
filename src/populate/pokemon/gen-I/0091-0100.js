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
    // {
    //   identification: '0092',
    //   dexNum: '0092',
    //   name: { en: 'Magneton' },
    //   typing: [ getPokemonTypeId(typeMap, 'electric'), getPokemonTypeId(typeMap, 'steel') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0093',
    //   dexNum: '0093',
    //   name: { en: "Farfetch'd" },
    //   typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0094',
    //   dexNum: '0094',
    //   name: { en: 'Doduo' },
    //   typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0095',
    //   dexNum: '0095',
    //   name: { en: 'Dodrio' },
    //   typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'flying') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0096',
    //   dexNum: '0096',
    //   name: { en: 'Seel' },
    //   typing: [ getPokemonTypeId(typeMap, 'water') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0097',
    //   dexNum: '0097',
    //   name: { en: 'Dewgong' },
    //   typing: [ getPokemonTypeId(typeMap, 'water'), getPokemonTypeId(typeMap, 'ice') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0098',
    //   dexNum: '0098',
    //   name: { en: 'Grimer' },
    //   typing: [ getPokemonTypeId(typeMap, 'poison') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0099',
    //   dexNum: '0099',
    //   name: { en: 'Muk' },
    //   typing: [ getPokemonTypeId(typeMap, 'poison') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0100',
    //   dexNum: '0100',
    //   name: { en: 'Shellder' },
    //   typing: [ getPokemonTypeId(typeMap, 'water') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}