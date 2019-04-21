import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todoList";
import TodoInsert from "./components/todoInsert";

class App extends Component {
  state = {
    todoList: [
      { id: 1, value: "Learn React", done: false },
      { id: 2, value: "Create To-do app", done: false },
      { id: 3, value: "Go shopping", done: false }
    ],
    id: 4
  };

  handleOnInsert = newToDo => {
    console.log("handleOnInsert ", newToDo);
    let id = this.state.id;
    let todoList = [...this.state.todoList];
    let listId = todoList.length === 0 ? (id = 1) : id;
    id++;
    todoList.unshift({ id: listId, value: newToDo, done: false });
    this.setState({ todoList, id });
  };

  handleOnDelete = itemId => {
    console.log("handle Delete ", itemId);
    let todoList = [...this.state.todoList];
    let itemIndex = todoList.findIndex(item => item.id === itemId);
    todoList.splice(itemIndex, 1);
    this.setState({ todoList });
  };

  handleOnCheck = itemId => {
    console.log("handleOnCheck");
    let todoList = [...this.state.todoList];
    let itemIndex = todoList.findIndex(item => item.id === itemId);
    todoList[itemIndex].done = !todoList[itemIndex].done;
    let todoItem = todoList[itemIndex];
    todoList.splice(itemIndex, 1);
    todoItem.done ? todoList.push(todoItem) : todoList.unshift(todoItem);
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="App container">
        <br />
        <h1 className="text-center">To-Do List</h1>
        <br />
        <TodoInsert onInsert={this.handleOnInsert} />
        <br />
        <TodoList
          todoList={this.state.todoList}
          onDelete={this.handleOnDelete}
          onCheck={this.handleOnCheck}
        />
      </div>
    );
  }
}

export default App;
