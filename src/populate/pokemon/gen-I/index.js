import { populateBulbasaurLine } from './bulbasaur-line.js'

export const populatePokemon = async (typeMap) => {
  let count = 0;

  count += await populateBulbasaurLine(typeMap)

  console.log(`😺 ${count} pókemon populated`)
}

