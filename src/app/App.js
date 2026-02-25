import React from 'react'
import { useTasks } from '../context/TaskContext'

export default function App() {
  const { state } = useTasks()

  return (
    <div className="app-container">
      <h1>Tasks: {state.tasks.length}</h1>
    </div>
  )
}