import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../../redux/operations/authOperations";
import LoginStyled from "../login/LoginStyled";

const initialState = {
  email: "",
  password: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpOperation(state));
    setState(initialState);
  };

  return (
    <LoginStyled>
      <h2 className="login__title">Sign Up</h2>
      <form className="login__form" onSubmit={onHandleSubmit}>
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
          Registration
        </button>
      </form>
    </LoginStyled>
  );
};

export default SignUp;
