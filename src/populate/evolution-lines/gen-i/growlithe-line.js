import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateGrowlitheLine = async () => {
  const growlithe = await pokemonActions.findOneByQuery({ identification: '0058' });
  const arcanine = await pokemonActions.findOneByQuery({ identification: '0059' });

  if (!growlithe || !arcanine) {
    throw new Error('One or more Pokémon in the Growlithe line not found.');
  }

  const stages = [
    {
      from: growlithe._id,
      to: arcanine._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.FIRE_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Growlithe Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: growlithe._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: arcanine._id, evolutionLineId: line._id });

  return 1;
}