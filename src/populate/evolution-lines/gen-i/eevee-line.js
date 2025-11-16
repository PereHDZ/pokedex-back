import evolutionLineActions from "../../../actions/evolution-line-actions.js";
import pokemonActions from "../../../actions/pokemon-actions.js"
import { EVOLUTION_METHODS_VALUES, EVOLUTION_STONES_VALUES } from "../../../utils/constants.js";

export const populateEeveeLine = async () => {
  const eevee = await pokemonActions.findOneByQuery({ identification: '0133' });
  const vaporeon = await pokemonActions.findOneByQuery({ identification: '0134' });
  const jolteon = await pokemonActions.findOneByQuery({ identification: '0135' });
  const flareon = await pokemonActions.findOneByQuery({ identification: '0136' });

  if (!eevee || !vaporeon || !jolteon || !flareon) {
    throw new Error('One or more Pokémon in the Eevee line not found.');
  }

  const stages = [
    {
      from: eevee._id,
      to: vaporeon._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.WATER_STONE,
    },
    {
      from: eevee._id,
      to: jolteon._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.THUNDER_STONE,
    },
    {
      from: eevee._id,
      to: flareon._id,
      method: EVOLUTION_METHODS_VALUES.ITEM,
      item: EVOLUTION_STONES_VALUES.FIRE_STONE,
    },
  ];

  const evolutionLine = {
    name: 'Eevee Line',
    stages,
  }

  const line = await evolutionLineActions.createEvolutionLine(evolutionLine);
  await pokemonActions.updatePokemon({ _id: eevee._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: vaporeon._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: jolteon._id, evolutionLineId: line._id });
  await pokemonActions.updatePokemon({ _id: flareon._id, evolutionLineId: line._id });

  return 1;
}
