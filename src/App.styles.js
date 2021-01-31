import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Poppins", sans-serif;
  }
  div,
  span,
  input,
  textarea,
  button {
    box-sizing: border-box;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input,
  textarea {
    font-family: inherit;
  }
  :root {
    --white: #fff;
    --bg-modal-overlay: rgba(0, 0, 0, 0.6);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GlassContainer = styled.div`
  background: #fff;
  height: 780px;
  width: ${(props) => (props.isLoggedIn ? 1020 : 500)}px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  overflow: hidden;
  @media (max-width: 1020px) {
    height: 1700px;
  }
`;

const InitialP = styled.p`
  font-size: 24px;
  color: #658ec6;
`;

export { GlobalStyle, Container, GlassContainer, InitialP };
