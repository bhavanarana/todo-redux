export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: data,
  };
};
export const deleteTodo = (data) => {
  return {
    type: "DELETE_TODO",
    payload: data,
  };
};
export const toggleComplete = (data) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: data,
  };
};
export const editTodo = (data) => {
  return {
    type: "EDIT_TODO",
    payload: data,
  };
};
export const toggleEdit = (data) => {
  return {
    type: "TOGGLE_EDIT",
    payload: data,
  };
};
