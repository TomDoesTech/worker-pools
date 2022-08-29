import Piscina from "piscina";

const start = performance.now();

const pool = new Piscina();

const options = { filename: process.cwd() + "/src/worker-pool.mjs" };

const imagesCount = 100;
const poolSize = 2;

const pools = Array(poolSize)
  .fill(null)
  .map((_, i) => {
    return pool.run({ count: imagesCount / poolSize, offset: i + 1 }, options);
  });

await Promise.all(pools);

const end = performance.now();

console.info(
  `Processing ${imagesCount} images took ${(end - start) / 1000} seconds`
);
process.exit(0);
