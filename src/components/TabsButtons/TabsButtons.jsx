import React from 'react';
import { connect } from 'react-redux';

import classes from './TabsButtons.module.scss';

const TabsButtons = (props) => {
  setTimeout(() => {
    const buttons = document.getElementsByName('button');
    const buttonsList = [...buttons];
    buttonsList.map((button) => {
      button.classList.remove(classes.button_pressed);
    });
    document.getElementById(props.button).classList.add(classes.button_pressed);
  }, 0);

  return (
    <section className={classes.tabs__container}>
      <div className={classes.tabs__buttons}>
        <button
          name="button"
          id="cheapest"
          className={`${classes['cheapest']} ${classes.button} `}
          onClick={() => props.buttonPressed('cheapest')}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          name="button"
          id="fastest"
          className={`${classes['fastest']} ${classes.button} `}
          onClick={() => props.buttonPressed('fastest')}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          name="button"
          id="optimal"
          className={`${classes['optimal']} ${classes.button} `}
          onClick={() => props.buttonPressed('optimal')}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    button: state.button,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPressed: (id) => {
      const action = { type: id.toUpperCase() };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsButtons);
