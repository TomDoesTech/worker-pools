import sharp from "sharp";

const start = performance.now();

const imagesCount = 100;

const result = await Promise.all(
  Array(imagesCount)
    .fill(null)
    .map((_, i) => {
      return sharp(`./in/0.jpg`)
        .resize(200, 200)
        .tint({ r: 255, g: 255, b: 255 })
        .toFile(`./out/0.jpg`);
    })
);

const end = performance.now();
console.info(
  `Processing ${imagesCount} images took ${(end - start) / 1000} seconds`
);
