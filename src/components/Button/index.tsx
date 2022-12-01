import * as S from "./styles";
import { ButtonProps } from "./types";

export function Button({
  isOutline,
  isBackgoundNone,
  isColorNone,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      outline={isOutline}
      backgroundNone={isBackgoundNone}
      colorNone={isColorNone}
      {...props}
    />
  );
}
