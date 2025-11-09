import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const PokemonTypeInput = new GraphQLInputObjectType({
	name: 'PokemonTypeInput',
	fields: () => ({
		_id: { type: GraphQLID },
		name: { type: new GraphQLNonNull(GraphQLString) },
		weaknesses: { type: new GraphQLList(GraphQLID) },
		resistances: { type: new GraphQLList(GraphQLID) },
		immunities: { type: new GraphQLList(GraphQLID) },
	})
})

export default new GraphQLObjectType({
	name: 'PokemonType',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLID) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		weaknesses: { type: new GraphQLList(GraphQLID) },
		resistances: { type: new GraphQLList(GraphQLID) },
		immunities: { type: new GraphQLList(GraphQLID) },
	}),
});