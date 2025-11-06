import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { PokemonTypeModel } from '../types';
import pokemonTypeActions from '../actions/pokemon-type-action';


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