import React, { Component } from "react";
import "./todoInsert.css";

const TodoInsert = ({ onInsert }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onInsert(document.getElementById("todoIns").value);
        document.getElementById("todoIns").value = "";
      }}
      autoComplete="off"
    >
      <div class="input-group">
        <input
          type="text"
          id="todoIns"
          className="todoInput form-control"
          placeholder="add a new Todo.."
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">
            +
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoInsert;
