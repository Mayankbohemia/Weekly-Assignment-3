import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className="p-5">
      <div>
        <h1>Todo App</h1>
        <TodoInput/>
      <TodoList/>
      </div>
      
    </div>
  );
}

export default App;