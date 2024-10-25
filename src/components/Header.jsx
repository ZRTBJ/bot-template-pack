import React from "react";
import HeaderImage from "../assets/header.png";

const Header = () => (
  <header className="inset-x-0 top-0 z-50">
    <img src={HeaderImage} alt="Header" className="w-[100%]" />
  </header>
);

export default Header;
