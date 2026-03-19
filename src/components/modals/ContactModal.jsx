import React from 'react';
import { useModal } from '../../context/ModalContext';

const ContactModal = () => {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== 'contact') return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="modal-overlay absolute inset-0 bg-black/50" 
        onClick={closeModal}
      ></div>
      <div className="modal-content relative bg-white rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl z-10">
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-500 mb-6">We'd love to hear from you</p>
        <form 
          onSubmit={(e) => { e.preventDefault(); closeModal(); }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            required 
            placeholder="Your name" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            required 
            placeholder="you@company.com" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            required 
            rows="4" 
            placeholder="How can we help?" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
          ></textarea>
          <button type="submit" className="btn-primary w-full bg-primary-600 text-white py-3 rounded-lg font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
