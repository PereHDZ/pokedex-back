import { GraphQLNonNull } from "graphql";
import { PokemonModel } from "../types";
import { PokemonInput } from "../types/Pokemon";
import { pokemonActions } from "../actions";

const createPokemon = {
  type: GraphQLNonNull(PokemonModel),
  args: {
    pokemon: { type: new GraphQLNonNull(PokemonInput) },
  },
  resolve(parent, args) {
    return pokemonActions.createPokemon(args.pokemon);
  },
};

export default {
  createPokemon,
}