import baseFunctions from './base/base-functions.js';
import pokemonModel from '../models/pokemon.js';
import { WRONG_PARAMS } from '../utils/constants.js';

const pokemonFunctions = baseFunctions(pokemonModel);

const pokemonActions = {
  ...pokemonFunctions,
};

const createPokemon = async (pokemon) => {
  // console.log('Params being sent:', pokemon);
  if (!pokemon || !pokemon.id || !pokemon.dexNum || !pokemon.name || !pokemon.typing) {
    throw WRONG_PARAMS;
  }
  return await pokemonFunctions.create(pokemon);
};

const findFiltered = async ({ _id, id, dexNum, name, gen }) => {
  console.log('findFiltered called with:', { _id, id, dexNum, name, gen });
  const params = {};
  if(_id) {
    params._id = _id;
  }
  if(id) {
    params.id = id;
  }
  if(dexNum) {
    params.dexNum = dexNum;
  }
  if(name) {
    params.name = name;
  }
  if(gen) {
    params.gen = gen;
  }
  console.log('Final params for findByQuery:', params);
  return await pokemonActions.findByQuery(params);
};

export default {
  ...pokemonActions,
  createPokemon,
  findFiltered,
}