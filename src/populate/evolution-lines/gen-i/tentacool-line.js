import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateTentacoolLine = async () => {
  const tentacool = await pokemonActions.findOneByQuery({ identification: '0072' });
  const tentacruel = await pokemonActions.findOneByQuery({ identification: '0073' });

  if (!tentacool || !tentacruel) {
    throw new Error('One or more Pokémon in the Tentacool line not found.');
  }

  const stages = [
    {
      from: tentacool._id,
      to: tentacruel._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 30,
    },
  ];

  const evolutionLine = {
    name: 'Tentacool Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: tentacool._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: tentacruel._id, evolutionLineId: line._id });

  return 1;
}