import Vibrant from 'node-vibrant';

export type RgbColor = [number, number, number];

export const getImageColor = async (imageSrc: string): Promise<RgbColor> => {
  const palette = await Vibrant.from(imageSrc).getPalette();
  return palette.Vibrant?.getRgb() || [0, 0, 0];
};
