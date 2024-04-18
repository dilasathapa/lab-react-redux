import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import mystore from './store.js'
import Navbar from './Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './AllRoutes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mystore}>

      <App />

    </Provider>
  </React.StrictMode>,
)
