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
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-dark-900 flex items-center justify-center transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.601 16.748l.407-2.653h-2.544V12.37c0-.724.355-1.43 1.492-1.43h1.154V8.678a14.07 14.07 0 00-2.048-.178c-2.088 0-3.45 1.266-3.45 3.553v1.944H7.38v2.653h2.234V24h2.753v-7.252h2.234z" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-dark-900 flex items-center justify-center transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-dark-900 flex items-center justify-center transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v13.5h5V8zm7.982 0h-4.968v13.5h4.969v-7.399c0-3.907 5.063-4.238 5.063 0v7.399h4.983v-9.398c0-7.307-8.275-7.017-10.047-3.758v-2.843z" />
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
