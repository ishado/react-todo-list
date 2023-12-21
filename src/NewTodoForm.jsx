import React, { useState } from 'react'

const NewTodoForm = ({onSubmit}) => {
    const [newItem, setNewItem] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log('form submitted')
        onSubmit(newItem)
        setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit}>
        <div className='newtask'>
          <input
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            type="text"
            id='item'
            className='newtask-input'
          />
          <button className="btn-add">add</button>
        </div>
        <label htmlFor='item' className='subtitle'>Our Todo List</label>
      </form>
  )
}

export default NewTodoForm