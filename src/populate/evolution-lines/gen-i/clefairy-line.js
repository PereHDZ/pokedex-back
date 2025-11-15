import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateClefairyLine = async () => {
  const clefairy = await pokemonActions.findOneByQuery({ identification: '0035' });
  const clefable = await pokemonActions.findOneByQuery({ identification: '0036' });

  if (!clefairy || !clefable) {
    throw new Error('One or more Pokémon in the Clefairy line not found.');
  }

  const stages = [
    {
      from: clefairy._id,
      to: clefable._id,
      method: 'item',
      item: 'Moon Stone',
    },
  ];

  const evolutionLine = {
    name: 'Clefairy Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: clefairy._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: clefable._id, evolutionLineId: line._id });

  return 1;
}