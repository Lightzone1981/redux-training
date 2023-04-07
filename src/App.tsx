import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AddTodo } from './components/AddTodo';
import { Provider } from 'react-redux';
import store from './redux/store';
import { TodoList } from './components/TodoList';

const App = () => {
  return (
    <div className='wrapper'>
      <Provider store={store}>
        <>
          <p className="todos__title">Our todo list</p> 
          <AddTodo />
          <TodoList />
        </>
      </Provider>
    </div>
  );
}

export default App;
