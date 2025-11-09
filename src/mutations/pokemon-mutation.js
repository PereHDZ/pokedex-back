import { GraphQLNonNull } from "graphql";
import { PokemonInputModel, PokemonModel } from "../types/index.js";
import { pokemonActions } from "../actions/index.js";

const createPokemon = {
  type: new GraphQLNonNull(PokemonModel),
  args: {
    pokemon: { type: new GraphQLNonNull(PokemonInputModel) },
  },
  resolve(parent, args) {
    return pokemonActions.createPokemon(args.pokemon);
  },
};

export default {
  createPokemon,
}