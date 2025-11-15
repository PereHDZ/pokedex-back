import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateMachopLine = async () => {
  const machop = await pokemonActions.findOneByQuery({ identification: '0066' });
  const machoke = await pokemonActions.findOneByQuery({ identification: '0067' });
  const machamp = await pokemonActions.findOneByQuery({ identification: '0068' });

  if (!machop || !machoke || !machamp) {
    throw new Error('One or more Pokémon in the Machop line not found.');
  }

  const stages = [
    {
      from: machop._id,
      to: machoke._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 28,
    },
    {
      from: machoke._id,
      to: machamp._id,
      method: EVOLUTION_METHODS_VALUES.TRADE,
    },
  ];

  const evolutionLine = {
    name: 'Machop Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: machop._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: machoke._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: machamp._id, evolutionLineId: line._id });

  return 1;
}
