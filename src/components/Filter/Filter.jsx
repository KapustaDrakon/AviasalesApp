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
            name="filter"
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
            name="filter"
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
            name="filter"
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
            name="filter"
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
            name="filter"
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
      dispatch(filterChanger(id));
    },
  };
};

const filterChanger = (id) => {
  let action = { type: id.toUpperCase() };

  const buttons = document.getElementsByName('filter');
  const buttonsList = [...buttons];
  const buttonsListWithoutAll = buttonsList.slice(1, buttonsList.length);

  if (id === 'all' && buttonsList[0].checked === true) {
    buttonsList.map((button) => (button.checked = true));
  } else if (id === 'all') {
    buttonsList.map((button) => (button.checked = false));
    action = { type: 'EMPTY' };
  }

  // const func = (button) => {
  //   return !button.checked;
  // };

  if (buttonsListWithoutAll.every((button) => !button.checked)) {
    buttonsList[0].checked = false;
  } else buttonsList[0].checked = true;

  return action;
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
