import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateGoldeenLine = async () => {
  const goldeen = await pokemonActions.findOneByQuery({ identification: '0118' });
  const seaking = await pokemonActions.findOneByQuery({ identification: '0119' });

  if (!goldeen || !seaking) {
    throw new Error('One or more Pokémon in the Goldeen line not found.');
  }

  const stages = [
    {
      from: goldeen._id,
      to: seaking._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 33,
    },
  ];

  const evolutionLine = {
    name: 'Goldeen Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: goldeen._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: seaking._id, evolutionLineId: line._id });

  return 1;
}