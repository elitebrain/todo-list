import React, { useState } from "react";
import { authService, firebaseInstance } from "./fbase";

import googleIcon from "./images/google-plus-g-brands.svg";
import githubIcon from "./images/github-brands.svg";

import {
  Container,
  Label,
  Input,
  ErrorMsg,
  SignupWrapper,
  SignupMsg,
  SignupLink,
  Button,
  GoogleBtn,
  GithubBtn,
} from "./Login.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const _handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "passwordConfirm") {
      setPasswordConfirm(value);
    }
  };
  const _handleLogin = async () => {
    setError("");
    try {
      await authService.signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  const _handleSocialLogin = async (e, name) => {
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  const _handleSignup = async () => {
    if (email.length === 0 || password.length === 0) {
      setError("fill the email and password");
    } else if (password !== passwordConfirm) {
      setError("wrong password!");
    } else {
      try {
        setError("");
        await authService.createUserWithEmailAndPassword(email, password);
      } catch (error) {
        setError(error.message);
      }
    }
  };
  return (
    <Container>
      <Label>email</Label>
      <Input
        value={email}
        name="email"
        placeholder="Email..."
        onChange={_handleChange}
      />
      <Label>password</Label>
      <Input
        type="password"
        value={password}
        name="password"
        placeholder="Password..."
        onChange={_handleChange}
      />
      {isSignup && (
        <>
          <Label>password confirm</Label>
          <Input
            type="password"
            value={passwordConfirm}
            name="passwordConfirm"
            placeholder="Password Confirm..."
            onChange={_handleChange}
          />
        </>
      )}
      {isSignup ? (
        <Button onClick={() => _handleSignup()}>Sign up</Button>
      ) : (
        <Button onClick={() => _handleLogin()}>Sign in</Button>
      )}
      <ErrorMsg>{error}</ErrorMsg>
      {isSignup ? (
        <SignupWrapper>
          <SignupMsg>Have an account?</SignupMsg>
          <SignupLink onClick={() => setIsSignup(false)}>Sign in</SignupLink>
        </SignupWrapper>
      ) : (
        <SignupWrapper>
          <SignupMsg>Don't have account?</SignupMsg>
          <SignupLink onClick={() => setIsSignup(true)}>Sign up</SignupLink>
        </SignupWrapper>
      )}
      <GoogleBtn onClick={(e) => _handleSocialLogin(e, "google")}>
        <img src={googleIcon} alt="google_icon" />
        <span>Continue with google</span>
      </GoogleBtn>
      <GithubBtn onClick={(e) => _handleSocialLogin(e, "github")}>
        <img src={githubIcon} alt="github_icon" />
        <span>Continue with github</span>
      </GithubBtn>
    </Container>
  );
};

export default Login;
