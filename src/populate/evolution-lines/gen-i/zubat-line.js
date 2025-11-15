import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateZubatLine = async () => {
  const zubat = await pokemonActions.findOneByQuery({ identification: '0041' });
  const golbat = await pokemonActions.findOneByQuery({ identification: '0042' });

  if (!zubat || !golbat) {
    throw new Error('One or more Pokémon in the Zubat line not found.');
  }

  const stages = [
    {
      from: zubat._id,
      to: golbat._id,
      method: 'level',
      level: 22,
    },
  ];

  const evolutionLine = {
    name: 'Zubat Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: zubat._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: golbat._id, evolutionLineId: line._id });

  return 1;
}