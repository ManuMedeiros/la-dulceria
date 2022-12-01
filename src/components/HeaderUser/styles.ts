import styled from "styled-components";

export const Container = styled.header`
        padding: 24px;
        border-bottom: 1px solid #e2e2e2;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        background: #F15E7B;
        color: #fff;

        .content {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .div-user {
            display: flex;
            align-items: center;
        }

        a {
            color: #fff;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
`;

export const imgUser = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
`;

export const imgLogo = styled.img``;

export const nameUser = styled.span`
    margin-left: 15px
`;