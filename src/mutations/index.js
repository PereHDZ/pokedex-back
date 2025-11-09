import { GraphQLObjectType } from 'graphql';
import pokemonTypeMutation from './pokemon-type-mutation.js';
import pokemonMutation from './pokemon-mutation.js';

export default new GraphQLObjectType({
	name: 'Mutation',
	fields: {
			...pokemonMutation,
			...pokemonTypeMutation,
	},
});