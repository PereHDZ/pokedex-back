import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateGrimerLine = async () => {
  const grimer = await pokemonActions.findOneByQuery({ identification: '0088' });
  const muk = await pokemonActions.findOneByQuery({ identification: '0089' });

  if (!grimer || !muk) {
    throw new Error('One or more Pokémon in the Grimer line not found.');
  }

  const stages = [
    {
      from: grimer._id,
      to: muk._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 38,
    },
  ];

  const evolutionLine = {
    name: 'Grimer Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: grimer._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: muk._id, evolutionLineId: line._id });

  return 1;
}