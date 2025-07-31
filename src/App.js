import React, {useState, useEffect} from 'react';
import ToDoForm from './component/ToDoForm';
import ToDoList from './component/ToDoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text, isCompleted: false}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My To Do List</h1>
      <ToDoForm addTodo={addTodo}/>
      <ToDoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>

  );

}

export default App;
