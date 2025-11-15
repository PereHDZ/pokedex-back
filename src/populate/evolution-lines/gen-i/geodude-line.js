import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateGeodudeLine = async () => {
  const geodude = await pokemonActions.findOneByQuery({ identification: '0074' });
  const graveler = await pokemonActions.findOneByQuery({ identification: '0075' });
  const golem = await pokemonActions.findOneByQuery({ identification: '0076' });

  if (!geodude || !graveler || !golem) {
    throw new Error('One or more Pokémon in the Geodude line not found.');
  }

  const stages = [
    {
      from: geodude._id,
      to: graveler._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 25,
    },
    {
      from: graveler._id,
      to: golem._id,
      method: EVOLUTION_METHODS_VALUES.TRADE,
    },
  ];

  const evolutionLine = {
    name: 'Geodude Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: geodude._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: graveler._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: golem._id, evolutionLineId: line._id });

  return 1;
}
