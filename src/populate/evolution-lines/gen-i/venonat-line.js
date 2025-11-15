import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateVenonatLine = async () => {
  const venonat = await pokemonActions.findOneByQuery({ identification: '0048' });
  const venomoth = await pokemonActions.findOneByQuery({ identification: '0049' });

  if (!venonat || !venomoth) {
    throw new Error('One or more Pokémon in the Venonat line not found.');
  }

  const stages = [
    {
      from: venonat._id,
      to: venomoth._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 31,
    },
  ];

  const evolutionLine = {
    name: 'Venonat Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: venonat._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: venomoth._id, evolutionLineId: line._id });

  return 1;
}