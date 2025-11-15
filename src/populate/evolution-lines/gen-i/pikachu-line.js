import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populatePikachuLine = async () => {
  const pikachu = await pokemonActions.findOneByQuery({ identification: '0025' });
  const raichu = await pokemonActions.findOneByQuery({ identification: '0026' });

  if (!pikachu || !raichu) {
    throw new Error('One or more Pokémon in the Pikachu line not found.');
  }

  const stages = [
    {
      from: pikachu._id,
      to: raichu._id,
      method: 'item',
      item: 'Thunder Stone',
    },
  ];

  const evolutionLine = {
    name: 'Pikachu Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: pikachu._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: raichu._id, evolutionLineId: line._id });

  return 1;
}