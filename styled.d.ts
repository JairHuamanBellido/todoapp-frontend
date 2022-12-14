// import original module declarations
import "styled-components";
import { DefaultTheme } from "./theme/DefaultTheme";

type CustomTheme = typeof DefaultTheme;
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
