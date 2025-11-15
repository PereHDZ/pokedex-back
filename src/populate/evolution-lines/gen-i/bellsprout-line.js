import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateBellsproutLine = async () => {
  const bellsprout = await pokemonActions.findOneByQuery({ identification: '0069' });
  const weepinbell = await pokemonActions.findOneByQuery({ identification: '0070' });
  const victreebell = await pokemonActions.findOneByQuery({ identification: '0071' });

  if (!bellsprout || !weepinbell || !victreebell) {
    throw new Error('One or more Pokémon in the Bellsprout line not found.');
  }

  const stages = [
    {
      from: bellsprout._id,
      to: weepinbell._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 21,
    },
    {
      from: weepinbell._id,
      to: victreebell._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.LEAF_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Bellsprout Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: bellsprout._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: weepinbell._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: victreebell._id, evolutionLineId: line._id });

  return 1;
}
