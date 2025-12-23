import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App
