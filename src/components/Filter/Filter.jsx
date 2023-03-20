import { React } from 'react';
import { Checkbox } from 'antd';

import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter__container">
      <div className="filter__title">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="filter__checkbox-container">
        <label className="filter__label">
          <Checkbox id="Все" name="Все" className="filter__input" />
          Вce
        </label>
        <label className="filter__label">
          <Checkbox id="Без пересадок" name="Без пересадок" className="filter__input" />
          Без пересадок
        </label>
        <label className="filter__label">
          <Checkbox id="1 пересадка" name="1 пересадка" className="filter__input" />1 пересадка
        </label>
        <label className="filter__label">
          <Checkbox id="2 пересадки" name="2 пересадки" className="filter__input" />2 пересадки
        </label>
        <label className="filter__label">
          <Checkbox id="3 пересадки" name="3 пересадки" className="filter__input" />3 пересадки
        </label>
      </div>
    </div>
  );
};

export default Filter;
