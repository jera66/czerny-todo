/**
 * =====================================================
 * taskHelpers.js
 * -----------------------------------------------------
 * Contains:
 * - Initial application state
 * - Reducer logic for predictable state transitions
 * - Pure functions only (no side effects)
 * =====================================================
 */

/**
 * Initial Global State
 * Keeps task list and active filter
 */
export const initialState = {
  tasks: [],
  filter: 'ALL'
}

/**
 * Task Reducer
 * Centralized state transition logic
 * Ensures immutability
 */
export function taskReducer(state, action) {
  switch (action.type) {

    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(), // unique identifier
            text: action.payload,
            completed: false
          }
        ]
      }

    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state
  }
}