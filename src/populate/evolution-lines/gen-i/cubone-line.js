import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateCuboneLine = async () => {
  const cubone = await pokemonActions.findOneByQuery({ identification: '0104' });
  const marowak = await pokemonActions.findOneByQuery({ identification: '0105' });

  if (!cubone || !marowak) {
    throw new Error('One or more Pokémon in the Cubone line not found.');
  }

  const stages = [
    {
      from: cubone._id,
      to: marowak._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 28,
    },
  ];

  const evolutionLine = {
    name: 'Cubone Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: cubone._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: marowak._id, evolutionLineId: line._id });

  return 1;
}