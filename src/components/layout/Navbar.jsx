import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logo} alt="Donau Logo" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/brands" 
              className={({ isActive }) => 
                `nav-link text-sm font-medium transition tracking-wider ${isActive ? 'active text-primary-600' : 'text-gray-500 hover:text-dark-900'}`
              }
            >
              Brands
            </NavLink>
            <NavLink 
              to="/manufacturers" 
              className={({ isActive }) => 
                `nav-link text-sm font-medium transition tracking-wider ${isActive ? 'active text-primary-600' : 'text-gray-500 hover:text-dark-900'}`
              }
            >
              Manufacturers
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `nav-link text-sm font-medium transition tracking-wider ${isActive ? 'active text-primary-600' : 'text-gray-500 hover:text-dark-900'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => openModal('login')} 
            className="bg-[#3F8AE2] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#3577C8] transition shadow-sm"
          >
            Log In
          </button>
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobileMenu" 
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5`}
      >
        <NavLink 
          to="/brands" 
          onClick={toggleMobileMenu} 
          className={({ isActive }) => 
            `block text-base font-medium transition ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`
          }
        >
          Brands
        </NavLink>
        <NavLink 
          to="/manufacturers" 
          onClick={toggleMobileMenu} 
          className={({ isActive }) => 
            `block text-base font-medium transition ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`
          }
        >
          Manufacturers
        </NavLink>
        <NavLink 
          to="/contact" 
          onClick={toggleMobileMenu} 
          className={({ isActive }) => 
            `block text-base font-medium transition ${isActive ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
