import React from 'react';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  state = {
    items:[
      {id: 1, title: "wake up"},
      {id : 2, title: "make breakfast"},
    ], 
    id: uuid(), 
    item: "", 
    editItem: false
  };
  handleChange = (e) => {
    console.log('Handle Change');
  };
  handleSubmit = (e) => {
    console.log('Handle Submit');
  };
  ClearList = () => {
    console.log('Clear List Method');
  };
  handleDelete = (id) => {
    console.log(`Handle Delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`Handle Edit ${id}`);
  };

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center"></h3>
              <TodoInput item={this.state.item} 
                         handleChange={this.handleChange} 
                         handleSubmit={this.handleSubmit}
                         editItem={this.state.editItem}
              />
              <TodoList item={this.state.item} 
                        clearList={this.clearList}
                        handleDelete={this.handleEdit}
                        handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );

}

export default App;
