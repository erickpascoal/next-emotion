import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../helpers/jest-helper";
import { Button } from ".";

describe("<Button />", () => {
  it("shoud render correctly", () => {
    renderWithTheme(<Button>My Button</Button>);

    const button = screen.getByRole("button", { name: /my button/i });

    expect(button).toHaveStyleRule("background-color", "blue");

    expect(button).toHaveStyleRule("background-color", "tomato", {
      media: "(max-width: 400px)",
    });
  });
});
