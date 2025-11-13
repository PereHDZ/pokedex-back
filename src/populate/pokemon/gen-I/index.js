import { populate0001To0010 } from './0001-0010.js';
import { populate0011To0020 } from './0011-0020.js';

export const populateGenI = async (typeMap) => {
  let count = 0;

  count += await populate0001To0010(typeMap)
  count += await populate0011To0020(typeMap);

  return count;
}

