import React from 'react';
import { connect } from 'react-redux';

import classes from './TabsButtons.module.scss';

const TabsButtons = (props) => {
  return (
    <section className={classes.tabs__container}>
      <div className={classes.tabs__buttons}>
        <button
          id="cheapest"
          className={`${classes['cheapest']} ${classes.button} ${classes.button_pressed}`}
          onClick={() => props.buttonPressed('cheapest')}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          id="fastest"
          className={`${classes['fastest']} ${classes.button}`}
          onClick={() => props.buttonPressed('fastest')}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          id="optimal"
          className={`${classes['optimal']} ${classes.button}`}
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
    button: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonPressed: (id) => {
      const action = { type: id.toUpperCase() };
      dispatch(action);

      const buttonCheapest = document.getElementById('cheapest');
      const buttonFastest = document.getElementById('fastest');
      const buttonOptimal = document.getElementById('optimal');

      if (id === 'cheapest') {
        buttonCheapest.classList.add(classes.button_pressed);
        buttonFastest.classList.remove(classes.button_pressed);
        buttonOptimal.classList.remove(classes.button_pressed);
      }

      if (id === 'fastest') {
        buttonFastest.classList.add(classes.button_pressed);
        buttonCheapest.classList.remove(classes.button_pressed);
        buttonOptimal.classList.remove(classes.button_pressed);
      }

      if (id === 'optimal') {
        buttonOptimal.classList.add(classes.button_pressed);
        buttonFastest.classList.remove(classes.button_pressed);
        buttonCheapest.classList.remove(classes.button_pressed);
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TabsButtons);
