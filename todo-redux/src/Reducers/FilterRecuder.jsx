const filterTodo = (state = "ShowAllTask", action) => {
  switch (action.type) {
    case "FilterTodo":
      return action.filter;
    default:
      return state;
  }
};

export default filterTodo;
