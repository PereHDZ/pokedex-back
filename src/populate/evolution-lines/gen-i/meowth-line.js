import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateMeowthLine = async () => {
  const meowth = await pokemonActions.findOneByQuery({ identification: '0052' });
  const persian = await pokemonActions.findOneByQuery({ identification: '0053' });

  if (!meowth || !persian) {
    throw new Error('One or more Pokémon in the Meowth line not found.');
  }

  const stages = [
    {
      from: meowth._id,
      to: persian._id,
      method: 'level',
      level: 28,
    },
  ];

  const evolutionLine = {
    name: 'Meowth Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: meowth._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: persian._id, evolutionLineId: line._id });

  return 1;
}