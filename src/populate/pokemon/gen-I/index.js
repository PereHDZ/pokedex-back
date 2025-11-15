import { populate0001To0010 } from './0001-0010.js';
import { populate0011To0020 } from './0011-0020.js';
import { populate0021To0030 } from './0021-0030.js';
import { populate0031To0040 } from './0031-0040.js';
import { populate0041To0050 } from './0041-0050.js';
import { populate0051To0060 } from './0051-0060.js';

export const populateGenI = async (typeMap) => {
  let count = 0;

  count += await populate0001To0010(typeMap);
  count += await populate0011To0020(typeMap);
  count += await populate0021To0030(typeMap);
  count += await populate0031To0040(typeMap);
  count += await populate0041To0050(typeMap);
  count += await populate0051To0060(typeMap);

  return count;
}

