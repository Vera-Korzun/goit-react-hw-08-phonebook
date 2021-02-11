import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuth } from "../../redux/selectors/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import HomePageItem from "./HomePageItem";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const isAuth = useSelector(getAuth);
  return (
    <HomePageStyled>
      <h2 className="home-page__title">Welcome to the phonebook</h2>
      <h3 className="home-page__title">Go to</h3>
      <ul className="home__list">
        {mainRoutes.map((route) => (
          <HomePageItem {...route} key={route.path} />
        ))}
      </ul>
      <h3 className="home-page__title">to work with application</h3>
    </HomePageStyled>
  );
};

export default HomePage;
