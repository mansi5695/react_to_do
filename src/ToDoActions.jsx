// TodoActions.js
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: text,
  });
  
  export const updateTodo = (id, text) => ({
    type: 'UPDATE_TODO',
    payload: { id, text },
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  