import sharp from "sharp";

export default async ({ count, offset }) => {
  const result = await Promise.all(
    Array(count)
      .fill(null)
      .map((_, i) => {
        return sharp(`./in/0.jpg`)
          .resize(200, 200)
          .tint({ r: 255, g: 255, b: 255 })
          .toFile(`./out/${i + offset}.jpg`);
      })
  );
  return result;
};
