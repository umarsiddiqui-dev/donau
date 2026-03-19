import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingLayout from './components/layout/LandingLayout';
import useLenis from './hooks/useLenis';

// Landing Pages
import Home from './pages/Home';
import Brands from './pages/Brands';
import BrandOne from './pages/BrandOne';
import Manufacturers from './pages/Manufacturers';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Auth Pages
import SignIn from './pages/app/SignIn';
import SignUp from './pages/app/SignUp';

// Dashboard Pages
import Dashboard from './pages/app/Dashboard';
import Briefs from './pages/app/Briefs';
import BriefsInvited from './pages/app/BriefsInvited';
import BriefDetail from './pages/app/BriefDetail';
import CreateBriefManual from './pages/app/CreateBriefManual';
import CreateBriefAI from './pages/app/CreateBriefAI';
import Messages from './pages/app/Messages';
import Settings from './pages/app/Settings';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Landing Pages */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands-1" element={<BrandOne />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/briefs" element={<ProtectedRoute><Briefs /></ProtectedRoute>} />
        <Route path="/briefs-invited" element={<ProtectedRoute><BriefsInvited /></ProtectedRoute>} />
        <Route path="/brief-detail" element={<ProtectedRoute><BriefDetail /></ProtectedRoute>} />
        <Route path="/create-brief-manual" element={<ProtectedRoute><CreateBriefManual /></ProtectedRoute>} />
        <Route path="/create-brief-ai" element={<ProtectedRoute><CreateBriefAI /></ProtectedRoute>} />
        <Route path="/messages" element={<ProtectedRoute><Messages /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
