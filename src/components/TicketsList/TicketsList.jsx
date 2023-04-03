import React from 'react';
import { connect } from 'react-redux';

import { TicketsListItem } from '../TicketsListItem';

import classes from './TicketsList.module.scss';

const TicketsList = (props) => {
  let idx = 100;

  if (props.props.error === null) {
    return (
      <div className={classes.list__container}>
        {props.props.tickets.slice(0, props.props.showTickets).map((ticket) => {
          return <TicketsListItem ticket={ticket} key={idx++} />;
        })}
        <button type="button" className={classes['list__button-more']} onClick={() => props.showTickets()}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      </div>
    );
  } else {
    return (
      <div className={classes.list__container}>
        {props.props.tickets.slice(0, props.props.showTickets).map((ticket) => {
          return <TicketsListItem ticket={ticket} key={idx++} />;
        })}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    showTickets: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showTickets: () => {
      const action = { type: 'AMOUNT_SHOW_TICKETS' };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
