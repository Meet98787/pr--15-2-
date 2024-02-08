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
import Header from './Components/Header'
import CarListing from './Components/CarListing'
import Carbook from './Components/Carbook'
import Booking from './Components/admin/Booking'
import Menagecontect from './Components/admin/Menagecontect'
import Contectlist from './Components/admin/Contectlist'



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
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login logIn={logIn} setLogIn={setLogIn} />} />
          <Route path='/signup' element={<Register logIn={logIn} setLogIn={setLogIn} />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/addbrand' element={<AddBrand />} />
          <Route path='/carlist' element={<CarListing />} />
          <Route path='/addvehicles' element={<Addvehicles/>} />
          <Route path='/bookcar' element={<Carbook/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/menagecontect' element={<Menagecontect/>} />
          <Route path='/contectlist' element={<Contectlist/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App