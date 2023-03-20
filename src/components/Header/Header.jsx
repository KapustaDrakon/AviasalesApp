import React from 'react';

import logo from '../../assets/images/LogoAviasales.svg';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <img alt="Logo" src={logo} className={classes.header__logo}></img>
    </header>
  );
};

export default Header;
