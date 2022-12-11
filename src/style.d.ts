// import original module declarations
import "styled-components";
import { Theme } from "@material-ui/core";
import { Typography } from "@mui/material/styles/createTypography";

// and extend them!
declare module "styled-components" {
  interface ColorBgType {
    color: string;
    background: string;
  }
  export interface IPalette {
    lightGrey: string;
    darkGrey: string;
  }

  export interface DefaultTheme extends Partial<Theme> {
    palette: IPalette;
    typography: Typography;
  }
}
