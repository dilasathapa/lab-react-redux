import React from 'react'
import './App.css'
import Counter from './Component/LikeCounter.jsx'
import reducer from './Component/Reducer.jsx'
import { legacy_createStore as createStore } from "redux";


function App() {

  // let store = createStore(reducer)
  return (
    <>
      <div>
        <Counter />
      </div>
    </>
  )
}

export default App
