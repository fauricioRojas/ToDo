/*jshint esversion: 6 */
import * as actionTypes from '../actions/actionTypes';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case actionTypes.FILTER_TODOS:
      return action.payload;
    default:
      return state;
  }
}
