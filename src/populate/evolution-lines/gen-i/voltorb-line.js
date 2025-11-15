import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateVoltorbLine = async () => {
  const voltorb = await pokemonActions.findOneByQuery({ identification: '0100' });
  const electrode = await pokemonActions.findOneByQuery({ identification: '0101' });

  if (!voltorb || !electrode) {
    throw new Error('One or more Pokémon in the Voltorb line not found.');
  }

  const stages = [
    {
      from: voltorb._id,
      to: electrode._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 30,
    },
  ];

  const evolutionLine = {
    name: 'voltorb Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: voltorb._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: electrode._id, evolutionLineId: line._id });

  return 1;
}