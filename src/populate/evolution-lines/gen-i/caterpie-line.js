import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateCaterpieLine = async () => {
  const caterpie = await pokemonActions.findOneByQuery({ identification: '0010' });
  const metapod = await pokemonActions.findOneByQuery({ identification: '0011' });
  const butterfree = await pokemonActions.findOneByQuery({ identification: '0012' });

  if (!caterpie || !metapod || !butterfree) {
    throw new Error('One or more Pokémon in the Caterpie line not found.');
  }

  const stages = [
    {
      from: caterpie._id,
      to: metapod._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 7,
    },
    {
      from: metapod._id,
      to: butterfree._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 10,
    },
  ];

  const evolutionLine = {
    name: 'Caterpie Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: caterpie._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: metapod._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: butterfree._id, evolutionLineId: line._id });

  return 1;
}
