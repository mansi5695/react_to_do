// TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './ToDoReducer';

const TodoInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
