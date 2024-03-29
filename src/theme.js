/**
 * This is our custom theme where we define global styles.
 * It should serve as a guideline for styling,
 * but not all styles *have* to be taken from here.
 */
const breakpoints = ["40em", "52em", "64em", "80em"];

const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`
};

/**
 * Primary: Colors to use for actionable items, such as links, buttons etc.
 * Grey: Colors for items that are not that important
 */
const colors = {
  pageBackground: "hsl(228, 33%, 97%)",
  white: "hsl(0, 0%, 100%)",
  black: "hsl(0, 0%, 0%)",
  primary: {
    100: "hsl(223, 88%, 97%)",
    200: "hsl(223, 72%, 90%)",
    300: "hsl(223, 71%, 76%)",
    400: "hsl(227, 63%, 67%)",
    500: "hsl(230, 65%, 63%)",
    600: "hsl(230, 52%, 53%)",
    700: "hsl(230, 51%, 43%)",
    800: "hsl(230, 57%, 34%)",
    900: "hsl(231, 55%, 28%)"
  },
  second: {
    100: "hsl(223, 88%, 97%)",
    200: "hsl(223, 72%, 90%)",
    300: "hsl(223, 71%, 76%)",
    400: "hsl(227, 63%, 67%)",
    500: "hsl(230, 65%, 63%)",
    600: "hsl(230, 52%, 53%)",
    700: "hsl(230, 51%, 43%)",
    800: "hsl(230, 57%, 34%)",
    900: "hsl(231, 55%, 28%)"
  },
  grey: {
    100: "hsl(210, 17%, 98%)",
    200: "hsl(207, 22%, 90%)",
    300: "hsl(210, 24%, 87%)",
    400: "hsl(208, 17%, 83%)",
    500: "hsl(209, 24%, 74%)",
    600: "hsl(215, 17%, 63%)",
    700: "hsl(214, 11%, 49%)",
    800: "hsl(215, 17%, 30%)",
    900: "hsl(215, 23%, 16%)"
  },
  red: {
    100: "hsl(360, 77%, 95%)",
    200: "hsl(360, 79%, 81%)",
    300: "hsl(360, 71%, 73%)",
    400: "hsl(360, 70%, 64%)",
    500: "hsl(360, 71%, 53%)",
    600: "hsl(360, 65%, 45%)",
    700: "hsl(360, 61%, 38%)",
    800: "hsl(360, 63%, 31%)",
    900: "hsl(360, 60%, 24%)"
  },
  yellow: {
    100: "hsl(44, 100%, 98%)",
    200: "hsl(44, 90%, 92%)",
    300: "hsl(45, 86%, 86%)",
    400: "hsl(44, 90%, 80%)",
    500: "hsl(43, 87%, 67%)",
    600: "hsl(44, 57%, 52%)",
    700: "hsl(43, 59%, 42%)",
    800: "hsl(43, 64%, 34%)",
    900: "hsl(44, 66%, 22%)"
  },
  green: {
    100: "hsl(142, 81%, 94%)",
    200: "hsl(141, 67%, 80%)",
    300: "hsl(145, 65%, 68%)",
    400: "hsl(146, 57%, 65%)",
    500: "hsl(145, 55%, 49%)",
    600: "hsl(145, 55%, 41%)",
    700: "hsl(145, 59%, 33%)",
    800: "hsl(155, 63%, 26%)",
    900: "hsl(156, 61%, 20%)"
  }
};

/**
 * Space is used for margin and padding scales.
 * It's recommended to use powers of two
 * to ensure alignment across the entire project
 */
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const sizes = [360, 480, 640];

/**
 * Typographic scale
 */
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  normal: 400,
  semibold: 600
};

/**
 * Letter-spacing should vary, depending on usage of text
 */
const letterSpacings = {
  normal: "normal",
  caps: "0.25em",
  labels: "0.05em"
};

/**
 * Border-radius
 */
const radii = [0, 2, 4, 8, 16];

const textStyles = {
  caps: {
    textTransform: "uppercase",
    letterSpacing: letterSpacings.caps
  }
};

const colorStyles = {
  warning: {
    color: "black",
    backgroundColor: colors.yellow[500]
  },
  error: {
    color: "white",
    backgroundColor: colors.red[500]
  }
};

const buttons = {
  primary: {
    color: "white",
    backgroundColor: colors.primary[900],
    "&:hover": {
      backgroundColor: colors.primary[400]
    }
  },
  outline: {
    color: colors.primary[900],
    backgroundColor: "transparent",
    boxShadow: "inset 0 0 0 1px",
    "&:hover": {
      backgroundColor: colors.primary[400]
    }
  }
};

const cards = {
  normal: {
    color: "white",
    backgroundColor: colors.primary[900]
  }
};

export default {
  breakpoints,
  mediaQueries,
  colors,
  space,
  sizes,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  textStyles,
  colorStyles,
  buttons,
  cards
};
