import React, { useEffect, useState } from 'react';
import './styles.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos , setTodos] = useState(()=>{
    const storedTodos = localStorage.getItem('todos');
    if(storedTodos){
      return JSON.parse(storedTodos);
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])
  
  const addTodo = (title) => {
    setTodos((currentTodos) => [...currentTodos,
      { id: crypto.randomUUID(),
        title,
        completed: false
      }
    ])
  }
  const toggleTodo = (id,completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map(todo =>{
        if(todo.id === id){
          return {...todo, completed}
        } else {
          return todo
        }
      })
    })
  }
  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Todo Application</h1>
        <NewTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </>
  )
}

export default App;