import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateMagnemiteLine = async () => {
  const magnemite = await pokemonActions.findOneByQuery({ identification: '0081' });
  const magneton = await pokemonActions.findOneByQuery({ identification: '0082' });

  if (!magnemite || !magneton) {
    throw new Error('One or more Pokémon in the Magnemite line not found.');
  }

  const stages = [
    {
      from: magnemite._id,
      to: magneton._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 30,
    },
  ];

  const evolutionLine = {
    name: 'Magnemite Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: magnemite._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: magneton._id, evolutionLineId: line._id });

  return 1;
}