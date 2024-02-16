import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>todos</h2>
      {todos.map((todo) => (
        <li className='bg-orange-400 w-[50rem] box-border items-center flex justify-between mb-1 list-none decoration-none p-2 px-4 rounded ' key={todo.id}>
          <h3>{todo.text}</h3>
          <button className='bg-red-400 ml-3 p-1 px-3 rounded ' onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
        </li>
      ))}
    </div>
  );
};

export default Todos;
