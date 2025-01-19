import { useState } from "react";
import Todo from "./Componentes/Todo/Todo";
import TodoForm from "./Componentes/Todo/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      category: "Frontend",
      completed: false
    },
    {
      id: 2,
      title: "Learn Node",
      category: "Backend",
      completed: false
    },
    {
      id: 3,
      title: "Learn Express",
      category: "Backend",
      completed: false
    }
  ]);

  const toggleTodo = id => {
    setTodos(
      todos.map(
        todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const apagarTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const addTodo = (title, category) => {
    const newTodo = {
      id: todos.length + 2,
      title,
      category,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map(todo =>
          <div key={todo.id}>
            <Todo todo={todo} toggleTodo={toggleTodo} apagarTodo={apagarTodo} />
          </div>
        )}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
export default App;
