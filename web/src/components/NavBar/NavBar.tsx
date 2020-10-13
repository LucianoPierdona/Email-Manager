import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles";

const NavBar = () => {
  return (
    <Header>
      <Link to="/">
        <img
          src="http://www.nordestealimentos.com.br/images/logo-moinho-do-nordeste.png"
          alt="nordeste logo"
        />
      </Link>
    </Header>
  );
};

export default NavBar;
