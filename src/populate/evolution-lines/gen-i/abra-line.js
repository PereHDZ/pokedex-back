import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateAbraLine = async () => {
  const abra = await pokemonActions.findOneByQuery({ identification: '0063' });
  const kadabra = await pokemonActions.findOneByQuery({ identification: '0064' });
  const alakazam = await pokemonActions.findOneByQuery({ identification: '0065' });

  if (!abra || !kadabra || !alakazam) {
    throw new Error('One or more Pokémon in the Abra line not found.');
  }

  const stages = [
    {
      from: abra._id,
      to: kadabra._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 16,
    },
    {
      from: kadabra._id,
      to: alakazam._id,
      method: EVOLUTION_METHODS_VALUES.TRADE,
    },
  ];

  const evolutionLine = {
    name: 'Abra Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: abra._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: kadabra._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: alakazam._id, evolutionLineId: line._id });

  return 1;
}
