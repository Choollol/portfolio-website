export function getImagePath(imagePathRel: string) {
  return `images/${imagePathRel}`;
  //return `${import.meta.env.BASE_URL}/public/images/${imagePathRel}`;
}

export enum ImageSize {
  SMALL,
  LARGE,
}

export type ImageInfo = {
  imagePath: string;
  imageSize?: ImageSize;
}

