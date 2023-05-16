import React from 'react'

export default function TodoItem({todo, handleChecked, handleDel}) {
  return (
    <div className='w-[100px] flex justify-between items-center'>
      <input type="checkbox" id={todo?.text} checked={todo?.isCompleted} onChange={(e) => handleChecked({...todo, isCompleted: e.target.checked})}/>
      <label className='text-xl'  htmlFor={todo?.text}>{todo.text}</label>
      <button className='text-[20px] text-red-400' onClick={() => handleDel(todo?.id)}>X</button>
    </div>
  )
}