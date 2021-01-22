import styled from "styled-components";

const Container = styled.div`
  font-family: "Poppins", sans-serif;
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

const LeftWrapper = styled.aside`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 420px;
  height: 780px;
  text-align: center;
  animation: fadeIn 0.5s linear;
  user-select: none;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  color: #426696;
  @media (max-width: 1020px) {
    display: block;
    margin: 40px auto;
    width: 536px;
  }
  @media (max-width: 768px) {
    width: 500px;
  }
`;

const Clock = styled.div`
  width: 400px;
  margin: 30px auto;
  & > span {
    display: inline-block;
    vertical-align: middle;
    font-size: 80px;
    text-shadow: 2px 2px #658ec6;
    text-align: center;
  }
`;
const Time = styled.span`
  width: 100px;
`;
const Colone = styled.span`
  width: 20px;
`;

const Input = styled.input`
  border: 1px solid rgba(101, 142, 198, 0.2);
  background-color: transparent;
  font-size: 36px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 1px solid rgba(101, 142, 198, 0.6);
  }
`;

const InputNewToDo = styled(Input)`
  width: 300px;
  color: #658ec6;
  padding: 6px 12px;
  margin-top: 100px;
  margin-bottom: 50px;
  &::placeholder {
    color: #658ec6;
    opacity: 0.3;
  }
`;

const ToDoListWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 360px;
  overflow: hidden;
`;

const ToDoList = styled.ul`
  width: 360px;
  margin: 0;
  overflow-y: hidden;
  transition: 0.3s ease;
  padding-left: 40px;
  box-sizing: content-box;
  transform: ${(props) => `translate3D(0px, ${props.scroll * -36}px, 0px)`};
`;
const ToDoItem = styled.li`
  display: block;
  font-size: 24px;
  height: 36px;
`;
const ToDoItemText = styled.span`
  position: relative;
  width: 278px;
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  color: #658ec6;
  overflow: hidden;
  text-overflow: ellipsis;
  &.is_done {
    text-decoration: line-through;
    text-decoration-color: #658ec6;
    color: rgba(101, 142, 198, 0.2);
  }
  &:hover {
    cursor: pointer;
  }
`;
const CheckIcon = styled.picture`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
  & > img {
    width: auto;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;
const TrashIcon = styled.picture`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  display: inline-block;
  vertical-align: middle;
  & > img {
    width: auto;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
  }
`;
const ScrollBarBg = styled.div`
  content: "";
  position: absolute;
  width: 10px;
  height: 360px;
  right: 0px;
  top: 0;
  background-color: #658ec6;
  border-radius: 30px;
  opacity: ${(props) => (props.isVisibleScroll ? 1 : 0)};
`;
const ScrollBarActive = styled.div`
  position: absolute;
  width: 10px;
  right: 0px;
  top: ${(props) => props.activeScrollTop};
  height: ${(props) => props.activeScrollHeight};
  background-color: #65dfc9;
  transition: 0.3s ease;
  border-radius: 30px;
  opacity: ${(props) => (props.isVisibleScroll ? 1 : 0)};
`;
const LogoutBtn = styled.button`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 200px;
  font-size: 24px;
  padding: 6px 12px;
  border-radius: 5px;
  color: #fff;
  border: none;
  margin-top: 10px;
  transition: 0.3s ease-in-out;
  background-color: #65dfc9;
  &:hover {
    cursor: pointer;
    background-color: #211f1f;
  }
`;

const RightWrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 780px;
  width: 600px;
  padding: 32px;
  text-align: center;
  animation: fadeIn 0.5s linear;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  user-select: none;
  @media (max-width: 1020px) {
    display: block;
    margin: 40px auto;
  }
  @media (max-width: 768px) {
    width: 500px;
    padding: 0;
  }
`;
const InputTitle = styled(Input)`
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  color: #426696;
`;
const TextareaContent = styled.textarea`
  width: 100%;
  height: calc(100% - 86px);
  border: 0;
  border-radius: 1rem;
  color: #658ec6;
  font-size: 24px;
  padding: 2rem;
  margin-top: 20px;
  box-sizing: border-box;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.9)
  );
  resize: none;
  &:focus {
    outline: none;
  }
`;

export {
  Container,
  GlassContainer,
  InitialP,
  LeftWrapper,
  Clock,
  Time,
  Colone,
  Input,
  InputNewToDo,
  ToDoListWrapper,
  ToDoList,
  ToDoItem,
  ToDoItemText,
  CheckIcon,
  TrashIcon,
  ScrollBarBg,
  ScrollBarActive,
  LogoutBtn,
  RightWrapper,
  InputTitle,
  TextareaContent,
};
