import React, { useState, useEffect } from "react";
import { authService, dbService } from "./fbase";
import { Container, GlassContainer, InitialP } from "./App.styles";
import Login from "./Login";
import Main from "./Main";

const todos = dbService.collection("todos");

const App = () => {
  const [userObj, setUserObj] = useState(null);
  const [init, setInit] = useState(false);
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

  console.log("userObj", userObj);
  return (
    <Container>
      {init ? (
        <GlassContainer isLoggedIn={userObj}>
          {userObj ? <Main userObj={userObj} todos={todos} /> : <Login />}
        </GlassContainer>
      ) : (
        <InitialP>Initialize...</InitialP>
      )}
    </Container>
  );
};

export default App;
