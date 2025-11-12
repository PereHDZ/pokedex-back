import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Pokemon from "../Pokemon.js";

export const PokemonEvolutionInput = new GraphQLInputObjectType({
  name: 'PokemonEvolutionInput',
  fields: () => ({
    toId: { type: new GraphQLNonNull(GraphQLID) },
    method: { type: new GraphQLNonNull (GraphQLString) },
    level: { type: GraphQLInt },
    item: { type: GraphQLString },
    conditions: { type: GraphQLString },
  }),
});

export const PokemonEvolution = new GraphQLObjectType({
  name: 'PokemonEvolution',
  fields: () => ({
    to: {
      type: Pokemon,
      resolve: async (parent, args, context) => {
        if (!parent.toId) return null;
        return await context.pokemonActions.findById(parent.toId);
      }
    },
    method: { type: new GraphQLNonNull (GraphQLString) },
    level: { type: GraphQLInt },
    item: { type: GraphQLString },
    conditions: { type: GraphQLString },
  })
})