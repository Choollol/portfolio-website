export enum AlternatingParagraphAlign {
  LEFT,
  RIGHT,
}

export type AlternatingParagraphInfo = {
  text: string;
  imagePaths: string[];
};

/**
 * Takes an `AlternatingParagraphAlign` and returns its alternated value.
 * Example: Takes `AlternatingParagraphAlign.LEFT` and returns `AlternatingParagraphAlign.RIGHT`.
 */
export function alternateAlign(align: AlternatingParagraphAlign) {
  return align === AlternatingParagraphAlign.RIGHT
    ? AlternatingParagraphAlign.LEFT
    : AlternatingParagraphAlign.RIGHT;
}

export function getPlaceholderAlternatingParagraphInfo(
  imageCount: number = 1
): AlternatingParagraphInfo {
  let imagePaths = [];
  for (let i = 0; i < imageCount; ++i) {
    imagePaths.push("placeholder.png");
  }
  return {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imagePaths: imagePaths,
  };
}

export function getPlaceholderAlternatingSectionInfo(sectionCount: number) {
  let info = [];
  for (let i = 0; i < sectionCount; ++i) {
    info.push(getPlaceholderAlternatingParagraphInfo(i + 1));
  }
  return info;
}
