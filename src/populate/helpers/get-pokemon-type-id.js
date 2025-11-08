import { NOT_FOUND } from "../../utils/constants.js";
import { getPokemonTypeMap } from "./get-pokemon-type-map.js"

export const getPokemonTypeId = (typeMap, typeName) => {
  const type = typeMap[typeName];

  if (!type) {
    throw new NOT_FOUND;
  }

  return type._id;
}