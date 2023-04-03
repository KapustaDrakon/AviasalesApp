import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import { actionTypeFilter } from './actionTypeFilter';

const initialState = {
  button: 'cheapest',
  filter: ['empty'],
  tickets: [],
  showTickets: 5,
  loading: true,
  done: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const actionType = action.type.toLowerCase();

  switch (action.type) {
    case 'CHEAPEST':
      return {
        ...state,
        button: 'cheapest',
      };

    case 'FASTEST':
      return {
        ...state,
        button: 'fastest',
      };

    case 'OPTIMAL':
      return {
        ...state,
        button: 'optimal',
      };

    case 'ALL':
      return actionTypeFilter(state, actionType);

    case 'WITHOUT_CHANGES':
      return actionTypeFilter(state, actionType);

    case 'ONE_CHANGE':
      return actionTypeFilter(state, actionType);

    case 'TWO_CHANGES':
      return actionTypeFilter(state, actionType);

    case 'THREE_CHANGES':
      return actionTypeFilter(state, actionType);

    case 'EMPTY':
      return {
        ...state,
        filter: ['empty'],
      };

    case 'FETCH_TICKETS_START':
      return {
        ...state,
        loading: true,
      };

    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        loading: false,
        tickets: action.response,
      };

    case 'FETCH_TICKETS_DONE':
      return {
        ...state,
        done: true,
      };

    case 'FETCH_TICKETS_FAIL':
      return {
        ...state,
        loading: false,
        error: 'Server Error',
      };

    case 'AMOUNT_SHOW_TICKETS':
      return {
        ...state,
        showTickets: state.showTickets + 5,
      };

    default:
      return state;
  }
};

const loggerMiddleware = (/*store*/) => (next) => (action) => {
  const result = next(action);
  //console.log('Middleware > ', store.getState());
  return result;
};

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)));

export default store;
