import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <di className="header">
      <Logo className="logo-container" />
      <div className="options">
        <div className="option" to="/shop">
          SHOP
        </div>
        <div className="option" to="/shop">
          CONTACT
        </div>
        <div className="option" to="/signin">
          SIGN IN
        </div>
      </div>
    </di>
  );
};
export default Header;
