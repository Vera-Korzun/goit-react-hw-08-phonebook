import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/main";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
};

export default App;
