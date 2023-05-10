const todos = (state = [], action) => {
  switch (action.type) {
    case "AddTodo":
      return [
        ...state,
        {
          id: action.id,
          complete: action.complete,
          text: action.text,
        },
      ];
    case "ToggleTodo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
      );
    default:
      return state;
  }
};
export default todos;
