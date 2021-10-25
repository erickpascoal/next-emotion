import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";
import { ButtonProps } from ".";

type ContainerProps = {} & Pick<ButtonProps, "variant">;

const buttonVariants = {
  default: (theme: Theme) => css`
    background-color: ${theme.colors.secondary};
    color: #fff;
  `,
  primary: (theme: Theme) => css`
    background-color: ${theme.colors.primary};
    color: #fff;
  `,
};

export const Container = styled.button<ContainerProps>`
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  border: none;

  ${({ variant, theme }) => buttonVariants[variant || "default"](theme)}

  @media (max-width: 400px) {
    ${({ theme }) => buttonVariants["primary"](theme)}
  }
`;
