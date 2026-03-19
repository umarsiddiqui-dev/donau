import React from 'react';
import { useModal } from '../../context/ModalContext';

const LoginModal = () => {
  const { activeModal, closeModal, openModal } = useModal();

  if (activeModal !== 'login') return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" 
        onClick={closeModal}
      ></div>
      <div className="relative bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-10 w-full max-w-sm md:max-w-md mx-4 shadow-2xl z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-900 mb-3">Create an account to continue</h2>
        <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed max-w-[340px] mx-auto">
          Your progress is saved. Create an account to chat, view full details, and move forward.
        </p>
        
        <div className="space-y-4">
          <button 
            onClick={() => { closeModal(); openModal('signup'); }} 
            className="w-full bg-[#3F8AE2] text-white font-bold py-4 rounded-xl transition hover:bg-[#3577C8] shadow-lg shadow-blue-100 text-sm"
          >
            Create Account
          </button>
          <button 
            onClick={closeModal} 
            className="w-full text-gray-500 font-bold py-2 text-xs hover:text-dark-900 transition underline underline-offset-4"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
