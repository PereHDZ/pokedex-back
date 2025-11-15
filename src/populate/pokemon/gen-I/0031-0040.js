import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0031To0040 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0031',
      dexNum: '0031',
      name: { en: 'Nidoqueen' },
      typing: [ getPokemonTypeId(typeMap, 'poison'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}