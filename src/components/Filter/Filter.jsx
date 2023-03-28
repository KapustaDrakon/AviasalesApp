import { React } from 'react';
//import { Checkbox } from 'antd';
import { connect } from 'react-redux';

import './Filter.scss';

const Filter = (props) => {
  return (
    <form id="form_filter" className="filter__container">
      <div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="filter__checkbox-container">
        <label className="filter__label">
          <input
            type="checkbox"
            id="all"
            name="Все"
            className="filter__input"
            onChange={() => props.filterChange('all')}
          />
          Вce
        </label>
        <label className="filter__label">
          <input
            type="checkbox"
            id="without_changes"
            name="Без пересадок"
            className="filter__input"
            onChange={() => props.filterChange('without_changes')}
          />
          Без пересадок
        </label>
        <label className="filter__label">
          <input
            type="checkbox"
            id="one_change"
            name="1 пересадка"
            className="filter__input"
            onChange={() => props.filterChange('one_change')}
          />
          1 пересадка
        </label>
        <label className="filter__label">
          <input
            type="checkbox"
            id="two_changes"
            name="2 пересадки"
            className="filter__input"
            onChange={() => props.filterChange('two_changes')}
          />
          2 пересадки
        </label>
        <label className="filter__label">
          <input
            type="checkbox"
            id="three_changes"
            name="3 пересадки"
            className="filter__input"
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
    filter: state,
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
      const buttonThreeCHanges = document.getElementById('three_changes');

      if (id === 'all' && buttonAll.checked === true) {
        buttonWithoutChanges.checked = true;
        buttonOneChange.checked = true;
        buttonTwoChanges.checked = true;
        buttonThreeCHanges.checked = true;
        dispatch(action);
      } else if (id === 'all') {
        buttonWithoutChanges.checked = false;
        buttonOneChange.checked = false;
        buttonTwoChanges.checked = false;
        buttonThreeCHanges.checked = false;
        action = { type: 'EMPTY' };
        dispatch(action);
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeCHanges.checked === true
      ) {
        buttonAll.checked = true;
      }

      if (
        buttonWithoutChanges.checked === false &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeCHanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === false &&
        buttonTwoChanges.checked === true &&
        buttonThreeCHanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === false &&
        buttonThreeCHanges.checked === true
      ) {
        buttonAll.checked = false;
      }

      if (
        buttonWithoutChanges.checked === true &&
        buttonOneChange.checked === true &&
        buttonTwoChanges.checked === true &&
        buttonThreeCHanges.checked === false
      ) {
        buttonAll.checked = false;
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
