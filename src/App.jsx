import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import Home from './components/Home'
import Form from './components/Form'

function App() {


  return (
    <>


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </>
  )
}

export default App
