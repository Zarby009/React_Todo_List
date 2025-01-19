import React from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [otherCategory, setOtherCategory] = React.useState("");
  const handleSubmit = event => {
    event.preventDefault();
    const finalCat = category === "Outro" ? otherCategory : category;
    if (text && finalCat && finalCat !== "Select") {
      addTodo(text, finalCat);
      setText("");
      setCategory("");
    } else {
      alert("Porfavor, preencha todos os campos");
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
          <option value="Outro">Outra (Especificar abaixo)</option>
        </select>
        {category === "Outro" &&
          <input
            type="text"
            placeholder="Especificar Categoria"
            value={otherCategory}
            onChange={event => setOtherCategory(event.target.value)}
          />}
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default TodoForm;
