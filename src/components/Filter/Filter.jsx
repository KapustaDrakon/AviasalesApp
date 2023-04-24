import { React } from 'react';
import { connect } from 'react-redux';

import classes from './Filter.module.scss';

const Filter = (props) => {
  return (
    <form id="form_filter" className={classes['filter__container']}>
      <div className={classes['filter__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className={classes['filter__checkbox-container']}>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            id="all"
            name="Все"
            className={classes['filter__input']}
            defaultChecked
            onChange={() => props.filterChange('all')}
          />
          Вce
        </label>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            id="without_changes"
            name="Без пересадок"
            className={classes['filter__input']}
            defaultChecked
            onChange={() => props.filterChange('without_changes')}
          />
          Без пересадок
        </label>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            id="one_change"
            name="1 пересадка"
            className={classes['filter__input']}
            defaultChecked
            onChange={() => props.filterChange('one_change')}
          />
          1 пересадка
        </label>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            id="two_changes"
            name="2 пересадки"
            className={classes['filter__input']}
            defaultChecked
            onChange={() => props.filterChange('two_changes')}
          />
          2 пересадки
        </label>
        <label className={classes['filter__label']}>
          <input
            type="checkbox"
            id="three_changes"
            name="3 пересадки"
            className={classes['filter__input']}
            defaultChecked
            onChange={() => props.filterChange('three_changes')}
          />
          3 пересадки
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterChange: (id) => {
      let action = { type: id.toUpperCase() };
      dispatch(action);

      const buttonAll = document.getElementById('all');
      const buttonWithoutChanges = document.getElementById('without_changes');
      const buttonOneChange = document.getElementById('one_change');
      const buttonTwoChanges = document.getElementById('two_changes');
      const buttonThreeChanges = document.getElementById('three_changes');

      if (id === 'all' && buttonAll.checked === true) {
        buttonWithoutChanges.checked = true;
        buttonOneChange.checked = true;
        buttonTwoChanges.checked = true;
        buttonThreeChanges.checked = true;
        dispatch(action);
      } else if (id === 'all') {
        buttonWithoutChanges.checked = false;
        buttonOneChange.checked = false;
        buttonTwoChanges.checked = false;
        buttonThreeChanges.checked = false;
        action = { type: 'EMPTY' };
        dispatch(action);
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeChanges.checked === true
      ) {
        buttonAll.checked = true;
      }

      if (
        buttonWithoutChanges.checked === false &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeChanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === false &&
        buttonTwoChanges.checked === true &&
        buttonThreeChanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === false &&
        buttonThreeChanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeChanges.checked === false
      ) {
        buttonAll.checked = false;
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
