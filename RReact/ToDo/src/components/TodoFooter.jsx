import React from 'react'

export default function TodoFooter({todos, setTodos, handleClear}) {
  const completed = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className='bg-red-500 flex gap-2'>
      <span>{completed}/{todos.length}</span>
      <span onClick={handleClear}>Clear Completed</span>
    </div>
  )
}
