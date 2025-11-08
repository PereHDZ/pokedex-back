import baseFunctions from './base/base-functions.js';
import pokemonModel from '../models/pokemon.js';
import { WRONG_PARAMS } from '../utils/constants.js';

const pokemonFunctions = baseFunctions(pokemonModel);

const pokemonActions = {
  ...pokemonFunctions,
};

const createPokemon = async (pokemon) => {
  console.log('Params being sent:', pokemon);
  if (!pokemon || !pokemon.id || !pokemon.dexNum || !pokemon.name || !pokemon.typing) {
    throw WRONG_PARAMS;
  }
  return await pokemonFunctions.create(pokemon);
};

export default {
  ...pokemonActions,
  createPokemon,
}