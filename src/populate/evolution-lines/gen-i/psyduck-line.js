import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populatePsyduckLine = async () => {
  const psyduck = await pokemonActions.findOneByQuery({ identification: '0054' });
  const golduck = await pokemonActions.findOneByQuery({ identification: '0055' });

  if (!psyduck || !golduck) {
    throw new Error('One or more Pokémon in the Psyduck line not found.');
  }

  const stages = [
    {
      from: psyduck._id,
      to: golduck._id,
      method: 'level',
      level: 33,
    },
  ];

  const evolutionLine = {
    name: 'Psyduck Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: psyduck._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: golduck._id, evolutionLineId: line._id });

  return 1;
}