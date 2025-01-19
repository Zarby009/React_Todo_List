import React from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [customCategory, setCustomCategory] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const finalCategory = category === "Custom" ? customCategory : category;
    if (text && finalCategory && finalCategory !== "Select") {
      addTodo(text, finalCategory);
      setText("");
      setCategory("");
      setCustomCategory("");
    } else {
      alert("Por favor, preencha todos os campos");
    }
  };

  return (
    <div className="todo-form">
      <h2>Criar uma Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar tarefa"
          value={text}
          onChange={event => setText(event.target.value)}
        />
        <select
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          <option value="Select">Selecionar Categoria</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Custom">Outra (Especificar abaixo)</option>
        </select>
        {category === "Custom" &&
          <input
            type="text"
            placeholder="Especificar categoria"
            value={customCategory}
            onChange={event => setCustomCategory(event.target.value)}
          />}
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TodoForm;
