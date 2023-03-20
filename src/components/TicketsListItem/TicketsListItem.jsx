import React from 'react';

import S7Logo from '../../assets/images/S7Logo.svg';

import classes from './TicketsListItem.module.scss';

const TicketsListItem = () => {
  return (
    <div className={classes.item__container}>
      <div className={classes['item__price-info']}>
        <div className={classes.item__price}>13 400 P</div>
        <div>
          <img src={S7Logo} alt="S7Logo" />
        </div>
      </div>
      <div className={classes['item__time-info']}>
        <div className={classes.item__time}>
          <div className={classes.item__path}>MOW - HKT</div>
          <div className={classes['item__path-info']}>10:45 - 08:00</div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>В ПУТИ</div>
            <div className={classes['item__path-info']}>21ч 15м</div>
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>2 ПЕРЕСАДКИ</div>
            <div className={classes['item__path-info']}>HKG, JNB</div>
          </div>
        </div>
      </div>
      <div className={classes['item__time-info']}>
        <div className={classes.item__time}>
          <div className={classes.item__path}>MOW - HKT</div>
          <div className={classes['item__path-info']}>11:20 - 00:50</div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>В ПУТИ</div>
            <div className={classes['item__path-info']}>13ч 30м</div>
          </div>
        </div>
        <div className={classes.item__time}>
          <div className={classes.item__time}>
            <div className={classes.item__path}>1 ПЕРЕСАДКА</div>
            <div className={classes['item__path-info']}>HKG</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsListItem;
