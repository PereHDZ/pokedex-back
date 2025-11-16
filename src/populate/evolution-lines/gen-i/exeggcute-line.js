import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateExeggcuteLine = async () => {
  const exeggcute = await pokemonActions.findOneByQuery({ identification: '0102' });
  const exeggutor = await pokemonActions.findOneByQuery({ identification: '0103' });

  if (!exeggcute || !exeggutor) {
    throw new Error('One or more Pokémon in the Exeggcute line not found.');
  }

  const stages = [   {
      from: exeggcute._id,
      to: exeggutor._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.LEAF_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Exeggcute Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: exeggcute._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: exeggutor._id, evolutionLineId: line._id });

  return 1;
}