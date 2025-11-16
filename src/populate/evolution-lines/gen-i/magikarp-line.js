import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateMagikarpLine = async () => {
  const magikarp = await pokemonActions.findOneByQuery({ identification: '0129' });
  const gyarados = await pokemonActions.findOneByQuery({ identification: '0130' });

  if (!magikarp || !gyarados) {
    throw new Error('One or more Pokémon in the Magikarp line not found.');
  }

  const stages = [
    {
      from: magikarp._id,
      to: gyarados._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 20,
    },
  ];

  const evolutionLine = {
    name: 'Magikarp Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: magikarp._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: gyarados._id, evolutionLineId: line._id });

  return 1;
}