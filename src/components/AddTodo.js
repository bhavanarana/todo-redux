import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import { v4 as uuidv4 } from "uuid";
export const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      dispatch(addTodo([uuidv4(), value]));
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Add new Task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
