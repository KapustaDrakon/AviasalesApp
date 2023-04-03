import React from 'react';
import { connect } from 'react-redux';

import logo from '../../assets/images/LogoAviasales.svg';

import classes from './Header.module.scss';

const Header = (props) => {
  if (props.done) {
    return (
      <header className={classes.header}>
        <img alt="Logo" id="Logo" src={logo} className={classes.header__logo}></img>
      </header>
    );
  } else {
    return (
      <header className={classes.header}>
        <img alt="Logo" id="Logo" src={logo} className={`${classes.header__logo} ${classes.header__logo_blink}`}></img>
      </header>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    done: state.done,
  };
};

export default connect(mapStateToProps)(Header);
