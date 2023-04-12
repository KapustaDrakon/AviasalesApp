import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

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
