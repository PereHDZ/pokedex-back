import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateVulpixLine = async () => {
  const vulpix = await pokemonActions.findOneByQuery({ identification: '0037' });
  const ninetales = await pokemonActions.findOneByQuery({ identification: '0038' });

  if (!vulpix || !ninetales) {
    throw new Error('One or more Pokémon in the Vulpix line not found.');
  }

  const stages = [
    {
      from: vulpix._id,
      to: ninetales._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.FIRE_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Vulpix Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: vulpix._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: ninetales._id, evolutionLineId: line._id });

  return 1;
}