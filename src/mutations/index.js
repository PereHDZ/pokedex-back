import { GraphQLObjectType } from 'graphql';
import pokemonTypeMutation from './pokemon-type-mutation';

export default new GraphQLObjectType({
	name: 'Mutation',
	fields: {
			...pokemonTypeMutation,
	},
});