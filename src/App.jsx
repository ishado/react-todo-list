import React from 'react';
import './styles.css';

const App = () => {
  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>Todo Application</label>
          <input
            type="text"
            id='item'
          />
        </div>
        <button className="btn">add</button>
      </form>
      <h1 className='header'>Our Todo List</h1>
      <ul className='list'>
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App;