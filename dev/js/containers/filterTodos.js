/*jshint esversion: 6 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterTodos} from '../actions';

class FilterTodos extends Component {
  render() {
    return(
      <span onClick={() => this.props.filterTodos(this.props.filter)}>{this.props.text}</span>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    filterTodos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos);
