import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import Pokemon from "./Pokemon.js";
import { pokemonActions } from "../actions/index.js";

const EvolutionStageInput = new GraphQLInputObjectType({
  name: 'EvolutionStageInput',
  fields: () => ({
    _id: { type: GraphQLID },
    fromId: { type: new GraphQLNonNull(GraphQLID) },
    toId: { type: new GraphQLNonNull(GraphQLID) },
    level: { type: GraphQLInt },
    item: { type: GraphQLString },
    conditions: { type: GraphQLString },
  }),
})

const EvolutionStage = new GraphQLObjectType({
  name: 'EvolutionStage',
  fields: () => ({
    _id: { type: GraphQLID },
    from: {
      type: new GraphQLNonNull(Pokemon),
      resolve: (parent) => 
        new Promise((resolve, reject) => {
          pokemonActions.findById(parent.fromId).then(resolve).catch(reject);
        }),
    },
    to: {
      type: new GraphQLNonNull(Pokemon),
      resolve: (parent) => 
        new Promise((resolve, reject) => {
          pokemonActions.findById(parent.toId).then(resolve).catch(reject);
        }),
    },    
    level: { type: GraphQLInt },
    item: { type: GraphQLString },
    conditions: { type: GraphQLString },
  }),
});

export const EvolutionLineInput = new GraphQLInputObjectType({
  name: 'EvolutionLineInput',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    stages: { type: new GraphQLNonNull(new GraphQLList(EvolutionStageInput)) },
  }),
});

export default new GraphQLObjectType({
  name: 'EvolutionLine',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    stages: { type: new GraphQLNonNull(new GraphQLList(EvolutionStage)) },
  }),
});