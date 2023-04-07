import React from 'react';
import { connect } from 'react-redux';

import { TicketsListItem } from '../TicketsListItem';

import classes from './TicketsList.module.scss';

const TicketsList = (props) => {
  let idx = 100;
  console.log(props.state);
  let visibleTickets;

  const { error, tickets, showTickets, filter } = props.state;

  const sorting = (visibleTickets) => {
    return visibleTickets.sort(function (a, b) {
      if (props.state.button === 'cheapest') {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      }
      if (props.state.button === 'fastest') {
        if (a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration) {
          return 1;
        }
        if (a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration) {
          return -1;
        }
        return 0;
      }
      if (props.state.button === 'optimal') {
        if (
          Math.floor(a.price / (a.segments[0].duration + a.segments[1].duration)) >
          Math.floor(b.price / (b.segments[0].duration + b.segments[1].duration))
        ) {
          return 1;
        }
        if (
          Math.floor(a.price / (a.segments[0].duration + a.segments[1].duration)) <
          Math.floor(b.price / (b.segments[0].duration + b.segments[1].duration))
        ) {
          return -1;
        }
        return 0;
      }
    });
  };

  const content = (visibleTickets) => {
    return (
      <div>
        {sorting(visibleTickets)
          .slice(0, showTickets)
          .map((ticket) => {
            return <TicketsListItem ticket={ticket} key={idx++} />;
          })}
      </div>
    );
  };

  const buttonMore = (
    <div>
      <button type="button" className={classes['list__button-more']} onClick={() => props.showTickets()}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </button>
    </div>
  );

  const showContent = (visibleTickets) => {
    return (
      <div>
        {content(visibleTickets)}
        {visibleTickets.length > showTickets ? buttonMore : null}
      </div>
    );
  };

  const filterCheck = () => {
    console.log(filter);
    if (filter.includes('empty') || tickets.length === 0) {
      console.log(tickets);
      console.log('if - 1');
      return <div className={classes.list__notfound}>Рейсов, подходящих под занные фильтры не найдено.</div>;
    }
    if (filter.includes('all')) {
      visibleTickets = tickets;
      console.log(visibleTickets);
      console.log('if - 2');
      return showContent(visibleTickets);
    }
    if (filter.length === 1 && filter.includes('without_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0;
      });
      console.log(visibleTickets);
      console.log('if - 3');
      return showContent(visibleTickets);
    }
    if (filter.length === 1 && filter.includes('one_change')) {
      visibleTickets = tickets.filter((ticket) => {
        return ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1;
      });
      console.log(visibleTickets);
      console.log('if - 4');
      return showContent(visibleTickets);
    }
    if (filter.length === 1 && filter.includes('two_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2;
      });
      console.log(visibleTickets);
      console.log('if - 5');
      return showContent(visibleTickets);
    }
    if (filter.length === 1 && filter.includes('three_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3;
      });
      console.log(visibleTickets);
      console.log('if - 6');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('without_changes') && filter.includes('one_change')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 1) &&
          (ticket.segments[1].stops.length === 0 || ticket.segments[1].stops.length === 1)
        );
      });
      console.log(visibleTickets);
      console.log('if - 7');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('without_changes') && filter.includes('two_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 2) &&
          (ticket.segments[1].stops.length === 0 || ticket.segments[1].stops.length === 2)
        );
      });
      console.log(visibleTickets);
      console.log('if - 8');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('without_changes') && filter.includes('three_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 || ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 0 || ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 9');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('one_change') && filter.includes('two_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 1 || ticket.segments[0].stops.length === 2) &&
          (ticket.segments[1].stops.length === 1 || ticket.segments[1].stops.length === 2)
        );
      });
      console.log(visibleTickets);
      console.log('if - 10');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('one_change') && filter.includes('three_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 1 || ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 1 || ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 11');
      return showContent(visibleTickets);
    }
    if (filter.length === 2 && filter.includes('two_changes') && filter.includes('three_changes')) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 2 || ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 2 || ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 12');
      return showContent(visibleTickets);
    }
    if (
      filter.length === 3 &&
      filter.includes('without_changes') &&
      filter.includes('one_change') &&
      filter.includes('two_changes')
    ) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 ||
            ticket.segments[0].stops.length === 1 ||
            ticket.segments[0].stops.length === 2) &&
          (ticket.segments[1].stops.length === 0 ||
            ticket.segments[1].stops.length === 1 ||
            ticket.segments[1].stops.length === 2)
        );
      });
      console.log(visibleTickets);
      console.log('if - 13');
      return showContent(visibleTickets);
    }
    if (
      filter.length === 3 &&
      filter.includes('without_changes') &&
      filter.includes('one_change') &&
      filter.includes('three_changes')
    ) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 ||
            ticket.segments[0].stops.length === 1 ||
            ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 0 ||
            ticket.segments[1].stops.length === 1 ||
            ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 14');
      return showContent(visibleTickets);
    }
    if (
      filter.length === 3 &&
      filter.includes('without_changes') &&
      filter.includes('two_changes') &&
      filter.includes('three_changes')
    ) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 0 ||
            ticket.segments[0].stops.length === 2 ||
            ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 0 ||
            ticket.segments[1].stops.length === 2 ||
            ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 15');
      return showContent(visibleTickets);
    }
    if (
      filter.length === 3 &&
      filter.includes('one_change') &&
      filter.includes('two_changes') &&
      filter.includes('three_changes')
    ) {
      visibleTickets = tickets.filter((ticket) => {
        return (
          (ticket.segments[0].stops.length === 1 ||
            ticket.segments[0].stops.length === 2 ||
            ticket.segments[0].stops.length === 3) &&
          (ticket.segments[1].stops.length === 1 ||
            ticket.segments[1].stops.length === 2 ||
            ticket.segments[1].stops.length === 3)
        );
      });
      console.log(visibleTickets);
      console.log('if - 16');
      return showContent(visibleTickets);
    }
  };

  const showContentWithoutError = error === null ? <div>{filterCheck()}</div> : null;

  return <div className={classes.list__container}>{showContentWithoutError}</div>;
};

const mapStateToProps = (state) => {
  return {
    state: state,
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
