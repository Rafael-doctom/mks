/**
 * IMPORTS
 */
import "styled-components";
import theme from "./theme";

/**
 * Theme type.
 */
type Theme = typeof theme;

/**
 * Styled components module.
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
