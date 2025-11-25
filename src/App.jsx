import React from "react";
import { Route, Routes } from "react-router-dom";

// Layouts
import UserLayout from './Component/user/Layout/UserLayout'

// User Pages
import UserHome from './Component/user/UserHome'

// Auth Pages
import Login from './Component/auth/Login'
import ChooseSignup from './Component/auth/ChooseSignup'
import UserSignup from './Component/auth/UserSignup'
import MerchantSignup from './Component/auth/MerchantSignup'
import About from "./pages/About";




const App = () => {
  return (
    <div>

      <Routes>

        {/* ========== PUBLIC / AUTH ROUTES ========== */}
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ChooseSignup' element={<ChooseSignup />} />
        <Route path='/signup/user' element={<UserSignup />} />
        <Route path='/signup/merchant' element={<MerchantSignup />} />

        {/* ========== USER LAYOUT ROUTES ========== */}

        <Route element={<UserLayout />}>
          <Route path='/' element={<UserHome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
