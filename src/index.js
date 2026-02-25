/**
 * =====================================================
 * index.js
 * -----------------------------------------------------
 * Application entry point
 * Wraps App with TaskProvider
 * =====================================================
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import { TaskProvider } from './context/TaskContext'
// import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)