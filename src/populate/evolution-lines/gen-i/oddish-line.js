import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateOddishLine = async () => {
  const oddish = await pokemonActions.findOneByQuery({ identification: '0043' });
  const gloom = await pokemonActions.findOneByQuery({ identification: '0044' });
  const vileplume = await pokemonActions.findOneByQuery({ identification: '0045' });

  if (!oddish || !gloom || !vileplume) {
    throw new Error('One or more Pokémon in the Oddish line not found.');
  }

  const stages = [
    {
      from: oddish._id,
      to: gloom._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 21,
    },
    {
      from: gloom._id,
      to: vileplume._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.LEAF_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Oddish Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: oddish._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: gloom._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: vileplume._id, evolutionLineId: line._id });

  return 1;
}
