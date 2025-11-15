import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateDiglettLine = async () => {
  const diglett = await pokemonActions.findOneByQuery({ identification: '0050' });
  const dugtrio = await pokemonActions.findOneByQuery({ identification: '0051' });

  if (!diglett || !dugtrio) {
    throw new Error('One or more Pokémon in the Diglett line not found.');
  }

  const stages = [
    {
      from: diglett._id,
      to: dugtrio._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 26,
    },
  ];

  const evolutionLine = {
    name: 'Diglett Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: diglett._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: dugtrio._id, evolutionLineId: line._id });

  return 1;
}