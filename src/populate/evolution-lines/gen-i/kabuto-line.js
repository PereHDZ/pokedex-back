import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateKabutoLine = async () => {
  const kabuto = await pokemonActions.findOneByQuery({ identification: '0140' });
  const kabutops = await pokemonActions.findOneByQuery({ identification: '0141' });

  if (!kabuto || !kabutops) {
    throw new Error('One or more Pokémon in the Kabuto line not found.');
  }

  const stages = [
    {
      from: kabuto._id,
      to: kabutops._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 40,
    },
  ];

  const evolutionLine = {
    name: 'Kabuto Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: kabuto._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: kabutops._id, evolutionLineId: line._id });

  return 1;
}