import React, { useState, useEffect } from "react";
import { authService, dbService } from "./fbase";
import { GlobalStyle, Container, GlassContainer, InitialP } from "./App.styles";
import Login from "./Login";
import Main from "./Main";
import ModalConfirm from "ModalConfirm";

const todos = dbService.collection("todos");

const App = () => {
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
  const [isViewConfirm, setIsViewConfirm] = useState(false);
  const [modalChildren, setConfirmChildren] = useState(null);
  // const [clock, setClock] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
          signinBy: user.b.b.b,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const _openConfirm = (children) => {
    setConfirmChildren(children);
    setIsViewConfirm(true);
  };

  const _closeConfirm = () => {
    setIsViewConfirm(false);
  };

  return (
    <Container>
      <GlobalStyle />
      {init ? (
        <GlassContainer isLoggedIn={userObj}>
          {userObj ? (
            <Main
              userObj={userObj}
              todos={todos}
              openConfirm={_openConfirm}
              closeConfirm={_closeConfirm}
            />
          ) : (
            <Login />
          )}
        </GlassContainer>
      ) : (
        <InitialP>Initialize...</InitialP>
      )}
      {isViewConfirm && (
        <ModalConfirm handleCancel={() => setIsViewConfirm(false)}>
          {modalChildren}
        </ModalConfirm>
      )}
    </Container>
  );
};

export default App;
