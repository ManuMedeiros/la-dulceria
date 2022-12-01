import { ButtonHTMLAttributes } from "react";

export interface ButtonStyles {
    outline?: boolean;
    backgroundNone?: boolean;
    colorNone?: boolean;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutline?: boolean;
    isBackgoundNone?: boolean;
    isColorNone?: boolean;
  };