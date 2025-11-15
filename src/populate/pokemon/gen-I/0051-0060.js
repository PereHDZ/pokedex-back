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
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}