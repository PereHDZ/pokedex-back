import { GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import PokemonName, { PokemonNameInput } from './others/Pokemon-name.js'

export const PokemonInput = new GraphQLInputObjectType({
  name: 'PokemonInput',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: PokemonNameInput },
    typing: { type: new GraphQLList(GraphQLID) },
  }),
});

export default new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: PokemonName },
    typing: { type: new GraphQLList(GraphQLID) },
  }),
});