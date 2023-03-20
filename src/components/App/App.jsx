import React from 'react';

import { Header } from '../Header';
import { TabsButtons } from '../TabsButtons';
import { Filter } from '../Filter';
import { TicketsList } from '../TicketsList';

import classes from './App.module.scss';

const App = () => {
  return (
    <div>
      <Header />
      <div className={classes.section__container}>
        <Filter />
        <div className={classes.section__content}>
          <TabsButtons />
          <TicketsList />
        </div>
      </div>
    </div>
  );
};

export default App;
