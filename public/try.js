import React from 'react';

import './Header.css';
import logoImg from '../../img/icons/logo.svg';


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logoImg} alt="logo img"/>
            <span>Fachion</span>
          </div>

          <div className="header__nav">
            <ul>
              <li><a href="#!">CATALOGUE</a></li>
              <li><a href="#!">FASHION</a></li>
              <li><a href="#!">FAVORITE</a></li>
              <li><a href="#!">LIFESTYLE</a></li>
              <li><a className="header__nav-btn" href="#!">SIGN UP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;




.header {
  padding: 46px 0 56px;
}

.header__row {
  display: flex;
  column-gap: 30px;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  display: flex;
  align-items: center;
  column-gap: 13px;
}

.header__logo span {
  font-size: 40px;
  font-weight: 900;
  line-height: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #000;
}

.header__nav {
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  letter-spacing: 0.01em;
}

.header__nav ul {
  display: flex;
  align-items: center;
  column-gap: 65px;
}

.header__nav a {
  color: var(--textColor);
}

a.header__nav-btn {
  padding: 13px 22px 17px;
  background-color: #000;
  border-radius: 7px;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: #fff;
}