/**
 * I am a color palette.
 */
const colors = {
  black_100: "#2C2C2C",
  black_150: "#373737",
  black_200: "#212121",
  blue_100: "#0F52BA",
  natural: "#ffffff",
};

/**
 * I am a fonts list.
 */
const fonts = {
  bold: 600,
  bolder: 700,
  medium: 500,
  normal: 400,
  primary: '"Poppins", Roboto, sans-serif',
};

const configs = {
  mobilePadding: "10px 20px",
};

/**
 * I am a application theme.
 */
const theme = {
  background: "#F6F6F6",
  fonts: { ...fonts },
  configs,
  primary: colors.natural,
  ...colors,
};

/**
 * EXPORTS
 */
export default theme;
