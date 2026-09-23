import React from 'react'

import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Editprofile from './pages/Editprofile'
import Adminpage from './pages/Adminpage'
import Adminlogin from './pages/Adminlogin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/editprofile/:id" element={<Editprofile />} />
      <Route path='/adminDashboard' element={<Adminpage/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>
    </Routes>
  )
}

export default App