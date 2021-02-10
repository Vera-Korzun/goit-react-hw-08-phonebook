import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import LogOut from "../logOut/LogOut";
import HeaderStyled from "./HeaderStyled";
import NavigationItem from "./NavigationItem";

const Header = () => {
  const isAuth = useSelector(getAuth);

  return (
    <HeaderStyled>
      <div className="header">
        <ul className="header__list">
          {mainRoutes.map((route) => (
            <NavigationItem {...route} key={route.path} />
          ))}
        </ul>
        {isAuth && <LogOut />}
      </div>
    </HeaderStyled>
  );
};

export default Header;
