import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateDoduoLine = async () => {
  const doduo = await pokemonActions.findOneByQuery({ identification: '0084' });
  const dodrio = await pokemonActions.findOneByQuery({ identification: '0085' });

  if (!doduo || !dodrio) {
    throw new Error('One or more Pokémon in the Doduo line not found.');
  }

  const stages = [
    {
      from: doduo._id,
      to: dodrio._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 31,
    },
  ];

  const evolutionLine = {
    name: 'Dodrio Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: doduo._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: dodrio._id, evolutionLineId: line._id });

  return 1;
}