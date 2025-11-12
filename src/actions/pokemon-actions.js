import baseFunctions from './base/base-functions.js';
import pokemonModel from '../models/pokemon.js';
import { WRONG_PARAMS } from '../utils/constants.js';

const pokemonFunctions = baseFunctions(pokemonModel);

const pokemonActions = {
  ...pokemonFunctions,
};

const createPokemon = async (pokemon) => {
  if (!pokemon || 
    !pokemon.id || 
    !pokemon.dexNum || 
    !pokemon.name || 
    !pokemon.typing ||
    !pokemon.gen
  ) {
    throw WRONG_PARAMS;
  }
  return await pokemonFunctions.create(pokemon);
};

const updatePokemon = async (pokemon) => {
  if (!pokemon || !pokemon._id) {
    throw WRONG_PARAMS;
  }
  const { _id, ...update } = pokemon;
  return await pokemonFunctions.update(_id, update);
};

const findFiltered = async ({ _id, id, dexNum, name, gen, baseForm }) => {
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
  if(baseForm !== undefined) {
    params.baseForm = baseForm;
  }
  return await pokemonActions.findByQuery(params);
};

export default {
  ...pokemonActions,
  createPokemon,
  updatePokemon,
  findFiltered,
}