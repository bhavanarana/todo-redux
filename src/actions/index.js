export const addTodo = (id, data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: id,
      data: data,
    },
  };
};
export const deleteTodo = () => {
  return {
    type: "DELETE_TODO",
  };
};
export const toggleComplete = (data) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: data,
  };
};
export const editTodo = () => {
  return {
    type: "EDIT_TODO",
  };
};
