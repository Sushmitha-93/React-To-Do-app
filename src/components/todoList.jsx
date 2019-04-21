import React, { Component } from "react";
import TodoItem from "./todoItem";

const TodoList = props => {
  return props.todoList.map(item => (
    <TodoItem item={item} onDelete={props.onDelete} onCheck={props.onCheck} />
  ));
};

export default TodoList;
