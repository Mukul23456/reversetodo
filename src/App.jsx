import './App.css'

import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, createdAt: new Date('2023-03-10T10:00:00'), task: 'Complete React project' },
    { id: 2, createdAt: new Date('2023-03-11T12:30:00'), task: 'Learn GraphQL' },
    { id: 3, createdAt: new Date('2023-03-12T08:45:00'), task: 'Read a book' }
  ]);

  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>input</th>
            <th>createdAt</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <ToDo
              key={todo.id}
              todoId={todo.id}
              createdAt={todo.createdAt}
              task={todo.task}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ToDo({ todoId, createdAt, task }) {
  return (
    <tr>
      <td>{todoId}</td>
      <td><input type="text" value={task} /></td>
      <td>{createdAt.toString()}</td>
    </tr>
  );
}

export default App;
