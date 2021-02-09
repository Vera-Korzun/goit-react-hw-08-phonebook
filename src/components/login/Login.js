import React, { useState } from "react";
import LoginStyled from "./LoginStyled";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    //console.log("state", state);
  };
  return (
    <LoginStyled>
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
