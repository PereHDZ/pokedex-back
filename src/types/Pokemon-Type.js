import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const PokemonTypeInput = new GraphQLInputObjectType({
    name: 'PokemonTypeInput',
    fields: () => ({
        _id: { type: GraphQLID },
        name: { type: new GraphQLNonNull(GraphQLString) },
    })
})

export default new GraphQLObjectType({
    name: 'PokemonType',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
    }),
});