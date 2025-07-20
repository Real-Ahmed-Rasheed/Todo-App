import { createContext, useState } from 'react';
export const MyContext = createContext();
import { v4 as uuidv4 } from 'uuid'



export const MyContextProvider = ({ children }) => {

  const [Todo, setTodo] = useState('');
  const [allTodos, setallTodos] = useState([]);


  function saveTodo(todo) {
    if (todo?.length < 1) { return }
    const newTodo = {
      id: uuidv4(),
      text: Todo,
      completed: false,
    };

    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

    existingTodos.push(newTodo);

    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }


  function updateTodo(id, todoText) {
    if (todoText?.length < 1) { return }
    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = existingTodos.map(todo =>
      todo.id === id ? { ...todo, text: todoText } : todo
    );

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setallTodos(updatedTodos);
  }

  function getAllTodos() {
    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setallTodos(existingTodos);
  }
  function deleteTodo(id) {
    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

    const updatedTodos = existingTodos.filter(todo => todo.id !== id);

    localStorage.setItem('todos', JSON.stringify(updatedTodos));

    setallTodos(updatedTodos);
  }

  return (
    <MyContext.Provider value={{ Todo, setTodo, saveTodo, getAllTodos, allTodos, updateTodo, deleteTodo }}>
      {children}
    </MyContext.Provider>
  );
};