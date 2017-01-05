/*jshint esversion: 6 */

import React, { Component } from 'react';
import AddTodo from '../containers/addTodo';
import TodosList from '../containers/TodosList';
import FilterTodos from '../containers/filterTodos';

require('../../scss/style.scss');

export default class App extends Component {
  render() {
    return(
      <div className='container'>
        <h2>ToDo App</h2>
        <AddTodo />
        <h2>ToDos List</h2>
        <TodosList />
        <section className='filter-todos'>
          <FilterTodos text='All' filter='SHOW_ALL' />
          <FilterTodos text='Completed' filter='SHOW_COMPLETED' />
          <FilterTodos text='Active' filter='SHOW_ACTIVE' />
        </section>
      </div>
    );
  }
}
