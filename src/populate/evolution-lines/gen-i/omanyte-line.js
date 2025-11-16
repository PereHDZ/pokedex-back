import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateOmanyteLine = async () => {
  const omanyte = await pokemonActions.findOneByQuery({ identification: '0138' });
  const omastar = await pokemonActions.findOneByQuery({ identification: '0139' });

  if (!omanyte || !omastar) {
    throw new Error('One or more Pokémon in the Omanyte line not found.');
  }

  const stages = [
    {
      from: omanyte._id,
      to: omastar._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 40,
    },
  ];

  const evolutionLine = {
    name: 'Omanyte Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: omanyte._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: omastar._id, evolutionLineId: line._id });

  return 1;
}