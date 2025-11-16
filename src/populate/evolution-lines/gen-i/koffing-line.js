import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateKoffingLine = async () => {
  const koffing = await pokemonActions.findOneByQuery({ identification: '0109' });
  const weezing = await pokemonActions.findOneByQuery({ identification: '0110' });

  if (!koffing || !weezing) {
    throw new Error('One or more Pokémon in the Koffing line not found.');
  }

  const stages = [
    {
      from: koffing._id,
      to: weezing._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 35,
    },
  ];

  const evolutionLine = {
    name: 'Koffing Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: koffing._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: weezing._id, evolutionLineId: line._id });

  return 1;
}