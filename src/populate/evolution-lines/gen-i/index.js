import { populateBulbasaurLine } from './bulbasaur-line.js';
import { populateCaterpieLine } from './caterpie-line.js';
import { populateCharmanderLine } from './charmander-line.js';
import { populateEkansLine } from './ekans-line.js';
import { populateNidoranFLine } from './Nidoran♀-line.js';
import { populatePidgeyLine } from './pidgey-line.js';
import { populatePikachuLine } from './pikachu-line.js';
import { populateRattataLine } from './rattata-line.js';
import { populateSandshrewLine } from './sandshrew-line.js';
import { populateSpearowLine } from './spearow-line.js';
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
  count += await populateSpearowLine();
  count += await populateEkansLine();
  count += await populatePikachuLine();
  count += await populateSandshrewLine();
  count += await populateNidoranFLine();

  return count;
}