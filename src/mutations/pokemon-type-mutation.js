import { GraphQLNonNull } from 'graphql';
import { PokemonTypeInputModel, PokemonTypeModel } from '../types'
import pokemonTypeActions from '../actions/pokemon-type-action';

const createPokemonType = {
	type: new GraphQLNonNull(PokemonTypeModel),
	args: {
		pokemonType: { type: new GraphQLNonNull(PokemonTypeInputModel) },
	},
	resolve(parent, args) {
		return pokemonTypeActions.createPokemonType(args.pokemonType);
	},
};

const updatePokemonType = {
	type: new GraphQLNonNull(PokemonTypeModel),
	args: {
		pokemonType: { type: GraphQLNonNull(PokemonTypeInputModel) },
	},
	resolve(parent, args) {
		return pokemonTypeActions.updatePokemonType(args.pokemonType);
	}
};

export default {
	createPokemonType,
	updatePokemonType,
};