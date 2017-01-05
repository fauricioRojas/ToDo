/*jshint esversion: 6 */

import * as actionTypes from './actionTypes';

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: id
  };
};

export const filterTodos = (filter) => {
  return {
    type: actionTypes.FILTER_TODOS,
    payload: filter
  };
};
