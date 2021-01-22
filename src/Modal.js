import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { children, handleCancel } = props;
  return (
    <ModalContainer>
      <ModalOverlay onClick={() => handleCancel()} />
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  transition: 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
`;
const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  padding: 20px 40px;
`;

export default Modal;
