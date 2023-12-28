// TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from './ToDoReducer';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(updateTodo({ id: todo.id, text: prompt('Update Todo:', todo.text) }))}>
            Update
          </button>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
