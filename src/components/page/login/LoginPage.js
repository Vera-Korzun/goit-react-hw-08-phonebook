import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("state", state);
  };
  return (
    <>
      <h2>Login form</h2>
      <form onSubmit={onHandleSubmit}>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={state.email}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            placeholder="Enter password"
            value={state.password}
            onChange={onHandleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
