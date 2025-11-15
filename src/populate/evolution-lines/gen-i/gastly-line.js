import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateGastlyLine = async () => {
  const gastly = await pokemonActions.findOneByQuery({ identification: '0092' });
  const haunter = await pokemonActions.findOneByQuery({ identification: '0093' });
  const gengar = await pokemonActions.findOneByQuery({ identification: '0094' });

  if (!gastly || !haunter || !gengar) {
    throw new Error('One or more Pokémon in the Gastly line not found.');
  }

  const stages = [
    {
      from: gastly._id,
      to: haunter._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 25,
    },
    {
      from: haunter._id,
      to: gengar._id,
      method: EVOLUTION_METHODS_VALUES.TRADE,
    },
  ];

  const evolutionLine = {
    name: 'Gastly Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: gastly._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: haunter._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: gengar._id, evolutionLineId: line._id });

  return 1;
}
