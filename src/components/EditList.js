import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";
export const EditTodoForm = ({ todo }) => {
  const [value, setValue] = useState(todo.data);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo([todo.id, value]));
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-edit-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Save Task
      </button>
    </form>
  );
};
