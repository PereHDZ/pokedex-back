import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateRattataLine = async () => {
  const rattata = await pokemonActions.findOneByQuery({ identification: '0019' });
  const raticate = await pokemonActions.findOneByQuery({ identification: '0020' });

  if (!rattata || !raticate) {
    throw new Error('One or more Pokémon in the Rattata line not found.');
  }

  const stages = [
    {
      from: rattata._id,
      to: raticate._id,
      method: 'level',
      level: 20,
    },
  ];

  const evolutionLine = {
    name: 'Rattata Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: rattata._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: raticate._id, evolutionLineId: line._id });

  return 1;
}
