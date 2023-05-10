let nextTodoId = 0;

export const addTodo = (text) => ({
  type: "AddTodo",
  id: nextTodoId++,
  complete: false,
  text,
});

export const toggleTodo = (id) => ({
  type: "ToggleTodo",
  id,
});

export const filter = (filter) => ({
  type: "FilterTodo",
  filter,
});

export const typeFilter = {
  ShowCompleteTask: "ShowCompleteTask",
  ShowActiveTask: "ShowActiveTask",
  ShowAllTask: "ShowAllTask",
};
