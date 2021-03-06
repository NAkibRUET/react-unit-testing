import React from "react";
import "./styles.scss";
import Logo from "../../assets/img/icon3.png";

const Header = (props) => {
  return (
    <div>
      <header data-test="headerComponent">
        <div className="wrap">
          <div className="logo">
            <img data-test="logoIMG" src={Logo} alt="Logo" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
