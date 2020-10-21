import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styles";
import logo from "../../Assets/logo_transparent.png";

const NavBar = () => {
  return (
    <Header>
      <Link to="/">
        <img src={logo} alt="nordeste logo" />
      </Link>
    </Header>
  );
};

export default NavBar;
