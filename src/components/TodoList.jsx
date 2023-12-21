import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos,toggleTodo,deleteTodo}) => {
  return (
    <ul className='tasks'>
        {todos.length === 0 && "No Todo Founds"}
        {todos.map(todo => <TodoItem 
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            {...todo} key={todo.id}
            />)}
    </ul>
  )
}

export default TodoList