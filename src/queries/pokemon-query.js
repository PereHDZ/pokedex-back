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
    const pokemon = await pokemonActions.findFiltered(args);
    if (!pokemon) return;
    return pokemon.sort((a, b) => a.dexNum.localeCompare(b.dexNum));
  },
};

export default {
  pokemons,
};