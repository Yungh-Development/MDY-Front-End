import { combineReducers } from "redux";
import todos from "./TodoReducer";
import filterTodo from "./FilterRecuder";

export default combineReducers({
  todos,
  filterTodo,
});
