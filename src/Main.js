import React, { useState, useEffect, useCallback } from "react";
import ReactQuill from "react-quill";
import { ReactComponent as CheckIconSvg } from "./images/check(white).svg";
import { ReactComponent as TrashIconSvg } from "./images/trash(white).svg";
import { ReactComponent as GoogleIconSvg } from "./images/google-plus-g-brands.svg";
import { ReactComponent as GithubIconSvg } from "./images/github-brands.svg";
import { ReactComponent as EmailSvg } from "./images/email.svg";
import {
  LeftWrapper,
  InputNewToDo,
  ToDoListWrapper,
  ToDoList,
  ToDoItem,
  ToDoItemText,
  CheckIcon,
  TrashIcon,
  ScrollBarBg,
  ScrollBarActive,
  RightWrapper,
  InputTitle,
  LogoutBtn,
  Title,
  Content,
  ConfirmBtn,
  CancelBtn,
  WelcomeMsg,
  QuillWrapper,
  IconWrapper,
} from "./Main.styles";
import { authService, dbService } from "./fbase";

const Main = (props) => {
  const { userObj, todos, openConfirm, closeConfirm } = props;
  const [isVisibleScroll, setIsVisibleScroll] = useState(false);
  const [activeScrollTop, setActiveScrollTop] = useState(0);
  const [activeScrollHeight, setActiveScrollHeight] = useState(0);
  const [newToDo, setNewToDo] = useState("");
  const [prevState, setPrevState] = useState({});
  const [scroll, setScroll] = useState(0);
  const [state, setState] = useState({});
  const [addNew, setAddNew] = useState(false);
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    setActiveScrollTop(`${parseFloat((scroll * 360) / toDoList.length)}px`);
  }, [scroll, toDoList]);
  const _handleToggle = (id) => {
    todos
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          return doc.ref.update({ isDone: !doc.data().isDone });
        } else {
          console.error("not exists!");
        }
      });
  };

  const _handleToDo = useCallback(
    (id) => {
      const filteredList = toDoList.filter((v) => v.id === id);
      const title = filteredList[0]?.title;
      const content = filteredList[0]?.content;
      if (document.querySelector(".ql-editor")) {
        document.querySelector(".ql-editor").innerHTML = content;
      }
      setState({
        id: filteredList[0]?.id,
        title,
        content,
      });
      setPrevState({
        id: filteredList[0]?.id,
        title,
        content,
      });
    },
    [toDoList]
  );

  useEffect(() => {
    if (todos && userObj) {
      todos.where("uid", "==", userObj.uid).onSnapshot((snapshot) => {
        const toDoList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setToDoList(
          toDoList.sort(
            (a, b) =>
              Math.max(b.created_at, b.updated_at || null) -
              Math.max(a.created_at, a.updated_at || null)
          )
        );
      });
    }
  }, [todos, userObj]);
  useEffect(() => {
    if (addNew) {
      _handleToDo(toDoList[0].id);
      setAddNew(false);
    }
    if (toDoList.filter((v) => v.id === state.id).length === 0) {
      setState({});
      setPrevState({});
    }
    if (toDoList.length > 10) {
      setIsVisibleScroll(true);
    } else {
      setIsVisibleScroll(false);
    }
    setActiveScrollHeight(`${Math.ceil((10 / toDoList.length) * 360)}px`);
  }, [toDoList]);

  const _handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => Object.assign({}, prevState, { [name]: value }));
  };

  const _handleSave = () => {
    const { id, title, content } = state;
    if (prevState.title !== title || prevState.content !== content) {
      dbService.doc(`todos/${id}`).update({
        title,
        content,
        updated_at: new Date(),
      });
    }
  };
  const _handleChangeContent = (content) => {
    setState((prevState) => Object.assign({}, prevState, { content }));
  };

  const _handleRemove = async (id) => {
    const _handleOk = () => {
      dbService.doc(`todos/${id}`).delete();
      closeConfirm();
    };
    openConfirm(
      <>
        <Title>메모 삭제</Title>
        <Content>선택한 메모를 삭제 하시겠습니까?</Content>
        <ConfirmBtn onClick={() => _handleOk()}>삭제</ConfirmBtn>
        <CancelBtn onClick={() => closeConfirm()}>취소</CancelBtn>
      </>
    );
  };

  const _handleWheel = (e) => {
    if (e.deltaY > 0) {
      // down
      if (scroll + 10 < toDoList.length) {
        setScroll((prev) => prev + 1);
      }
    } else {
      // up
      if (scroll > 0) {
        setScroll((prev) => prev - 1);
      }
    }
  };

  const _handleNewToDo = (e) => {
    if (e.keyCode === 13) {
      todos.add({
        title: newToDo,
        content: "",
        created_at: new Date(),
        inDone: false,
        uid: userObj.uid,
      });
      setNewToDo("");
      setAddNew(true);
    }
  };

  const _setIcon = () => {
    console.log("userObj", userObj);
    const { signinBy } = userObj;
    if (signinBy === "github.com") {
      return <GoogleIconSvg />;
    }
    if (signinBy === "google.com") {
      return <GithubIconSvg />;
    }
    if (signinBy === "password") {
    }
  };

  const { id, title, content } = state;
  const { signinBy } = userObj;
  return (
    <>
      <LeftWrapper>
        <WelcomeMsg>
          {signinBy === "github.com" && (
            <IconWrapper color="#211f1f">
              <GithubIconSvg />
            </IconWrapper>
          )}
          {signinBy === "google.com" && (
            <IconWrapper color="#db4a39">
              <GoogleIconSvg />
            </IconWrapper>
          )}
          {signinBy === "password" && (
            <IconWrapper color="#000">
              <EmailSvg />
            </IconWrapper>
          )}
          {`Welcome ${userObj.displayName || ""}`}
        </WelcomeMsg>
        <InputNewToDo
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyUp={_handleNewToDo}
          placeholder="Write a to do"
        />
        <ToDoListWrapper>
          <ToDoList onWheel={_handleWheel} scroll={scroll}>
            {toDoList.map((todo) => (
              <ToDoItem key={todo.id}>
                <ToDoItemText
                  onClick={() => _handleToDo(todo.id)}
                  className={`${todo.isDone ? "is_done" : ""}`}
                >
                  {todo.title}
                </ToDoItemText>
                <CheckIcon
                  checked={todo.isDone}
                  onClick={() => _handleToggle(todo.id)}
                >
                  <CheckIconSvg />
                  {/* <img src={checkIcon} alt="check_icon" /> */}
                </CheckIcon>
                <TrashIcon onClick={() => _handleRemove(todo.id)}>
                  <TrashIconSvg />
                </TrashIcon>
              </ToDoItem>
            ))}
          </ToDoList>
          <ScrollBarBg isVisibleScroll={isVisibleScroll} />
          <ScrollBarActive
            activeScrollTop={activeScrollTop}
            activeScrollHeight={activeScrollHeight}
            isVisibleScroll={isVisibleScroll}
          />
        </ToDoListWrapper>
        <LogoutBtn onClick={() => authService.signOut()}>Log out</LogoutBtn>
      </LeftWrapper>
      {id && (
        <RightWrapper>
          <InputTitle
            value={title}
            name="title"
            onChange={_handleChange}
            onBlur={_handleSave}
          />
          <QuillWrapper onBlur={_handleSave}>
            <ReactQuill
              value={content}
              onChange={_handleChangeContent}
              theme="snow"
              // modules={{ toolbar: false }}
              className="quill"
            />
          </QuillWrapper>
        </RightWrapper>
      )}
    </>
  );
};

export default Main;
