import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { auth } from './components/auth/reducers';
import { middleware } from './middleware';

const rootReducer = combineReducers({
  auth,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
