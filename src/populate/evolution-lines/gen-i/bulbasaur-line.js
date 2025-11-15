import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateBulbasaurLine = async () => {
  const bulbasaur = await pokemonActions.findOneByQuery({ identification: '0001' });
  const ivysaur = await pokemonActions.findOneByQuery({ identification: '0002' });
  const venusaur = await pokemonActions.findOneByQuery({ identification: '0003' });

  if (!bulbasaur || !ivysaur || !venusaur) {
    throw new Error('One or more Pokémon in the Bulbasaur line not found.');
  }

  const stages = [
    {
      from: bulbasaur._id,
      to: ivysaur._id,
      method: 'level',
      level: 16,
    },
    {
      from: ivysaur._id,
      to: venusaur._id,
      method: 'level',
      level: 32,
    },
  ];

  const evolutionLine = {
    name: 'Bulbasaur Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: bulbasaur._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: ivysaur._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: venusaur._id, evolutionLineId: line._id });

  return 1;
}
