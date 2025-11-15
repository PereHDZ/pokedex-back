import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateJigglypuffLine = async () => {
  const jigglypuff = await pokemonActions.findOneByQuery({ identification: '0039' });
  const wigglytuff = await pokemonActions.findOneByQuery({ identification: '0040' });

  if (!jigglypuff || !wigglytuff) {
    throw new Error('One or more Pokémon in the Jigglypuff line not found.');
  }

  const stages = [
    {
      from: jigglypuff._id,
      to: wigglytuff._id,
      method: 'item',
      item: 'Moon Stone',
    },
  ];

  const evolutionLine = {
    name: 'Jigglypuff Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: jigglypuff._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: wigglytuff._id, evolutionLineId: line._id });

  return 1;
}