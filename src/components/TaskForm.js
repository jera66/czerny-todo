/**
 * =====================================================
 * TaskForm.js
 * -----------------------------------------------------
 * Controlled input form for adding new tasks.
 * Responsibilities:
 * - Manage input state
 * - Validate user input
 * - Dispatch ADD_TASK action
 * =====================================================
 */

import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

export default function TaskForm() {
  const { dispatch } = useTasks()

  // Controlled input state
  const [taskText, setTaskText] = useState('')

  /**
   * Handle Form Submission
   * Prevent default reload
   * Validate input
   * Dispatch action
   */
  function handleSubmit(e) {
    e.preventDefault()

    const trimmed = taskText.trim()

    // Prevent empty or whitespace-only tasks
    if (!trimmed) return

    dispatch({
      type: 'ADD_TASK',
      payload: trimmed
    })

    // Clear input after submission
    setTaskText('')
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        aria-label="Task input"
        className="task-input"
      />
      <button type="submit" className="task-button">
        Add
      </button>
    </form>
  )
}