import { Global, css } from "@emotion/react";

export function GlobalStyle() {
  const styles = css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    button {
      cursor: pointer;
    }
  `;

  return <Global styles={styles} />;
}
