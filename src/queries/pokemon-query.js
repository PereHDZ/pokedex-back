import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { PokemonModel } from "../types/index.js";
import { pokemonActions } from "../actions/index.js";

const pokemons = {
  type: new GraphQLList(PokemonModel),
  args: {
    gen: { type: GraphQLString },
  },
  async resolve(_, args) {
    console.log('args: ', args)
    return await pokemonActions.findFiltered(args);
  },
};

export default {
  pokemons,
};