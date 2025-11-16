import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateStaryuLine = async () => {
  const staryu = await pokemonActions.findOneByQuery({ identification: '0120' });
  const starmie = await pokemonActions.findOneByQuery({ identification: '0121' });

  if (!staryu || !starmie) {
    throw new Error('One or more Pokémon in the Staryu line not found.');
  }

  const stages = [
    {
      from: staryu._id,
      to: starmie._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.WATER_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Staryu Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: staryu._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: starmie._id, evolutionLineId: line._id });

  return 1;
}