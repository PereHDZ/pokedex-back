import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateDrowzeeLine = async () => {
  const drowzee = await pokemonActions.findOneByQuery({ identification: '0096' });
  const hypno = await pokemonActions.findOneByQuery({ identification: '0097' });

  if (!drowzee || !hypno) {
    throw new Error('One or more Pokémon in the Drowzee line not found.');
  }

  const stages = [
    {
      from: drowzee._id,
      to: hypno._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 26,
    },
  ];

  const evolutionLine = {
    name: 'Drowzee Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: drowzee._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: hypno._id, evolutionLineId: line._id });

  return 1;
}