import React, { Component } from "react";

const TodoInsert = ({ onInsert }) => {
  return (
    <div>
      <input type="text" id="todoIns" placeholder="add a new Todo.." />
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          //console.log(document.getElementById("todoIns").value);
          onInsert(document.getElementById("todoIns").value);
        }}
      >
        Insert
      </button>
    </div>
  );
};

export default TodoInsert;
