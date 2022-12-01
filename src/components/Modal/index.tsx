import * as S from "./styles";
import { ModalProps } from "./types";

const Modal = ({ title, children, hideModal }: ModalProps) => {
  return (
    <>
      <S.ModalOverlay onClick={() => hideModal()}></S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalHeader>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalClose onClick={() => hideModal()}>X</S.ModalClose>
        </S.ModalHeader>
        <S.ModalBody>{children}</S.ModalBody>
      </S.ModalContainer>
    </>
  );
};
export default Modal;
