import { populateBulbasaurLine } from './bulbasaur-line.js';
import { populateCaterpieLine } from './caterpie-line.js';
import { populateCharmanderLine } from './charmander-line.js';
import { populateClefairyLine } from './clefairy-line.js';
import { populateDiglettLine } from './diglett-line..js';
import { populateEkansLine } from './ekans-line.js';
import { populateGrowlitheLine } from './growlithe-line.js';
import { populateMankeyLine } from './mankey-line.js';
import { populateMeowthLine } from './meowth-line.js';
import { populateNidoranFLine } from './Nidoran♀-line.js';
import { populateNidoranMLine } from './nidoran♂-line.js';
import { populateOddishLine } from './oddish-line.js';
import { populateParasLine } from './paras-line.js';
import { populatePidgeyLine } from './pidgey-line.js';
import { populatePikachuLine } from './pikachu-line.js';
import { populatePoliwagLine } from './poliwag-line.js';
import { populatePsyduckLine } from './psyduck-line.js';
import { populateRattataLine } from './rattata-line.js';
import { populateSandshrewLine } from './sandshrew-line.js';
import { populateSpearowLine } from './spearow-line.js';
import { populateSquirtleLine } from './squirtle-line.js';
import { populateVenonatLine } from './venonat-line.js';
import { populateVulpixLine } from './vulpix-line.js';
import { populateWeedleLine } from './weedle-line.js';
import { populateZubatLine } from './zubat-line.js';

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
  count += await populateNidoranMLine();
  count += await populateClefairyLine();
  count += await populateVulpixLine();
  count += await populateZubatLine();
  count += await populateOddishLine();
  count += await populateParasLine();
  count += await populateVenonatLine();
  count += await populateDiglettLine();
  count += await populateMeowthLine();
  count += await populatePsyduckLine();
  count += await populateMankeyLine();
  count += await populateGrowlitheLine();
  count += await populatePoliwagLine();

  return count;
}