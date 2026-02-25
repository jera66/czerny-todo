/**
 * =====================================================
 * TaskContext.js
 * -----------------------------------------------------
 * Provides centralized global state using:
 * - React Context API
 * - useReducer for predictable state updates
 * =====================================================
 */

import React, { createContext, useReducer, useContext } from 'react'
import { taskReducer, initialState } from '../utils/taskHelpers'

/**
 * Create Context
 */
const TaskContext = createContext()

/**
 * TaskProvider
 * Wraps entire app to provide global state
 */
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  )
}

/**
 * Custom Hook
 * Cleaner way to consume context
 */
export function useTasks() {
  return useContext(TaskContext)
}