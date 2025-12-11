import { Route, Routes } from 'react-router-dom'

// Layouts
import UserLayout from './layout/UserLayout'

// User Pages
import UserHome from './pages/user/UserHome'

// Auth Pages
import About from './pages/user/About'
import AccountType from './pages/auth/AccountType'
import Login from './pages/auth/Login'
import MerchantSignup from './pages/auth/MerchantSignup'
import UserSignup from './pages/auth/UserSignup'
import MarketplacePage from './pages/user/MarketPlacePage'

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
          <Route path="/marketplace" element={<MarketplacePage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
