import { populateBulbasaurLine } from './bulbasaur-line.js';
import { populateCaterpieLine } from './caterpie-line.js';
import { populateCharmanderLine } from './charmander-line.js';
import { populatePidgeyLine } from './pidgey-line.js';
import { populateRattataLine } from './rattata-line.js';
import { populateSquirtleLine } from './squirtle-line.js';
import { populateWeedleLine } from './weedle-line.js';

export const populateGenIEvos = async () => {
  let count = 0;

  count += await populateBulbasaurLine();
  count += await populateCharmanderLine();
  count += await populateSquirtleLine();
  count += await populateCaterpieLine();
  count += await populateWeedleLine();
  count += await populatePidgeyLine();
  count += await populateRattataLine();

  return count;
}