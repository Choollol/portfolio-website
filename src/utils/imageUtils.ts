export function getImagePath(imagePathRel: string) {
  return `images/${imagePathRel}`;
}

export enum ImageSize {
  SMALL,
  LARGE,
}

export type ImageInfo = {
  imagePath: string;
  imageSize?: ImageSize;
}

export const GAME_THUMBNAILS_PATH = "game_thumbnails";
export const ICONS_PATH = "images/icons"
