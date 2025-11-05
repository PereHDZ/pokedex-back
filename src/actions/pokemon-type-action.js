import pokemonTypeModel from '../models/model-type.js';
import baseFunctions from './base/base-functions.js';
import { WRONG_PARAMS } from '../utils/constants.js';

const pokemonTypeFunctions = baseFunctions(pokemonTypeModel);

const pokemonTypeActions = {
    ...pokemonTypeFunctions,
};

const createPokemonType = async (pokemonType) => {
    if (!pokemonType || !pokemonType.name) {
        throw WRONG_PARAMS;
    }
    return await pokemonTypeFunctions.create(pokemonType);
};

const findFiltered = async ({ _id, name }) => {
    const params = {};
    if (_id) {
        params._id = _id;
    }
    if (name) {
        params.name = name;
    }
    return await propertyTypeFunctions.findByQuery(params);
};

export default {
    ...pokemonTypeActions,
    createPokemonType,
    findFiltered,
};