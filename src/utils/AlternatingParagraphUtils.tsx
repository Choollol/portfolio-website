export enum AlternatingParagraphAlign {
  LEFT,
  RIGHT,
}

/**
 * Takes an `AlternatingParagraphAlign` and returns its alternated value.
 * Example: Takes `AlternatingParagraphAlign.LEFT` and returns `AlternatingParagraphAlign.RIGHT`.
 */
export function alternateAlign(align: AlternatingParagraphAlign) {
  return align === AlternatingParagraphAlign.RIGHT ? AlternatingParagraphAlign.LEFT : AlternatingParagraphAlign.RIGHT;
}