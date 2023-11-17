import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleComplete, deleteTodo } from "../actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const List = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? "completed" : "incompleted"}`}
        onClick={(e) => {
          e.preventDefault();
          dispatch(toggleComplete(todo.id));
        }}
      >
        {todo.data}
      </p>
      <div>
        {/* <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(key)}
        /> */}
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </div>
  );
};
