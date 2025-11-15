import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populatePidgeyLine = async () => {
  const pidgey = await pokemonActions.findOneByQuery({ identification: '0016' });
  const pidgeotto = await pokemonActions.findOneByQuery({ identification: '0017' });
  const pidgeot = await pokemonActions.findOneByQuery({ identification: '0018' });

  if (!pidgey || !pidgeotto || !pidgeot) {
    throw new Error('One or more Pokémon in the Pidgey line not found.');
  }

  const stages = [
    {
      from: pidgey._id,
      to: pidgeotto._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 18,
    },
    {
      from: pidgeotto._id,
      to: pidgeot._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 36,
    },
  ];

  const evolutionLine = {
    name: 'Pidgey Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: pidgey._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: pidgeotto._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: pidgeot._id, evolutionLineId: line._id });

  return 1;
}
