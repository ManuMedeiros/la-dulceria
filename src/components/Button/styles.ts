import styled from "styled-components";
import { ButtonStyles } from "./types";


export const Button = styled.button<ButtonStyles>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    background: ${(props) => props.backgroundNone ? 'transparent' : '#F15E7B'};
    color: ${(props) => props.colorNone ? '#000' : '#fff'};
    border: ${(props) => props.outline ? '1px solid #000' : '0'};
    border-radius: 55px;
    width: 100%;
    height: 45px;
    cursor: pointer;
`;