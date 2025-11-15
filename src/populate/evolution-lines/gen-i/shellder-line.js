import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateShellderLine = async () => {
  const shellder = await pokemonActions.findOneByQuery({ identification: '0090' });
  const cloyster = await pokemonActions.findOneByQuery({ identification: '0091' });

  if (!shellder || !cloyster) {
    throw new Error('One or more Pokémon in the Shellder line not found.');
  }

  const stages = [
    {
      from: shellder._id,
      to: cloyster._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.WATER_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Shellder Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: shellder._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: cloyster._id, evolutionLineId: line._id });

  return 1;
}