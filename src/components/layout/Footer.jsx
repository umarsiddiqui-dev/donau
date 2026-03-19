import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 pt-16 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <Link to="/" className="mb-4 block">
            <img src={logo} alt="Donau Logo" className="h-8 w-auto" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed">AI-powered platform connecting brands with manufacturers.</p>
        </div>
        <div>
          <h5 className="text-dark-900 font-semibold mb-4 text-sm">Platform</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary-600 transition">Home</Link></li>
            <li><Link to="/brands" className="hover:text-primary-600 transition">Brands</Link></li>
            <li><Link to="/manufacturers" className="hover:text-primary-600 transition">Manufacturers</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-dark-900 font-semibold mb-4 text-sm">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary-600 transition">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary-600 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary-600 transition">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-dark-900 font-semibold mb-4 text-sm">Contact</h5>
          <p className="text-sm mb-4">info@donauai.com</p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#EAEEF3] hover:bg-[#DDE3EA] text-[#1E293B] flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10V8a1 1 0 0 1 1-1h1V4h-2a4 4 0 0 0-4 4v2H8v3h2v10h4V13h2l1-3h-3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EAEEF3] hover:bg-[#DDE3EA] text-[#1E293B] flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#EAEEF3] hover:bg-[#DDE3EA] text-[#1E293B] flex items-center justify-center transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-100 pt-6 flex flex-wrap justify-between items-center text-xs">
        <p>&copy; 2026 DonauApp</p>
        <div className="flex items-center gap-1 text-gray-400 font-medium"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg> English</div>
      </div>
    </footer>
  );
};

export default Footer;
