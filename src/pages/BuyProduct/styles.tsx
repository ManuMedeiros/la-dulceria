import styled from "styled-components";

interface StyleProps {
  subline?: any;
}

export const Container = styled.div`
  h1 {
    margin-top: 15px;
    text-align: center;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 20px;
  margin: 15px 30px;
  flex-wrap: wrap;
`;

export const Content = styled.div`
  width: 250px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: #f3d4d4;
  padding: 10px;
`;

export const imgCard = styled.img`
  width: 230px;
  margin-top: 10px;
  border-radius: 8px;
`;

export const nameCard = styled.h3``;

export const priceCard = styled.span<StyleProps>`
  text-decoration-line: ${(props) => (props.subline ? "line-through" : "none")};
`;

export const descriptionCard = styled.p`
  text-align: justify;
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
