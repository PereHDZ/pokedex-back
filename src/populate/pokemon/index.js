import { populateGenI } from "./gen-I/index.js";

export const populatePokemon = async (typeMap) => {
  let count = 0;

  count += await populateGenI(typeMap);

  console.log(`😺 ${count} POKÉMON POPULATED`);
}