import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import PokemonName, { PokemonNameInput } from './others/Pokemon-name.js'
import PokemonType from './Pokemon-Type.js';
import { evolutionLineActions, pokemonTypeActions } from '../actions/index.js';
import { PokemonEvolution } from './others/Pokemon-evolution.js';

export const PokemonInput = new GraphQLInputObjectType({
  name: 'PokemonInput',
  fields: () => ({
    _id: { type: GraphQLID },
    identification: { type: new GraphQLNonNull(GraphQLString) },
    dexNum: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: PokemonNameInput },
    typing: { type: new GraphQLList(GraphQLID) },
    gen: { type: new GraphQLNonNull(GraphQLString) },
    baseForm: { type: GraphQLBoolean },
    evolutionLineId: { type: GraphQLID },
  }),
});

export default new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    _id: { type: GraphQLID },
    identification: { type: new GraphQLNonNull(GraphQLString) },
    dexNum: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: PokemonName },
    typing: { 
      type: new GraphQLList(PokemonType),
       resolve: async (parent) => {
        const types = await Promise.all(
        parent.typing.map(async (typeId) => {
          const typeDoc = await pokemonTypeActions.findById(typeId);
          return typeDoc;
        })
    );
    return types.filter(Boolean); 
      },
    },
    gen: { type: new GraphQLNonNull(GraphQLString) },
    baseForm: { type: GraphQLBoolean },
    evolutionLine: {
      type: PokemonEvolution,
      resolve: (parent) => 
        new Promise((resolve, reject) => {
          evolutionLineActions.findById(parent.evolutionLineId).then(resolve).catch(reject);
        }),
    },
  }),
});