// App.js
import React from 'react';
import { Provider } from 'react-redux';
import TodoInput from './ToDoInput';
import TodoList from './ToDoList';
import { store } from './ToDoReducer';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
