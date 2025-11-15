import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateNidoranFLine = async () => {
  const nidoran = await pokemonActions.findOneByQuery({ identification: '0029' });
  const nidorina = await pokemonActions.findOneByQuery({ identification: '0030' });
  const nidoqueen = await pokemonActions.findOneByQuery({ identification: '0031' });

  if (!nidoran || !nidorina || !nidoqueen) {
    throw new Error('One or more Pokémon in the Nidoran♀ line not found.');
  }

  const stages = [
    {
      from: nidoran._id,
      to: nidorina._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 16,
    },
    {
      from: nidorina._id,
      to: nidoqueen._id,
      method: 'item',
      item: 'Moon Stone',
    },
  ];

  const evolutionLine = {
    name: 'Nidoran♀ Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: nidoran._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: nidorina._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: nidoqueen._id, evolutionLineId: line._id });

  return 1;
}
