import styled from "styled-components";

export const Container = styled.div`

    h1 {
        margin-top: 15px;
        text-align: center;
    }
`;

export const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 3rem auto;

    button {
        width: 25%;
    }
`;

export const DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;

    label {
        margin-bottom: 10px;
    }

    textarea {
        width: 100%;
        padding: 16px;
        margin-top: 15px;
        border-radius: 8px;
        background: #f8f8f8;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        resize: vertical;
        min-height: 130px;
    }

    .checkbox {
        margin-right: 15px;
    }
`;