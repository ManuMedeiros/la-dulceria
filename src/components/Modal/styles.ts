import styled from "styled-components";

export const ModalOverlay = styled.a`
  background: rgb(25 33 40 / 75%);;
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const ModalClose = styled.a`
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1rem;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 25%;
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);

  @media (max-width: 920px) {
    width: 85%;
    box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.9);
  }


`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
`;