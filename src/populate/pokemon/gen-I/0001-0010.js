import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populate0001To0010 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0001',
      dexNum: '0001',
      name: { en: 'Bulbasaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0002',
      dexNum: '0002',
      name: { en: 'Ivysaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0003',
      dexNum: '0003',
      name: { en: 'Venusaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0004',
      dexNum: '0004',
      name: { en: 'Charmander' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0005',
      dexNum: '0005',
      name: { en: 'Charmeleon' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0006',
      dexNum: '0006',
      name: { en: 'Charizard' },
      typing: [ getPokemonTypeId(typeMap, 'fire'), getPokemonTypeId(typeMap, 'flying') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0007',
      dexNum: '0007',
      name: { en: 'Charmander' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0008',
      dexNum: '0008',
      name: { en: 'Wartortle' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0009',
      dexNum: '0009',
      name: { en: 'Blastoise' },
      typing: [ getPokemonTypeId(typeMap, 'water') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0010',
      dexNum: '0010',
      name: { en: 'Caterpie' },
      typing: [ getPokemonTypeId(typeMap, 'bug') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  // await pokemonActions.updatePokemon({
  //   _id: createdPokemon[0]._id, 
  //   evolutions: [{ 
  //     toId: createdPokemon[1]._id, 
  //     method: 'level-up', 
  //     level: 16 
  //   }]
  // });
  // await pokemonActions.updatePokemon({
  //   _id: createdPokemon[1]._id, 
  //   evolutions: [{
  //     toId: createdPokemon[2]._id, 
  //     method: 'level-up', 
  //     level: 32 
  //   }]
  // });

  return createdPokemon.length;
};