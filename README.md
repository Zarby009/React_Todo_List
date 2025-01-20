# Git e GitHub: Subir o Código para o GitHub
```bash
echo "# React_Todo_List" >> README.md
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <URL>
git push -u origin main
```


![](https://github.com/Zarby009/Geeks-for-Geeks/blob/main/TodoListGif.gif)


![](https://github.com/Zarby009/Geeks-for-Geeks/blob/main/TodoListGif2.gif)




# Instalação
### 1. Clone o Projeto
```bash
git clone https://github.com/Zarby009/React_Todo_List.git
(possívelmente teremos que entrar na pasta ==> cd React_Todo_List)
```
### 2. Instale as Dependências
```bash
npm install

```
#### 3. Rodar 
```bash
npm run dev
```



# Explicação do Código do Todo List em React

## Componentes e Funções Principais

### `useState`
O `useState` é um **Hook** do React usado para gerenciar o estado dentro de um componente funcional.  
No caso do Todo List, o `useState` é utilizado para armazenar a lista de tarefas (`todos`) e atualizá-la ao longo do uso da aplicação.

### `Todo`
O `Todo` é um componente funcional responsável por **exibir os detalhes de cada tarefa**.  
Ele recebe as seguintes **propriedades (props)**:  
- `todo`: Objeto representando a tarefa, com atributos como `id`, `title`, `category` e `completed`.
- `toggleTodo`: Função para marcar/desmarcar uma tarefa como concluída.
- `apagarTodo`: Função para remover a tarefa.

**Estrutura e Ações no Componente `Todo`:**
- Mostra o título e a categoria da tarefa.
- Indica se a tarefa foi completada ou não.
- Possui dois botões:
  - **"Completar"**: Alterna o estado de conclusão da tarefa (`toggleTodo`).
  - **"Apagar"**: Remove a tarefa da lista (`apagarTodo`).

---

### `TodoForm`
O `TodoForm` é um componente funcional usado para **adicionar novas tarefas**.  
Ele gerencia três estados locais:  
- **`text`**: O texto da tarefa.
- **`category`**: A categoria da tarefa (ex.: Frontend ou Backend).
- **`customCategory`**: Permite ao usuário especificar uma categoria personalizada caso selecione "Outra".

**Funcionamento do Formulário:**
1. O usuário insere o texto da tarefa.
2. Escolhe uma categoria em um menu suspenso. Se selecionar "Outra", pode especificar uma categoria personalizada.
3. Ao submeter o formulário, a função `addTodo` é chamada, adicionando a nova tarefa à lista principal.

---

### Relacionamento Entre os Componentes
1. **`App.jsx`:**  
   - Contém o estado principal da aplicação (`todos`), gerenciado com o `useState`.  
   - Passa as funções (`addTodo`, `toggleTodo`, `apagarTodo`) para os componentes filhos (`Todo` e `TodoForm`).

2. **`Todo`:**  
   - Exibe cada tarefa individualmente com opções de completar ou apagar.

3. **`TodoForm`:**  
   - Permite criar novas tarefas, que são adicionadas ao estado principal (`todos`) gerenciado em `App.jsx`.

---

## Resumo das Funções no `App.jsx`

- **`toggleTodo`:** Alterna o estado de conclusão de uma tarefa (de `false` para `true` ou vice-versa).
- **`apagarTodo`:** Remove uma tarefa específica da lista principal.
- **`addTodo`:** Adiciona uma nova tarefa à lista principal, incluindo título, categoria e estado de conclusão inicial (`false`).

---

## Fluxo de Uso

1. A lista inicial de tarefas é renderizada pelo componente `App` e exibida como uma lista de itens `Todo`.
2. O usuário pode:
   - Completar uma tarefa clicando no botão "Completar".
   - Apagar uma tarefa clicando no botão "x".
3. Para adicionar uma nova tarefa, o usuário usa o formulário fornecido no `TodoForm`, preenchendo o título e a categoria.









## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enderson-alves-6999262bb)

