import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"

export const populatePoliwagLine = async () => {
  const poliwag = await pokemonActions.findOneByQuery({ identification: '0060' });
  const poliwhirl = await pokemonActions.findOneByQuery({ identification: '0061' });
  const poliwrath = await pokemonActions.findOneByQuery({ identification: '0062' });

  if (!poliwag || !poliwhirl || !poliwrath) {
    throw new Error('One or more Pokémon in the Poliwag line not found.');
  }

  const stages = [
    {
      from: poliwag._id,
      to: poliwhirl._id,
      method: 'level',
      level: 25,
    },
    {
      from: poliwhirl._id,
      to: poliwrath._id,
      method: 'item',
      item: 'Water Stone',
    },
  ];

  const evolutionLine = {
    name: 'Poliwag Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: poliwag._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: poliwhirl._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: poliwrath._id, evolutionLineId: line._id });

  return 1;
}
