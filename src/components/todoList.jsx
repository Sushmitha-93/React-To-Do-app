import React, { Component } from "react";
import TodoItem from "./todoItem";

const TodoList = props => {
  return props.todoList.map(item => <TodoItem item={item} />);
};

export default TodoList;
