import { populateBulbasaurLine } from './bulbasaur-line.js';
import { populateCaterpieLine } from './caterpie-line.js';
import { populateCharmanderLine } from './charmander-line.js';
import { populatePidgeyLine } from './pidgey-line.js';
import { populateSquirtleLine } from './squirtle-line.js';
import { populateWeedleLine } from './weedle-line.js';

export const populatePokemon = async (typeMap) => {
  let count = 0;

  count += await populateBulbasaurLine(typeMap)
  count += await populateCharmanderLine(typeMap);
  count += await populateSquirtleLine(typeMap);
  count += await populateCaterpieLine(typeMap);
  count += await populateWeedleLine(typeMap);
  count += await populatePidgeyLine(typeMap);

  console.log(`😺 ${count} POKÉMON POPULATED`)
}

