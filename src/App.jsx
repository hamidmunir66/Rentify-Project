import { Route, Routes } from 'react-router-dom'

// Layouts
import UserLayout from './layout/UserLayout'

// User Pages
import UserHome from './pages/user/UserHome'

// Auth Pages
import AccountType from './pages/auth/AccountType'
import Login from './pages/auth/Login'
import MerchantSignup from './pages/auth/MerchantSignup'
import UserSignup from './pages/auth/UserSignup'
import About from './pages/static/About'

const App = () => {
  return (
    <div>
      <Routes>
        {/* ========== PUBLIC / AUTH ROUTES ========== */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/merchant" element={<MerchantSignup />} />

        {/* ========== USER LAYOUT ROUTES ========== */}

        <Route element={<UserLayout />}>
          <Route path="/" element={<UserHome />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
