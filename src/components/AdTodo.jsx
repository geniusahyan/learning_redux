import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AdTodo = () => {

  const [input, setinput] = useState('');
  const dispatch = useDispatch();
  const inputChangeHandle = (e) => {
    setinput(e.target.value)
  }

  const addTodoOnSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTodo(input))
    setinput('')
  }


  return (
    <div className="w-full max-w-[30rem] ">
      <form onSubmit={addTodoOnSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2>Todos</h2>
        <div className="flex bg-[#fff] justify-around p-1 ">
          <input value={input} onChange={inputChangeHandle}  className=" border bg-transparent p-2 px-4 w-[20rem] rounded" type="text" placeholder="todo" />
          <button className="bg-blue-400 p-1 px-3 rounded " type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default AdTodo