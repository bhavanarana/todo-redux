import { AddTodo } from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import { List } from "./List";
import { EditTodoForm } from "./EditList";
import { useSelector } from "react-redux";
uuidv4();
export const TodoApp = () => {
  const todoList = useSelector((state) => state.todoReducers.list);
  return (
    <div className="TodoWrapper">
      <h1>Task Manager</h1>
      <AddTodo />
      {todoList.map((todo) =>
        todo.isEditing ? <EditTodoForm todo={todo} /> : <List todo={todo} />
      )}
    </div>
  );
};
