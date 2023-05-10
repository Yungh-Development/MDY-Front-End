import AddTodo from "./Body/AddTodo";
import TodoList from "./Body/TodoList";
import Buttons from "./Body/Buttons";
import "./App.css";

function App() {
  return (
    <div className="bg-[url('../public/imgs/background-image-todo-logo.jpg')] h-screen bg-no-repeat bg-center bg-fixed">
      <div className="flex justify-center pt-40">
        <div className="max-w-sm w-full max-h-[600px] shadow-lg bg-white p-8 rounded-xl opacity-90 overflow-auto">
          <AddTodo />
          <TodoList />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
