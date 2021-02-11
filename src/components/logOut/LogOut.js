import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from "../../redux/actions/formActions";
//import { signOutSuccess } from "../../redux/actions/authActions";
import { signOutOperation } from "../../redux/operations/authOperations";
import { getName } from "../../redux/selectors/authSelectors";
import LogOutStyled from "./LogOutStyled";

const LogOut = () => {
  const dispatch = useDispatch();
  const name = useSelector(getName);

  const onLogOutClick = () => {
    dispatch(signOutOperation());
    dispatch(signOutAction());
  };

  return (
    <LogOutStyled>
      <p className="user-menu">
        Hi, <span className="user-menu-name">{name}</span>
      </p>
      <button type="button" className="user-menu-btn" onClick={onLogOutClick}>
        Log Out
      </button>
    </LogOutStyled>
  );
};

export default LogOut;
