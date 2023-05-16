import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, handleChecked, handleDel}) {
  return (
    <div className=''>
      {todos.map((todo) => {
        return(
          <TodoItem key={todo?.id} todo={todo} handleChecked={handleChecked} handleDel={handleDel}/>
        )
      })}
    </div>
  )
}
