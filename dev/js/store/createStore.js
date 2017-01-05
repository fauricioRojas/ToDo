/*jshint esversion: 6 */

import createLogger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from '../reducers';

const store = createStore(allReducers, {todos: [], activeFilter: 'SHOW_ALL'}, compose(applyMiddleware(createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )  );

export default store;
