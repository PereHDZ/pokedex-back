import { populateBulbasaurLine } from './bulbasaur-line.js';

export const populateGenIEvos = async () => {
  let count = 0;

  count += await populateBulbasaurLine();

  return count;
}