/*jshint esversion: 6 */

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
  addTodo() {
    this.props.addTodo({
      id: this.props.todos.length,
      text: this.todo.value,
      completed: false
    });

    this.todo.value = '';
    return false;
  }

  render() {
    return(
      <form className='add-todo-form'>
        <input className='form-control' type='text' name='todo' placeholder='Type a todo...' ref={todo => { this.todo = todo; }} />
        <input className='btn-success' type='button' value='Add' onClick={() => this.addTodo(event)} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
