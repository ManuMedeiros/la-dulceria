import styled from "styled-components";

export const Container = styled.div`
`;

export const Content = styled.div`
    width: 45%;
    margin: 0 auto;
`;

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;
    margin: 2rem auto;

    label {
        font-weight: 500;
        font-size: 15px;
        color: #2f2f2f;
    }
`;

export const buttonShowPassWord = styled.button`
    background: transparent;
    border: 0;
    margin-top: 0.5rem;
    font-size: 14px;
    cursor: pointer;
`;

export const ButtonsLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: 2rem auto;

    span {
        margin: 0.5rem auto;
    }
`;