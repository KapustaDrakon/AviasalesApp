import { createStore } from 'redux';

import { actionTypeFilter } from './actionTypeFilter';

const initialState = {
  button: 'cheapest',
  filter: ['empty'],
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

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
