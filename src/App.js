import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import { app } from './Firebase/Firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Register from './Components/Register'
import Login from './Components/Login'
import Admin from './Components/admin/Admin'
import AddBrand from './Components/admin/AddBrand'
import Addvehicles from './Components/admin/Addvehicles'



function App() {
  const [logIn, setLogIn] = useState(null)

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {

        const uid = user.uid;
        setLogIn(uid)
        // ...
      } else {

        setLogIn(null)
      }
    });
  }, [])

  useEffect(() => {

  }, [logIn])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login logIn={logIn} setLogIn={setLogIn} />} />
          <Route path='/signup' element={<Register logIn={logIn} setLogIn={setLogIn} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/addbrand' element={<AddBrand />} />
          <Route path='/addvehicles' element={<Addvehicles/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App