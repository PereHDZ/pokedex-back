import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateHorseaLine = async () => {
  const horsea = await pokemonActions.findOneByQuery({ identification: '0116' });
  const seadra = await pokemonActions.findOneByQuery({ identification: '0117' });

  if (!horsea || !seadra) {
    throw new Error('One or more Pokémon in the Horsea line not found.');
  }

  const stages = [
    {
      from: horsea._id,
      to: seadra._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 32,
    },
  ];

  const evolutionLine = {
    name: 'Horsea Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: horsea._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: seadra._id, evolutionLineId: line._id });

  return 1;
}