import { Route, Routes } from "react-router-dom";

// Layouts
import UserLayout from "./layout/UserLayout";

// User Pages
import UserHome from "./pages/user/UserHome";

// Auth Pages
import About from "./pages/user/About";
import AccountType from "./pages/auth/AccountType";
import Login from "./pages/auth/Login";
import MerchantSignup from "./pages/auth/MerchantSignup";
import UserSignup from "./pages/auth/UserSignup";
import MarketplacePage from "./pages/user/MarketPlacePage";
import HowItWorks from "./pages/user/HowItWorks";
import SafetyTips from "./pages/user/SafetyTips";
import TrustSafety from "./pages/user/TrustSafety";

const App = () => {
  return (
    <div>
      <Routes>
        {/* ========== PUBLIC / AUTH ROUTES ========== */}
        <Route path="/about" element={<About />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/safetytips" element={<SafetyTips />} />
        <Route path="/trust&safety" element={<TrustSafety />} />
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
  );
};

export default App;
