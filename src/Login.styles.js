import styled from "styled-components";

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
  margin-bottom: 20px;
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
  position: relative;
  & > svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    background-color: #fff;
    height: 30px;
    border-radius: 5px;
    padding: 3px;
  }
  border: none;
  font-size: 16px;
  margin-top: 10px;
  background-color: #db4a39;
  color: #db4a39;
  transition: 0.3s ease-in-out;
  & > span {
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
`;
const GithubBtn = styled(DefaultButton)`
  position: relative;
  & > svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    background-color: #fff;
    height: 30px;
    border-radius: 5px;
    padding: 3px;
  }
  border: none;
  font-size: 16px;
  margin-top: 10px;
  background-color: #211f1f;
  color: #211f1f;
  transition: 0.3s ease-in-out;
  & > span {
    color: #fff;
  }
  &:hover {
    cursor: pointer;
  }
`;

export {
  Container,
  Label,
  Input,
  ErrorMsg,
  SignupWrapper,
  SignupMsg,
  SignupLink,
  DefaultButton,
  Button,
  GoogleBtn,
  GithubBtn,
};
