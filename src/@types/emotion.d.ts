import "@emotion/react";
import { themeDefault } from "../styles/theme";

export type ThemeDefault = typeof themeDefault;

declare module "@emotion/react" {
  export interface Theme extends ThemeDefault {}
}
