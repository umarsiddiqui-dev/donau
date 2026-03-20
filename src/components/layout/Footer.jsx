import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-x-24 mb-20">
        <div className="max-w-[280px]">
          <Link to="/" className="mb-6 block">
            <img src={logo} alt="Donau Logo" className="h-8 w-auto" />
          </Link>
          <p className="mt-4 text-[14px] text-slate-500 leading-relaxed">
            AI-powered platform connecting brands<br />
            with manufacturers
          </p>
        </div>
        <div className="md:pl-20">
          <h5 className="text-dark-900 font-bold mb-7 text-sm tracking-tight">Platform</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/" className="hover:text-primary-600 transition">Home</Link></li>
            <li><Link to="/brands" className="hover:text-primary-600 transition">Brands</Link></li>
            <li><Link to="/manufacturers" className="hover:text-primary-600 transition">Manufacturers</Link></li>
          </ul>
        </div>
        <div className="md:pl-20">
          <h5 className="text-dark-900 font-bold mb-7 text-sm tracking-tight">Company</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><Link to="/contact" className="hover:text-primary-600 transition">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary-600 transition">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="hover:text-primary-600 transition">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-dark-900 font-bold mb-5 text-2xl tracking-tight">Contact</h5>
          <p className="text-lg text-slate-500 mb-8 font-medium">info@donauai.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-dark-900 hover:text-primary-600 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 12V24h-5V12H7V8h2V5c0-3 2-5 6-5 1.5 0 2.5.1 3 .2v3.8h-2.3c-1.4 0-1.7.7-1.7 1.7V8h4l-.5 4h-3.5z" />
              </svg>
            </a>
            <a href="#" className="text-dark-900 hover:text-primary-600 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-dark-900 hover:text-primary-600 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-50 pt-10 flex flex-wrap justify-between items-center text-[13px] text-gray-400 font-medium">
        <p>&copy; 2026 DonauApp</p>
        <div className="flex items-center gap-2 text-gray-400">
          <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span className="mt-0.5">English</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
