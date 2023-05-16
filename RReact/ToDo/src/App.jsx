import React, { useState } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoFooter from './components/TodoFooter'

export default function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([
    {
      id: Math.random()*100,
      text: "hello",
      isCompleted: false
    },
    {
      id: Math.random()*100,
      text: "world",
      isCompleted: false
    },
    {
      id: Math.random()*100,
      text: "JsReact",
      isCompleted: false
    },
  ]) 

  const handleCreate = (e) => {
    e.preventDefault()
    setTodos ([
      ...todos,
       {
        id: Math.random()*100,
        text: input,
        isCompleted: false
       } 
    ])
    setInput("")
  }

  const handleDel = (item) =>
  setTodos(todos.filter((todo) => todo?.id !== item));

  const handleChecked = (newTodo) => {
  setTodos(todos.map((todo) => (todo?.id === newTodo?.id ? newTodo : todo)));
};

  const handleClear = () => {
  setTodos(todos.filter((todo) => !todo.isCompleted));
};

  return (
    <div className='w-[220px]'>
      <TodoForm input={input} setInput={setInput} handleCreate={handleCreate}/>
      <TodoList todos={todos} handleChecked={handleChecked} handleDel={handleDel}/>
      <TodoFooter todos={todos} setTodos={setTodos} handleClear={handleClear}/>
    </div>
  )
}
