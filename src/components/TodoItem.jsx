import React from 'react'

const TodoItem = ({id,title,completed,toggleTodo,deleteTodo}) => {
  return (
    <div className='task'>
      <li>
          <label className='task-label'>
          <input type="checkbox" className='task-title' checked={completed}
              onChange={event => toggleTodo(id, event.target.checked)}
              />
          {title}
          </label>
          &nbsp;
      </li>
      <button
          onClick={()=>deleteTodo(id)}
          className='btn-delete'>Delete
      </button>
    </div>
  )
}

export default TodoItem