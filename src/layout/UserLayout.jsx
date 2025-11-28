import React from 'react'
import Navbar from '../component/user/Navbar'
import Footer from '../component/common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout
