import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const PokemonNameInput = new GraphQLInputObjectType({
  name: 'PokemonNameInput',
  fields: () => ({
    en: { type: new GraphQLNonNull(GraphQLString) },
    es: { type: GraphQLString },
  }),
});

export default new GraphQLObjectType({
  name: 'PokemonName',
  fields: () => ({
    en: { type: new GraphQLNonNull(GraphQLString) },
    es: { type: GraphQLString },
  }),
});