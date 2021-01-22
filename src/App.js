import React, { useState, useEffect, Children } from "react";
import { authService, dbService } from "./fbase";
import { Container, GlassContainer, InitialP } from "./App.styles";
import Login from "./Login";
import Main from "./Main";
import Modal from "Modal";

const todos = dbService.collection("todos");

const App = () => {
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
  const [isViewModal, setIsViewModal] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);
  // const [clock, setClock] = useState({ h: "00", m: "00", s: "00" });

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const _openModal = (children) => {
    setModalChildren(children);
    setIsViewModal(true);
  };

  const _closeModal = () => {
    setIsViewModal(false);
  };

  console.log("userObj", userObj);
  return (
    <Container>
      {init ? (
        <GlassContainer isLoggedIn={userObj}>
          {userObj ? (
            <Main
              userObj={userObj}
              todos={todos}
              openModal={_openModal}
              closeModal={_closeModal}
            />
          ) : (
            <Login />
          )}
        </GlassContainer>
      ) : (
        <InitialP>Initialize...</InitialP>
      )}
      {isViewModal && (
        <Modal handleCancel={() => setIsViewModal(false)}>
          {modalChildren}
        </Modal>
      )}
    </Container>
  );
};

export default App;
