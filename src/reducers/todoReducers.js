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
      const dataId = action.payload;
      const newTodos = state.list.map((todo) =>
        todo.id === dataId ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        list: newTodos,
      };

    default:
      return state;
  }
};
export default todoReducers;
