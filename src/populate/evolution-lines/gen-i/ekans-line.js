import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateEkansLine = async () => {
  const ekans = await pokemonActions.findOneByQuery({ identification: '0023' });
  const arbok = await pokemonActions.findOneByQuery({ identification: '0024' });

  if (!ekans || !arbok) {
    throw new Error('One or more Pokémon in the Ekans line not found.');
  }

  const stages = [
    {
      from: ekans._id,
      to: arbok._id,
      method: 'level',
      level: 22,
    },
  ];

  const evolutionLine = {
    name: 'Ekans Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: ekans._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: arbok._id, evolutionLineId: line._id });

  return 1;
}