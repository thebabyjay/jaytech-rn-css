// STYLES
import containerStyles from "./containers";
import flexStyles from "./flex";
import marginAndPaddingStyles from "./marginAndPadding";
import textStyles from "./text";

// CONSTANTS
import defaultColors from "./colors";

const mergedStyles = {
  ...textStyles,
  ...containerStyles,
  ...marginAndPaddingStyles,
  ...flexStyles
};

export const colors = defaultColors;
export const palette = colors;
export const j = mergedStyles;
export const styles = mergedStyles;

export default mergedStyles;
