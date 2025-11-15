import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0101To0100 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0101',
      dexNum: '0101',
      name: { en: 'Electrode' },
      typing: [ getPokemonTypeId(typeMap, 'electric') ],
      gen: 'i',
      baseForm: true,
    },
    // {
    //   identification: '0102',
    //   dexNum: '0102',
    //   name: { en: 'Gastly' },
    //   typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0103',
    //   dexNum: '0103',
    //   name: { en: 'Haunter' },
    //   typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0104',
    //   dexNum: '0104',
    //   name: { en: 'Gengar' },
    //   typing: [ getPokemonTypeId(typeMap, 'ghost'), getPokemonTypeId(typeMap, 'poison') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0105',
    //   dexNum: '0105',
    //   name: { en: 'Onix' },
    //   typing: [ getPokemonTypeId(typeMap, 'rock'), getPokemonTypeId(typeMap, 'ground') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0106',
    //   dexNum: '0106',
    //   name: { en: 'Drowzee' },
    //   typing: [ getPokemonTypeId(typeMap, 'psychic') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0107',
    //   dexNum: '0107',
    //   name: { en: 'Hypno' },
    //   typing: [ getPokemonTypeId(typeMap, 'psychic') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0108',
    //   dexNum: '0108',
    //   name: { en: 'Krabby' },
    //   typing: [ getPokemonTypeId(typeMap, 'water') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0109',
    //   dexNum: '0109',
    //   name: { en: 'Kingler' },
    //   typing: [ getPokemonTypeId(typeMap, 'water') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
    // {
    //   identification: '0110',
    //   dexNum: '0110',
    //   name: { en: 'Voltorb' },
    //   typing: [ getPokemonTypeId(typeMap, 'electric') ],
    //   gen: 'i',
    //   baseForm: true,
    // },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}