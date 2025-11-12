import { readdirSync, statSync } from 'fs';
import { resolve } from 'path';
import sizeOf from 'image-size';

function getImagesWithSize(relativeFolderPath) {
  const dir = resolve("public", relativeFolderPath);
  const files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  return files.flatMap((filename) => {
    const fullPath = resolve(dir, filename);
    if (statSync(fullPath).size === 0) return [];
    try {
      const dimensions = sizeOf(fullPath);
      return [
        {
          src: `${relativeFolderPath}/${filename}`,
          width: dimensions.width ?? 0,
          height: dimensions.height ?? 0
        }
      ];
    } catch (err) {
      console.warn(`Error al procesar imagen: ${fullPath}`, err);
      return [];
    }
  });
}
async function getImageDimensionsFromFile(file) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const { width, height } = sizeOf(buffer);
  return {
    width: width ?? 0,
    height: height ?? 0
  };
}

export { getImagesWithSize as a, getImageDimensionsFromFile as g };
