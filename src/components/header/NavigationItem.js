import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";

const NavigationItem = ({ path, name, exact, isPrivate, restricted }) => {
  const isAuth = useSelector(getAuth);

  return (
    <>
      {!isPrivate && !restricted && (
        <li className="header__list-item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="header__list-item-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !restricted && (
        <li className="header__list-item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="header__list-item-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && restricted && (
        <li className="header__list-item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="header__list-item-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
