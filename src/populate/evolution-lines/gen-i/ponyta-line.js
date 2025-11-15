import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populatePonytaLine = async () => {
  const ponyta = await pokemonActions.findOneByQuery({ identification: '0077' });
  const rapidash = await pokemonActions.findOneByQuery({ identification: '0078' });

  if (!ponyta || !rapidash) {
    throw new Error('One or more Pokémon in the Ponyta line not found.');
  }

  const stages = [
    {
      from: ponyta._id,
      to: rapidash._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 40,
    },
  ];

  const evolutionLine = {
    name: 'Ponyta Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: ponyta._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: rapidash._id, evolutionLineId: line._id });

  return 1;
}