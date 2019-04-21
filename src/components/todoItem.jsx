import React, { Component } from "react";
import "./todoItem.css";

const TodoItem = ({ item, onDelete, onCheck }) => {
  return (
    <li class={getTodoItemClass()}>
      <input
        className="mr-2"
        type="checkbox"
        checked={item.done}
        onClick={() => {
          onCheck(item.id);
        }}
      />
      {item.value}
      <button
        type="button"
        className="close"
        onClick={() => {
          {
            onDelete(item.id);
          }
        }}
      >
        &times;
      </button>
    </li>
  );

  function getTodoItemClass() {
    let todoClass = "todoItem list-group-item ";
    todoClass += item.done ? "done" : "undone";
    return todoClass;
  }
};

export default TodoItem;
