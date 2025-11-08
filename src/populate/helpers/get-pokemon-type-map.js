import { pokemonTypeActions } from'../../actions/index.js'

let catchedTypeMap = null;

export const getPokemonTypeMap = async () => {
  if (catchedTypeMap) return catchedTypeMap;

  const pokemonTypes = await pokemonTypeActions.findAll();
  const typeMap = {};
  for (const type of pokemonTypes) {
    typeMap[type.name] = type;
  }

  catchedTypeMap = typeMap;
  return typeMap;
}