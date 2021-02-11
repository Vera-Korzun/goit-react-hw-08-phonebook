import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { signInOperation } from "../../redux/operations/authOperations";
import { getError } from "../../redux/selectors/authSelectors";
import Message from "../message/Message";
import LoginStyled from "./LoginStyled";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });
  const error = useSelector(getError);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const showAlert = (message) => {
    setMessage(message);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (error === 400) {
      showAlert(`Wrong password or email`);
      setState(initialState);
    } else {
      dispatch(signInOperation(state));
      setState(initialState);
    }
  };
  return (
    <LoginStyled>
      <CSSTransition
        in={showMessage}
        timeout={250}
        classNames="message"
        unmountOnExit
      >
        <Message message={message} />
      </CSSTransition>
      {/* <Message message={message} /> */}
      <h2 className="login__title">Log In</h2>
      <form onSubmit={onHandleSubmit} className="login__form">
        <label className="login__form-label">
          Email
          <input
            className="login__form-input"
            type="text"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={onHandleChange}
          />
        </label>
        <label className="login__form-label">
          Password
          <input
            className="login__form-input"
            type="text"
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={onHandleChange}
          />
        </label>
        <button className="login__form-btn" type="submit">
          Login
        </button>
      </form>
    </LoginStyled>
  );
};

export default Login;
