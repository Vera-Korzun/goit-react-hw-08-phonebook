import React from "react";
import { useSelector } from "react-redux";
import { getAuth } from "../../redux/selectors/authSelectors";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const isAuth = useSelector(getAuth);
  return (
    <HomePageStyled>
      <h2 className="home-page__title">Welcome to the phonebook</h2>
      {/* {isAuth && (
        <h2 className="home-page__title">
            Welcome to the your</h2> 
           <Link to="/contacts">Phonebook</Link>
        
        )} */}
    </HomePageStyled>
  );
};

export default HomePage;
