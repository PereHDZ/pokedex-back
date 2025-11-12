import { GraphQLBoolean, GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { PokemonModel } from "../types/index.js";
import { pokemonActions } from "../actions/index.js";

const pokemons = {
  type: new GraphQLList(PokemonModel),
  args: {
    gen: { type: GraphQLString },
    baseForm: { type: GraphQLBoolean },
  },
  async resolve(_, args) {
    return await pokemonActions.findFiltered(args);
  },
};

export default {
  pokemons,
};