import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateNidoranMLine = async () => {
  const nidoran = await pokemonActions.findOneByQuery({ identification: '0032' });
  const nidorino = await pokemonActions.findOneByQuery({ identification: '0033' });
  const nidoking = await pokemonActions.findOneByQuery({ identification: '0034' });

  if (!nidoran || !nidorino || !nidoking) {
    throw new Error('One or more Pokémon in the Nidoran♂ line not found.');
  }

  const stages = [
    {
      from: nidoran._id,
      to: nidorino._id,
      method: 'level',
      level: 16,
    },
    {
      from: nidorino._id,
      to: nidoking._id,
      method: 'item',
      item: 'Moon Stone',
    },
  ];

  const evolutionLine = {
    name: 'Nidoran♀ Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: nidoran._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: nidorino._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: nidoking._id, evolutionLineId: line._id });

  return 1;
}
