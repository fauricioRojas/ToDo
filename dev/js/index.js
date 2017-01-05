/*jshint esversion: 6 */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import store from './store/createStore';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
