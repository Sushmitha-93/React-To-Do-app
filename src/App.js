import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/todoList";
import TodoInsert from "./components/todoInsert";

class App extends Component {
  state = {
    todoList: [
      { id: 1, value: "Learn React", done: true },
      { id: 2, value: "Create Calculator app", done: true },
      { id: 3, value: "Create To-do app", done: false }
    ]
  };

  handleOnInsert = newToDo => {
    console.log("handleOnInsert ", newToDo);
    let todoList = [...this.state.todoList];
    let listId = todoList[todoList.length - 1].id + 1;
    todoList.push({ id: listId, value: newToDo, done: false });
    this.setState({ todoList });
  };

  render() {
    return (
      <div className="App">
        <h1 className="text-center">To-Do Application in React</h1>
        <TodoInsert onInsert={this.handleOnInsert} />
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
