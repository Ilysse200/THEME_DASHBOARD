import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard_Layout from './Dashboard/Dashboard_Layout'
import Dashboard_View from './Dashboard/Dashboard_View'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Dashboard_Layout />} >
        <Route path="/dashboard" index element={<Dashboard_View />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
