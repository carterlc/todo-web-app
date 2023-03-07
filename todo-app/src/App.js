import React, { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  
  return (
    <div>
      <form>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
        <button type="submit">Add To Do</button>
      </form>
    </div>
  );
}

export default App;
