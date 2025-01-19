# Git e GitHub: Subir o Código para o GitHub
```bash
echo "# React_Todo_List" >> README.md
git commit -m "first commit"
git branch -M main
git remote add origin <URL>
git push -u origin main
```

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



# Explicação Completa da Todo List em React

Este projeto é uma aplicação de lista de tarefas (Todo List) desenvolvida em React. Ele permite que o usuário adicione, visualize, marque como concluídas e exclua tarefas.

## Estrutura do Projeto

A aplicação é composta pelos seguintes arquivos principais:
1. **App.jsx**: Componente principal que gerencia o estado da aplicação e renderiza a lista de tarefas e o formulário.
2. **Todo.jsx**: Componente responsável por exibir cada tarefa individual e suas ações (completar/excluir).
3. **TodoForm.jsx**: Formulário para adicionar novas tarefas.

---

## **1. App.jsx**

### Importações
```javascript
import { useState } from "react";
import Todo from "./Componentes/Todo/Todo";
import TodoForm from "./Componentes/Todo/TodoForm";
import "./App.css";
```

