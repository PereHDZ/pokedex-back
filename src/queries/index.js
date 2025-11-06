import { GraphQLObjectType } from 'graphql';
import pokemonTypeQuery from './pokemon-type-query';

export default new GraphQLObjectType({
	name: 'Query',
	fields: {
		...pokemonTypeQuery,
	},
});