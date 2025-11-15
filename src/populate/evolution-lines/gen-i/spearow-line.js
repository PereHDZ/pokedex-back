import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateSpearowLine = async () => {
  const spearow = await pokemonActions.findOneByQuery({ identification: '0021' });
  const fearow = await pokemonActions.findOneByQuery({ identification: '0022' });

  if (!spearow || !fearow) {
    throw new Error('One or more Pokémon in the Spearow line not found.');
  }

  const stages = [
    {
      from: spearow._id,
      to: fearow._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 20,
    },
  ];

  const evolutionLine = {
    name: 'Spearow Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: spearow._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: fearow._id, evolutionLineId: line._id });

  return 1;
}