import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  variant?: "default" | "primary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return <S.Container {...props}>{children}</S.Container>;
}
