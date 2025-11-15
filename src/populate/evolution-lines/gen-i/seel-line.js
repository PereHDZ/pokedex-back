import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateSeelLine = async () => {
  const seel = await pokemonActions.findOneByQuery({ identification: '0086' });
  const dewgong = await pokemonActions.findOneByQuery({ identification: '0087' });

  if (!seel || !dewgong) {
    throw new Error('One or more Pokémon in the Seel line not found.');
  }

  const stages = [
    {
      from: seel._id,
      to: dewgong._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 34,
    },
  ];

  const evolutionLine = {
    name: 'Seel Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: seel._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: dewgong._id, evolutionLineId: line._id });

  return 1;
}