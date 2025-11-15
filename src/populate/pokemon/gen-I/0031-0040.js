import { pokemonActions } from "../../../actions/index.js"
import { getPokemonTypeId } from "../../helpers/get-pokemon-type-id.js"

export const populate0031To0040 = async (typeMap) => {
  const pokemons = [
    {
      identification: '0031',
      dexNum: '0031',
      name: { en: 'Nidoqueen' },
      typing: [ getPokemonTypeId(typeMap, 'poison'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0032',
      dexNum: '0032',
      name: { en: 'Nidoran♂' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0033',
      dexNum: '0033',
      name: { en: 'Nidorino' },
      typing: [ getPokemonTypeId(typeMap, 'poison') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0034',
      dexNum: '0034',
      name: { en: 'Nidoking' },
      typing: [ getPokemonTypeId(typeMap, 'poison'), getPokemonTypeId(typeMap, 'ground') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0035',
      dexNum: '0035',
      name: { en: 'Clefairy' },
      typing: [ getPokemonTypeId(typeMap, 'fairy') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0036',
      dexNum: '0036',
      name: { en: 'Clefable' },
      typing: [ getPokemonTypeId(typeMap, 'fairy') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0037',
      dexNum: '0037',
      name: { en: 'Vulpix' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0038',
      dexNum: '0038',
      name: { en: 'Ninetales' },
      typing: [ getPokemonTypeId(typeMap, 'fire') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0039',
      dexNum: '0039',
      name: { en: 'Jigglypuff' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'fairy') ],
      gen: 'i',
      baseForm: true,
    },
    {
      identification: '0040',
      dexNum: '0040',
      name: { en: 'Wigglytuff' },
      typing: [ getPokemonTypeId(typeMap, 'normal'), getPokemonTypeId(typeMap, 'fairy') ],
      gen: 'i',
      baseForm: true,
    },
  ];

  const createdPokemon = await Promise.all(
    pokemons.map(pokemon => pokemonActions.createPokemon(pokemon))
  )

  return createdPokemon.length;
}