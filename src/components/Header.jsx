import React, { useState } from "react";
import "./header.css";
import logo from "./images/aerolab-logo.svg";
import coin from "./images/coin.svg";

const Header = (props) => {
  const { name, points, historial, onClick, clase, openModal } = props;

  // const handleClick = () => {
  //   setClase("probando");
  // };
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <img src={logo} alt="" className="header__logo" />
          <div className="header__information">
            <h2 className="header__name" onClick={onClick}>
              {name}🔻
            </h2>
            <p className="header__price">
              {points}
              <img className="header__coin" src={coin} alt="" />
            </p>
            <button onClick={openModal}>➕</button>
          </div>
        </nav>
        <div className={`header__history ${clase}`}>{historial}</div>
        <div className="header__banner">
          <h1 className="header__title">Electronics</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
