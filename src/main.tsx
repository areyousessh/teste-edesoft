import React from 'react'
import ReactDOM from 'react-dom/client'
import {App}from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import usersReducer from './features/Users'

const store = configureStore({
  reducer: {
  users: usersReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
