import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import PokemonName, { PokemonNameInput } from './others/Pokemon-name.js'
import PokemonType from './Pokemon-Type.js';
import { pokemonTypeActions } from '../actions/index.js';

export const PokemonInput = new GraphQLInputObjectType({
  name: 'PokemonInput',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: new GraphQLNonNull(GraphQLString) },
    dexNum: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: PokemonNameInput },
    typing: { type: new GraphQLList(GraphQLID) },
    gen: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export default new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    _id: { type: GraphQLID },
    id: { type: new GraphQLNonNull(GraphQLString) },
    dexNum: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: PokemonName },
    typing: { 
      type: new GraphQLList(PokemonType),
       resolve: async (parent) => {
        console.warn('parent: ', parent);
        const types = await Promise.all(
        parent.typing.map(async (typeId) => {
          const typeDoc = await pokemonTypeActions.findById(typeId);
          return typeDoc;
        })
    );
    console.warn('types: ', types);
    return types.filter(Boolean); 
      },
    },
    gen: { type: new GraphQLNonNull(GraphQLString) },
  }),
});