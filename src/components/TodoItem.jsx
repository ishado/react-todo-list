import React from 'react'

const TodoItem = ({id,title,completed,toggleTodo,deleteTodo}) => {
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <li>
          <label className='task-label'>
          <input type="checkbox" className='task-title' checked={completed}
              onChange={event => toggleTodo(id, event.target.checked)}
              />
              <span>
                {title}
              </span>
          </label>
      </li>
      <button
          onClick={()=>deleteTodo(id)}
          className='btn-delete'>Delete
      </button>
    </div>
  )
}

export default TodoItem