import React from "react";
import { useDispatch } from "react-redux";
import { signOutSuccess } from "../../redux/actions/authActions";
import LogOutStyled from "./LogOutStyled";

const LogOut = () => {
  const dispatch = useDispatch();

  const onLogOutClick = () => {
    dispatch(signOutSuccess());
  };

  return (
    <LogOutStyled>
      <button type="button" className="user-menu-btn" onClick={onLogOutClick}>
        Log Out
      </button>
    </LogOutStyled>
  );
};

export default LogOut;