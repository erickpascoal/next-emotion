import { ThemeProvider } from "@emotion/react";
import { themeDefault } from "@styles/theme";
import { render } from "@testing-library/react";
import { ReactNode } from "react";

export function renderWithTheme(children: ReactNode) {
  return render(<ThemeProvider theme={themeDefault}>{children}</ThemeProvider>);
}
