import { populateGenIEvos } from "./gen-i/index.js";

export const populateEvos = async () => {
  let count = 0;

  count += await populateGenIEvos();

  console.log(`🐒 ${count} LINES POPULATED`);
}