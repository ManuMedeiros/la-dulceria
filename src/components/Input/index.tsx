import * as S from "./styles";
import { InputProps } from "./types";

export const Input = (props: InputProps) => {
  return (
    <S.Input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
