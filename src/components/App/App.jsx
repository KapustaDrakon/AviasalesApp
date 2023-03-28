import React from 'react';
import { Provider } from 'react-redux';

import store from '../Redux/store';
import { Header } from '../Header';
import { TabsButtons } from '../TabsButtons';
import { Filter } from '../Filter';
import { TicketsList } from '../TicketsList';

import classes from './App.module.scss';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <div className={classes.section__container}>
          <Filter />
          <div className={classes.section__content}>
            <TabsButtons />
            <TicketsList />
          </div>
        </div>
      </Provider>
    </div>
  );
};

export default App;
