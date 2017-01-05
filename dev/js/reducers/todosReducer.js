/*jshint esversion: 6 */
import * as actionTypes from '../actions/actionTypes';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, action.payload];
    case actionTypes.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return Object.assign({}, todo, {completed: !todo.completed});
      });
    default:
      return state;
  }
}
