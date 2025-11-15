import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateMankeyLine = async () => {
  const mankey = await pokemonActions.findOneByQuery({ identification: '0056' });
  const primeape = await pokemonActions.findOneByQuery({ identification: '0057' });

  if (!mankey || !primeape) {
    throw new Error('One or more Pokémon in the Mankey line not found.');
  }

  const stages = [
    {
      from: mankey._id,
      to: primeape._id,
      method: 'level',
      level: 28,
    },
  ];

  const evolutionLine = {
    name: 'Mankey Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: mankey._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: primeape._id, evolutionLineId: line._id });

  return 1;
}