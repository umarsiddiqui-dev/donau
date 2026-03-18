import React from 'react';
import { useModal } from '../../context/ModalContext';

const SignupModal = () => {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== 'signup') return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" 
        onClick={closeModal}
      ></div>
      <div className="relative bg-white rounded-[2rem] p-8 w-full max-w-md mx-4 shadow-2xl z-10 text-center">
        <button 
          onClick={closeModal} 
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h2 className="text-xl font-extrabold text-dark-900 mb-3">Join Donau</h2>
        <p className="text-gray-500 mb-6 text-sm font-medium">Access structured European demand today.</p>
        <form 
          onSubmit={(e) => { e.preventDefault(); closeModal(); }} 
          className="space-y-3"
        >
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-[13px]"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-[13px]"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-[13px]"
          />
          <button className="w-full bg-primary-600 text-white font-bold py-3 rounded-xl transition hover:bg-primary-700 shadow-lg shadow-primary-200 text-[13px] mt-3">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
