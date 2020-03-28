import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoList></TodoList>
          <TodoInput></TodoInput>
        </div>
      </div>
    </div>
  );
}

export default App;
