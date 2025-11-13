import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populateCharmanderLine = async () => {
  const charmander = await pokemonActions.findOneByQuery({ identification: '0004' });
  const charmeleon = await pokemonActions.findOneByQuery({ identification: '0005' });
  const charizard = await pokemonActions.findOneByQuery({ identification: '0006' });

  if (!charmander || !charmeleon || !charizard) {
    throw new Error('One or more Pokémon in the Charmander line not found.');
  }

  const stages = [
    {
      form: charmander._id,
      to: charmeleon._id,
      method: 'level',
      level: 16,
    },
    {
      form: charmeleon._id,
      to: charizard._id,
      method: 'level',
      level: 36,
    },
  ];

  const evolutionLine = {
    name: 'Charmander Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: charmander._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: charmeleon._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: charizard._id, evolutionLineId: line._id });

  return 1;
}
