import React from 'react';

import { TicketsListItem } from '../TicketsListItem';

import classes from './TicketsList.module.scss';

const TicketsList = () => {
  return (
    <div className={classes.list__container}>
      <TicketsListItem />
      <TicketsListItem />
      <TicketsListItem />
      <TicketsListItem />
      <TicketsListItem />
      <button type="button" className={classes['list__button-more']}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );
};

export default TicketsList;
