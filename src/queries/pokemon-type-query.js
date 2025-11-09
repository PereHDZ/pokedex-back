import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { PokemonTypeModel } from '../types/index.js';
import pokemonTypeActions from '../actions/index.js';


const pokemonTypes = {
	type: new GraphQLList(PokemonTypeModel),
	args: {
		_id: { type: GraphQLID },
		name: { type: GraphQLString },
	},
	resolve(parent, args) {
		return pokemonTypeActions.findFiltered(args);
	},
};

export default {
	pokemonTypes,
};