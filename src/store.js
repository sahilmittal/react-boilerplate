/**
 *  Redux Store
 */
import {createStore, applyMiddleware, compose} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createBrowserHistory} from 'history';
import rootReducer from './modules';

export const history = createBrowserHistory();

const enhancers = [];
let middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    composedEnhancers,
  );

  return store;
}
