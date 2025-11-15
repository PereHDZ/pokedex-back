import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateParasLine = async () => {
  const paras = await pokemonActions.findOneByQuery({ identification: '0046' });
  const parasect = await pokemonActions.findOneByQuery({ identification: '0047' });

  if (!paras || !parasect) {
    throw new Error('One or more Pokémon in the Paras line not found.');
  }

  const stages = [
    {
      from: paras._id,
      to: parasect._id,
      method: 'level',
      level: 24,
    },
  ];

  const evolutionLine = {
    name: 'Paras Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: paras._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: parasect._id, evolutionLineId: line._id });

  return 1;
}