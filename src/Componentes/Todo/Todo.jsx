import React from "react";

const Todo = ({ todo, toggleTodo, apagarTodo }) => {
  return (
    <div className={`content ${todo.completed ? "completed" : ""}`}>
      <p>
        {todo.title}
      </p>
      <p>
        ({todo.category})
      </p>
      <p>
        {todo.completed ? "Completado" : "Não Completado"}
      </p>
      <div className="actions">
        <button className="completar" onClick={() => toggleTodo(todo.id)}>
          Completar
        </button>
        <button className="apagar" onClick={() => apagarTodo(todo.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Todo;
