import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateWeedleLine = async () => {
  const weedle = await pokemonActions.findOneByQuery({ identification: '0013' });
  const kakuna = await pokemonActions.findOneByQuery({ identification: '0014' });
  const beedrill = await pokemonActions.findOneByQuery({ identification: '0015' });

  if (!weedle || !kakuna || !beedrill) {
    throw new Error('One or more Pokémon in the Weedle line not found.');
  }

  const stages = [
    {
      from: weedle._id,
      to: kakuna._id,
      method: 'level',
      level: 7,
    },
    {
      from: kakuna._id,
      to: beedrill._id,
      method: 'level',
      level: 10,
    },
  ];

  const evolutionLine = {
    name: 'Weedle Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: weedle._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: kakuna._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: beedrill._id, evolutionLineId: line._id });

  return 1;
}
