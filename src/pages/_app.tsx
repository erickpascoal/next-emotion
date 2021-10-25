import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";
import { themeDefault } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeDefault}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
