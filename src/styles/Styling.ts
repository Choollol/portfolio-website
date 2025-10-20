import { SxProps } from "@mui/material";

export type StyleProps = SxProps;

interface Styles {
  // eslint-disable-next-line
  [key: string]: StyleProps | ((...args: any[]) => StyleProps);
}

/**
 * A layer of abstraction around creating styles for specific component modules.
 * 
 * ```typescript
 * 
 *   const styles = createStyles({
 *     homePageContainer: {
 *       maxWidth: "70%",
 *       margin: "20px",
 *     },
 *   });
 * 
 * ```
 * 
 * @param styles An object that contains all the custom styles for a specific component.
 * @returns An object with the same structure as the given one.
 */
export function createStyles<const T extends Styles>(styles: T) {
  return styles;
}

/**
 * Combines two styles, a base and an override.
 * 
 * ```typescript
 * 
 *   const newStyles = mergeStyles(styles.containerStyles, { width: "10px" });
 * 
 * ```
 * 
 * @param baseStyles Style with "default" properties that may be overridden.
 * @param overrideStyles Style with additional properties that may override `baseStyles`'s properties.
 * @returns An object with the same structure as the input objects.
 */
export function mergeStyles(baseStyles: StyleProps, overrideStyles: StyleProps) {
  return { ...baseStyles, ...overrideStyles } as StyleProps;
}