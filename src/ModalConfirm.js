import React from "react";
import styled from "styled-components";

const ModalConfirm = (props) => {
  const { children, handleCancel } = props;
  return (
    <ConfirmContainer>
      <ConfirmOverlay onClick={() => handleCancel()} />
      <ConfirmContent>{children}</ConfirmContent>
    </ConfirmContainer>
  );
};

const ConfirmContainer = styled.div`
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
const ConfirmOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--bg-modal-overlay);
  width: 100%;
  height: 100%;
`;
const ConfirmContent = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  position: relative;
  padding: 20px 40px;
`;

export default ModalConfirm;
