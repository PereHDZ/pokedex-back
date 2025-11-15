import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateKrabbyLine = async () => {
  const krabby = await pokemonActions.findOneByQuery({ identification: '0098' });
  const kingler = await pokemonActions.findOneByQuery({ identification: '0099' });

  if (!krabby || !kingler) {
    throw new Error('One or more Pokémon in the krabby line not found.');
  }

  const stages = [
    {
      from: krabby._id,
      to: kingler._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 28,
    },
  ];

  const evolutionLine = {
    name: 'Krabby Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: krabby._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: kingler._id, evolutionLineId: line._id });

  return 1;
}