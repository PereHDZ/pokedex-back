import evolutionLineModel from '../models/evolution-line.js';
import { WRONG_PARAMS } from '../utils/constants.js';
import baseFunctions from './base/base-functions.js';

const evolutionLineFunctions = baseFunctions(evolutionLineModel);

const evolutionLineActions = {
  ...evolutionLineFunctions
};

const createEvolutionLine = async (evolutionLine) => {
  if (!evolutionLine || evolutionLine._id || !evolutionLine.stages) {
    throw WRONG_PARAMS;
  }
  return await evolutionLineActions.create(evolutionLine);
};

const findById = async (id) => {
  if (!id) {
    throw WRONG_PARAMS;
  }
  return await evolutionLineActions.findById(id);
;}

export default {
  ...evolutionLineActions,
  createEvolutionLine,
  findById,
}