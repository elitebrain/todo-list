import React, { useState } from "react";
import styled from "styled-components";
import { authService, firebaseInstance } from "./fbase";

import googleIcon from "./images/google-plus-g-brands.svg";
import githubIcon from "./images/github-brands.svg";

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
    }
  };
  const _handleLogin = async () => {
    setError("");
    try {
      const data = await authService.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const _handleSocialLogin = async (e, name) => {
    let provider;
    console.log(name);
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    console.log("provider", provider);
    await authService.signInWithPopup(provider);
  };
  const _handleSignup = () => {};
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
        value={password}
        name="password"
        placeholder="Password..."
        onChange={_handleChange}
      />
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

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const Label = styled.label`
  width: 400px;
  font-size: 16px;
  color: #658ec6;
  margin-bottom: 6px;
`;

const Input = styled.input`
  display: block;
  width: 400px;
  margin-bottom: 30px;
  font-size: 24px;
  padding: 6px 12px;
  border: 1px solid rgba(101, 142, 198, 0.2);
  background-color: transparent;
  border-radius: 5px;
  color: #658ec6;
  &:focus {
    outline: none;
    border: 1px solid rgba(101, 142, 198, 0.6);
  }
  &::placeholder {
    color: rgba(101, 142, 198, 0.3);
  }
`;

const ErrorMsg = styled.p`
  color: #f00;
  width: 400px;
`;

const SignupWrapper = styled.div`
  text-align: right;
  width: 400px;
  margin-top: 10px;
`;
const SignupMsg = styled.p`
  display: inline-block;
  font-size: 16px;
  color: #658ec6;
`;
const SignupLink = styled.a`
  font-size: 16px;
  color: #426696;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const DefaultButton = styled.button`
  width: 400px;
  font-size: 24px;
  padding: 6px 12px;
  border-radius: 5px;
  color: #fff;
  transition: 0.3s ease-in-out;
  & > img {
    height: 30px;
    width: 30px;
    float: left;
    background-color: #fff;
    padding: 3px;
    border-radius: 5px;
  }
  & > span {
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
  }
`;
const Button = styled(DefaultButton)`
  border: 1px solid rgba(101, 142, 198, 0.2);
  background: linear-gradient(to right, #65dfc9, #6cdbeb);
  &:hover {
    border: 1px solid rgba(101, 142, 198, 0.6);
    cursor: pointer;
    background: linear-gradient(to right, #6cdbeb, #65dfc9);
    color: #fff;
  }
`;
const GoogleBtn = styled(DefaultButton)`
  border: none;
  font-size: 16px;
  margin-top: 10px;
  background-color: #db4a39;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;
const GithubBtn = styled(DefaultButton)`
  border: none;
  font-size: 16px;
  margin-top: 10px;
  background-color: #211f1f;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
