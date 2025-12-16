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
import ProductDetails from "./pages/user/ProductDetails";
import ChatPage from "./pages/chat/ChatPage";

const App = () => {
  return (
    <div>
      <Routes>
        {/* ========== PUBLIC / AUTH ROUTES ========== */}

        <Route path="/login" element={<Login />} />
        <Route path="/account-type" element={<AccountType />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/merchant" element={<MerchantSignup />} />

        {/* ========== USER LAYOUT ROUTES ========== */}

        <Route element={<UserLayout />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/market-place" element={<MarketplacePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/safety-tips" element={<SafetyTips />} />
          <Route path="/trust-safety" element={<TrustSafety />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
