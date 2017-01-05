/*jshint esversion: 6 */

import { combineReducers } from 'redux';
import todos from './todosReducer';
import activeFilter from './activeFilterReducer';

const allReducers = combineReducers({
  todos,
  activeFilter
});

export default allReducers;
