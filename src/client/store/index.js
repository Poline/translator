import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

let store;

if (process.env.NODE_ENV === `development`) {
  store = createStore(rootReducer, applyMiddleware(createLogger()));
} else{
  store = createStore(rootReducer);
}

export default store;
