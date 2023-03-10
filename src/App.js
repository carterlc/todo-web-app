import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log();
  };

  useEffect(() => {
    console.log(todos)
  },[todos]);

  return (
    <div>
      <h1>Todo list</h1>
      <div className='form-container'>
        <div className='red-border'>
          <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
            <button type="submit">Add To Do</button>
            <ul>
              {todos.map((todo) => (
                <li key={todo.id}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo.id)}
                  />
                  <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                    {todo.text}
                  </span>
                  <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
