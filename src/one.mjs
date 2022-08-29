import { Worker } from "worker_threads";
const start = performance.now();

const worker = new Worker(process.cwd() + "/src/worker.mjs");

// Send the contents to the worker
worker.postMessage(1000);

// Get result from the worker
worker.on("message", (result) => {
  const end = performance.now();
  console.info(
    `Processing ${result.length} images took ${(end - start) / 1000} seconds`
  );
  process.exit(0);
});
