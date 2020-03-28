import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <div className="row">
        <TodoList></TodoList>
        <TodoInput></TodoInput>
      </div>
    </div>
  );
}

export default App;
