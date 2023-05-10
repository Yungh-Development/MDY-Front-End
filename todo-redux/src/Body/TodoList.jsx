import React from "react";
import Todo from "../Components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../Actions/TodoActions";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="py-8 text-center overflow-hidden">
      {todos && todos.length ? (
        todos.map((option) => (
          <Todo
            key={option.id}
            {...option}
            onClick={() => toggleTodo(option.id)}
          />
        ))
      ) : (
        <span className="font-semibold">No taks for Today! \o/</span>
      )}
    </ul>
  );
};

const filterTodos = (todo, filter) => {
  console.log(todo);
  switch (filter) {
    case "ShowCompleteTask":
      return todo.filter((data) => data.complete === true);
    case "ShowActiveTask":
      return todo.filter((data) => data.complete === false);
    default:
      return todo;
  }
};

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filterTodo),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
