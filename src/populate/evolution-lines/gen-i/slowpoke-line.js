import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateSlowpokeLine = async () => {
  const slowpoke = await pokemonActions.findOneByQuery({ identification: '0079' });
  const slowbro = await pokemonActions.findOneByQuery({ identification: '0080' });

  if (!slowpoke || !slowbro) {
    throw new Error('One or more Pokémon in the Slowpoke line not found.');
  }

  const stages = [
    {
      from: slowpoke._id,
      to: slowbro._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 37,
    },
  ];

  const evolutionLine = {
    name: 'Slowpoke Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: slowpoke._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: slowbro._id, evolutionLineId: line._id });

  return 1;
}