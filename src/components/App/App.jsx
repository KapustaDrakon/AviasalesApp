import React from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

import { Header } from '../Header';
import { TabsButtons } from '../TabsButtons';
import { Filter } from '../Filter';
import { TicketsList } from '../TicketsList';
import GetRequest from '../../services/GetRequest';

import classes from './App.module.scss';

class App extends React.Component {
  getRequest = new GetRequest();

  componentDidMount() {
    this.props.fetchTicketsStart();
    (async () => {
      const searchId = await this.getRequest.getSearchId();
      this.fetchTickets(searchId);
    })();
  }

  tickets = [];
  errors500 = 0;
  async fetchTickets(searchId) {
    await this.getRequest
      .getResoursesFetch(`/tickets?searchId=${searchId}`)
      .then((res) => {
        this.tickets = [...this.tickets, ...res.tickets];

        if (res.stop === true) {
          return [this.props.fetchTicketsSuccess(this.tickets), this.props.fetchTicketsDone()];
        } else {
          return [this.props.fetchTicketsSuccess(this.tickets), this.fetchTickets(searchId)];
        }
      })
      .catch(() => {
        this.errors500 += 1;
        if (this.errors500 === 10 && this.tickets === []) {
          return this.props.fetchTicketsFail();
        } else return this.fetchTickets(searchId);
      })
      .finally(() => {});

    return this.tickets;
  }

  render() {
    const { error, loading } = this.props.state;

    return (
      <div>
        <Header />
        <div className={classes.section__container}>
          <Filter />
          <div className={classes.section__content}>
            <TabsButtons />
            {error !== null ? <div className={classes.section__error}>{error}</div> : null}
            {loading ? (
              <div className={classes.section__loading}>
                <h3 className={classes.section__loadtext}>Loading</h3>
                <Spin size="large" />
              </div>
            ) : (
              <TicketsList />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTicketsStart: () => {
      const action = { type: 'FETCH_TICKETS_START' };
      dispatch(action);
    },
    fetchTicketsSuccess: (tickets) => {
      if (tickets !== undefined) {
        const action = {
          type: 'FETCH_TICKETS_SUCCESS',
          response: tickets,
        };
        dispatch(action);
      } else {
        this.props.fetchTicketsFail();
      }
    },
    fetchTicketsDone: () => {
      const action = { type: 'FETCH_TICKETS_DONE' };
      dispatch(action);
    },
    fetchTicketsFail: () => {
      const action = { type: 'FETCH_TICKETS_FAIL' };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
