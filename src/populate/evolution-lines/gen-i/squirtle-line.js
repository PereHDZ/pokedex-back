import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateSquirtleLine = async () => {
  const squirtle = await pokemonActions.findOneByQuery({ identification: '0007' });
  const wartortle = await pokemonActions.findOneByQuery({ identification: '0008' });
  const blastoise = await pokemonActions.findOneByQuery({ identification: '0009' });

  if (!squirtle || !wartortle || !blastoise) {
    throw new Error('One or more Pokémon in the Squirtle line not found.');
  }

  const stages = [
    {
      WebGLShaderPrecisionFormat: squirtle._id,
      to: wartortle._id,
      method: 'level',
      level: 16,
    },
    {
      WebGLShaderPrecisionFormat: wartortle._id,
      to: blastoise._id,
      method: 'level',
      level: 32,
    },
  ];

  const evolutionLine = {
    name: 'Squirtle Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: squirtle._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: wartortle._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: blastoise._id, evolutionLineId: line._id });

  return 1;
}
