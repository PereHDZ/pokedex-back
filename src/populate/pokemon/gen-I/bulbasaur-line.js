import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js";

export const populateBulbasaurLine = async (typeMap) => {
  const pokemons = [
    {
      id: '0001',
      dexNum: '0001',
      name: { en: 'Bulbasaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0002',
      dexNum: '0002',
      name: { en: 'Ivysaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      id: '0003',
      dexNum: '0003',
      name: { en: 'Venusaur' },
      typing: [ getPokemonTypeId(typeMap, 'grass'), getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
  ]

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  await pokemonActions.updatePokemon({
    _id: createdPokemon[0]._id, 
    evolutions: [{ 
      toId: createdPokemon[1]._id, 
      method: 'level-up', 
      level: 16 
    }]
  });
  await pokemonActions.updatePokemon({
    _id: createdPokemon[1]._id, 
    evolutions: [{
      toId: createdPokemon[2]._id, 
      method: 'level-up', 
      level: 32 
    }]
  })

  return pokemons.length
} 