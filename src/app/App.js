import React from 'react'
import { useTasks } from '../context/TaskContext'
import TaskForm from '../components/TaskForm'

export default function App() {
  const { state } = useTasks()

  return (
    <div className="app-container">
      <h1>To-Do App</h1>

      <TaskForm />

      <p>Total Tasks: {state.tasks.length}</p>
    </div>
  )
}