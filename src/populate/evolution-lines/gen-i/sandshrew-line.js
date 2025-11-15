import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateSandshrewLine = async () => {
  const sandshrew = await pokemonActions.findOneByQuery({ identification: '0027' });
  const sandslash = await pokemonActions.findOneByQuery({ identification: '0028' });

  if (!sandshrew || !sandslash) {
    throw new Error('One or more Pokémon in the Sandshrew line not found.');
  }

  const stages = [
    {
      from: sandshrew._id,
      to: sandslash._id,
      method: 'level',
      level: 22,
    },
  ];

  const evolutionLine = {
    name: 'Sandshrew Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: sandshrew._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: sandslash._id, evolutionLineId: line._id });

  return 1;
}