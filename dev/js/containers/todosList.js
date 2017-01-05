/*jshint esversion: 6 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions';

class TodosList extends Component {
  getFilterTodos(filter) {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return this.props.todos.filter(todo => { return todo.completed === false; });
      case 'SHOW_COMPLETED':
        return this.props.todos.filter(todo => { return todo.completed === true; });
      default:
        return this.props.todos;
    }
  }

  showTodos() {
    let filterTodos = this.getFilterTodos(this.props.activeFilter);
    let className = '';

    return filterTodos.map(todo => {
      className = todo.completed ? 'completed' : '';

      return(
        <li key={todo.id} className={className} onClick={() => this.props.toggleTodo(todo.id)}>
          {todo.text}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className='todos-list'>
        {this.showTodos()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    activeFilter: state.activeFilter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
