import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateVulpixLine = async () => {
  const vulpix = await pokemonActions.findOneByQuery({ identification: '0037' });
  const ninetales = await pokemonActions.findOneByQuery({ identification: '0038' });

  if (!vulpix || !ninetales) {
    throw new Error('One or more Pokémon in the Vulpix line not found.');
  }

  const stages = [
    {
      from: vulpix._id,
      to: ninetales._id,
      method: 'item',
      item: 'Fire Stone',
    },
  ];

  const evolutionLine = {
    name: 'Vulpix Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: vulpix._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: ninetales._id, evolutionLineId: line._id });

  return 1;
}