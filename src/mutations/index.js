import { GraphQLObjectType } from 'graphql';
import pokemonTypeMutation from './pokemon-type-mutation';
import pokemonMutation from './pokemon-mutation';

export default new GraphQLObjectType({
	name: 'Mutation',
	fields: {
			...pokemonMutation,
			...pokemonTypeMutation,
	},
});