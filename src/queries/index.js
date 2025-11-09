import { GraphQLObjectType } from 'graphql';
import pokemonQuery from './pokemon-query.js';
import pokemonTypeQuery from './pokemon-type-query.js';

export default new GraphQLObjectType({
	name: 'Query',
	fields: {
		...pokemonQuery,
		...pokemonTypeQuery,
	},
});