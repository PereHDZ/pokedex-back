import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES } from "../../../utils/constants.js";

export const populateDratiniLine = async () => {
  const dratini = await pokemonActions.findOneByQuery({ identification: '0147' });
  const dragonair = await pokemonActions.findOneByQuery({ identification: '0148' });
  const dragonite = await pokemonActions.findOneByQuery({ identification: '0149' });

  if (!dratini || !dragonair || !dragonite) {
    throw new Error('One or more Pokémon in the Dratini line not found.');
  }

  const stages = [
    {
      from: dratini._id,
      to: dragonair._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 30,
    },
    {
      from: dragonair._id,
      to: dragonite._id,
      method: EVOLUTION_METHODS_VALUES.LEVEL,
      level: 55,
    },
  ];

  const evolutionLine = {
    name: 'Dratini Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: dratini._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: dragonair._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: dragonite._id, evolutionLineId: line._id });

  return 1;
}
