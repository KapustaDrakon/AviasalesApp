import { actionTypeFilter } from './actionTypeFilter';
import * as actions from './actions';

const {
  CHEAPEST,
  FASTEST,
  OPTIMAL,
  ALL,
  WITHOUT_CHANGES,
  ONE_CHANGE,
  TWO_CHANGES,
  THREE_CHANGES,
  EMPTY,
  FETCH_TICKETS_START,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_DONE,
  FETCH_TICKETS_FAIL,
  AMOUNT_SHOW_TICKETS,
} = actions;

const initialState = {
  button: 'cheapest',
  filter: ['all'],
  tickets: [],
  showTickets: 5,
  loading: true,
  done: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const actionType = action.type.toLowerCase();

  switch (action.type) {
    case CHEAPEST:
      return {
        ...state,
        button: 'cheapest',
      };

    case FASTEST:
      return {
        ...state,
        button: 'fastest',
      };

    case OPTIMAL:
      return {
        ...state,
        button: 'optimal',
      };

    case ALL:
      return actionTypeFilter(state, actionType);

    case WITHOUT_CHANGES:
      return actionTypeFilter(state, actionType);

    case ONE_CHANGE:
      return actionTypeFilter(state, actionType);

    case TWO_CHANGES:
      return actionTypeFilter(state, actionType);

    case THREE_CHANGES:
      return actionTypeFilter(state, actionType);

    case EMPTY:
      return {
        ...state,
        filter: ['empty'],
      };

    case FETCH_TICKETS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        tickets: action.response,
      };

    case FETCH_TICKETS_DONE:
      return {
        ...state,
        done: true,
      };

    case FETCH_TICKETS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Server Error',
      };

    case AMOUNT_SHOW_TICKETS:
      return {
        ...state,
        showTickets: state.showTickets + 5,
      };

    default:
      return state;
  }
};

export default reducer;
