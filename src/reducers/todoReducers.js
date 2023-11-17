//hold current state and action
const initialData = {
  list: [],
};

const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          { id: id, data: data, completed: false, isEditing: false },
        ],
      };
    case "TOGGLE_COMPLETE":
      const statusId = action.payload;
      const newTodos = state.list.map((todo) =>
        todo.id === statusId ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        list: newTodos,
      };
    case "DELETE_TODO":
      const deleteId = action.payload;
      const filteredTodos = state.list.filter((todo) => todo.id !== deleteId);
      return {
        ...state,
        list: filteredTodos,
      };

    default:
      return state;
  }
};
export default todoReducers;
