import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateRhyhornLine = async () => {
  const rhyhorn = await pokemonActions.findOneByQuery({ identification: '0111' });
  const rhydon = await pokemonActions.findOneByQuery({ identification: '0112' });

  if (!rhyhorn || !rhydon) {
    throw new Error('One or more Pokémon in the Rhyhorn line not found.');
  }

  const stages = [
    {
      from: rhyhorn._id,
      to: rhydon._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 42,
    },
  ];

  const evolutionLine = {
    name: 'Rhyhorn Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: rhyhorn._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: rhydon._id, evolutionLineId: line._id });

  return 1;
}