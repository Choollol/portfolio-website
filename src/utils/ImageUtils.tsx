export function getImagePath(imagePathRel: string) {
  return `/images/${imagePathRel}`;
}

export type ImageInfo = {
  imagePath: string;
}