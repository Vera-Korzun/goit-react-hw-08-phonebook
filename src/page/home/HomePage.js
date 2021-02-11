import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuth } from "../../redux/selectors/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const isAuth = useSelector(getAuth);
  return (
    <HomePageStyled>
      <h2 className="home-page__title">Welcome to the phonebook</h2>
      <h3 className="home-page__title">Go to</h3>
      <ul className="home__list">
        {mainRoutes.map(({ name, path, exact, isPrivate, restricted }) => (
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
        ))}
      </ul>
      <h3 className="home-page__title">to work with application</h3>
    </HomePageStyled>
  );
};

export default HomePage;
