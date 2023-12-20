import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [newItem, setNewItem] = useState("")
  const [todos , setTodos] = useState([])
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log('form submitted')
    setTodos((currentTodos)=>[...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false}])
    setNewItem("")
  }
  const toggleTodo = (id,completed) => {
    setTodos((currentTodos)=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){
          return {...todo, completed}
        } else {
          return todo
        }
      })
    })
  }
  const deleteTodo = (id) => {
    setTodos((currentTodos)=>{
      return currentTodos.filter(todo=>todo.id !== id)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}
        className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>Todo Application</label>
          <input
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            type="text"
            id='item'
          />
        </div>
        <button className="btn">add</button>
      </form>
      <h1 className='header'>Our Todo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos Founds"}
        {todos.map(todo=> <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed}
              onChange={event => toggleTodo(todo.id, event.target.checked)}
            />
            {todo.title}
          </label>
          &nbsp;
          <button className='btn btn-danger' onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </li>)}
      </ul>
    </>
  )
}

export default App;