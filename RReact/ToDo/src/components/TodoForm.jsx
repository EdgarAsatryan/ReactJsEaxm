import React from 'react'

export default function TodoForm({input, setInput, handleCreate}) {
  return (
    <form onSubmit={handleCreate}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <button type='submit'>Add</button>
    </form>
  )
}

