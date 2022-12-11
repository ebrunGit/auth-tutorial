import { Typography } from "@mui/material/styles/createTypography";

const typography: Typography = {
  fontFamily: [
    "Roboto",
    "Nunito",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ].join(","),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  htmlFontSize: 0,
  fontSize: 0,
  body1: {},
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  subtitle1: {},
  subtitle2: {},
  body2: {},
  caption: {},
  button: {},
  overline: {},
  pxToRem: (px: number) => "",
};

export default typography;
