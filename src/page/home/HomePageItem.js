import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";

const HomePageItem = ({ name, path, exact, isPrivate, restricted }) => {
  const isAuth = useSelector(getAuth);

  return (
    <>
      {!isAuth && !isPrivate && restricted && (
        <li className="home__list-item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="home__list-item-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivate && !restricted && (
        <li className="home__list-item" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="home__list-item-link"
            activeClassName="active-link"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default HomePageItem;
