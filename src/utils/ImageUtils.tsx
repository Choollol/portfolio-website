export function getImagePath(imagePathRel: string) {
  return `/images/${imagePathRel}`;
}

export enum ImageSize {
  SMALL,
  LARGE,
}

export type ImageInfo = {
  imagePath: string;
  imageSize?: ImageSize;
}

