import React from 'react';
//import { Tabs } from 'antd';

import classes from './TabsButtons.module.scss';

const TabsButtons = () => {
  /*return (
    <section className="tabs__container">
      <Tabs className="tabs__buttons" defaultActiveKey="1" animated={false}>
        <Tabs.TabPane tab="САМЫЙ ДЕШЕВЫЙ" key="1" className="first-tab"></Tabs.TabPane>
        <Tabs.TabPane tab="САМЫЙ БЫСТРЫЙ" key="2" className="second-tab"></Tabs.TabPane>
        <Tabs.TabPane tab="ОПТИМАЛЬНЫЙ" key="3" className="third-tab"></Tabs.TabPane>
      </Tabs>
    </section>
  );*/

  return (
    <section className={classes.tabs__container}>
      <div className={classes.tabs__buttons}>
        <button className={`${classes['first-tab']} ${classes.button}`}>САМЫЙ ДЕШЕВЫЙ</button>
        <button className={`${classes['second-tab']} ${classes.button}`}>САМЫЙ БЫСТРЫЙ</button>
        <button className={`${classes['third-tab']} ${classes.button}`}>ОПТИМАЛЬНЫЙ</button>
      </div>
    </section>
  );
};

export default TabsButtons;
