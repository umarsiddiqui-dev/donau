import React from 'react';
import { useModal } from '../../context/ModalContext';

const DemoModal = () => {
  const { activeModal, closeModal, openModal } = useModal();

  if (activeModal !== 'demo') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="modal-overlay absolute inset-0 bg-black/50" 
        onClick={closeModal}
      ></div>
      <div className="modal-content relative bg-white rounded-2xl p-8 w-full max-w-lg mx-4 shadow-2xl z-10 text-center">
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Platform Demo</h2>
        <p className="text-gray-500 mb-6">See how Donau helps brands launch products faster with verified manufacturers across Europe.</p>
        <div className="bg-gray-100 rounded-xl p-8 mb-6">
          <p className="text-gray-400 text-sm">Interactive demo coming soon</p>
        </div>
        <button 
          onClick={() => { closeModal(); openModal('signup'); }} 
          className="btn-primary bg-[#3F8AE2] text-white font-semibold px-7 py-3 rounded-lg text-sm w-full"
        >
          Get Started Instead
        </button>
      </div>
    </div>
  );
};

export default DemoModal;
