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
    case "EDIT_TODO":
      const { editId, editData } = action.payload;
      const editedText = state.list.map((todo) =>
        todo.id === editId
          ? { ...todo, data: editData, isEditing: !todo.isEditing }
          : todo
      );
      return {
        ...state,
        list: editedText,
      };

    case "TOGGLE_EDIT":
      const editedId = action.payload;
      const editToggle = state.list.map((todo) =>
        todo.id === editedId ? { ...todo, isEditing: !todo.isEditing } : todo
      );
      console.log(editToggle);
      return {
        ...state,
        list: editToggle,
      };
    default:
      return state;
  }
};
export default todoReducers;
