import sharp from "sharp";
import { parentPort } from "worker_threads";

// Receive message from the parent
parentPort.on("message", async (count) => {
  // Send result back to parent

  const result = await Promise.all(
    Array(count)
      .fill(null)
      .map((_, i) => {
        return sharp(`./in/0.jpg`)
          .resize(200, 200)
          .tint({ r: 255, g: 255, b: 255 })
          .toFile(`./out/${i}.jpg`);
      })
  );

  parentPort.postMessage(result);
});
