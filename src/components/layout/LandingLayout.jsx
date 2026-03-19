import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginModal from '../modals/LoginModal';
import SignupModal from '../modals/SignupModal';
import ContactModal from '../modals/ContactModal';
import DemoModal from '../modals/DemoModal';
import { ModalProvider } from '../../context/ModalContext';

export default function LandingLayout() {
  return (
    <ModalProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
        
        {/* Modals */}
        <LoginModal />
        <SignupModal />
        <ContactModal />
        <DemoModal />
      </div>
    </ModalProvider>
  );
}
