import { populate0001To0010 } from './0001-0010.js';
import { populate0011To0020 } from './0011-0020.js';
import { populate0021To0030 } from './0021-0030.js';
import { populate0031To0040 } from './0031-0040.js';
import { populate0041To0050 } from './0041-0050.js';
import { populate0051To0060 } from './0051-0060.js';
import { populate0061To0070 } from './0061-0070.js';
import { populate0071To0080 } from './0071-0080.js';
import { populate0081To0090 } from './0081-0090.js';
import { populate0091To0100 } from './0091-0100.js';
import { populate0101To0110 } from './0101-0110.js';
import { populate0111To0120 } from './0111-0120.js';
import { populate0121To0130 } from './0121-0130.js';

export const populateGenI = async (typeMap) => {
  let count = 0;

  count += await populate0001To0010(typeMap);
  count += await populate0011To0020(typeMap);
  count += await populate0021To0030(typeMap);
  count += await populate0031To0040(typeMap);
  count += await populate0041To0050(typeMap);
  count += await populate0051To0060(typeMap);
  count += await populate0061To0070(typeMap);
  count += await populate0071To0080(typeMap);
  count += await populate0081To0090(typeMap);
  count += await populate0091To0100(typeMap);
  count += await populate0101To0110(typeMap);
  count += await populate0111To0120(typeMap);
  count += await populate0121To0130(typeMap);
  
  return count;
}

