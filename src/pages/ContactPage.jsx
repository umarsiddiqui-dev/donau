import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useModal } from '../context/ModalContext';

const ContactPage = () => {
  const addToRefs = useIntersectionObserver();
  const { openModal } = useModal();

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 -z-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-dark-900 mb-6 tracking-tight fade-up" ref={addToRefs}>
            Get in touch
          </h1>
          <p className="text-xl text-gray-500 font-medium mb-12 fade-up" style={{ transitionDelay: '100ms' }} ref={addToRefs}>
            For general inquiries.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} 
            className="space-y-6 fade-up" 
            style={{ transitionDelay: '200ms' }} 
            ref={addToRefs}
          >
            <div>
              <label className="block text-sm font-bold text-dark-900 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Enter name" 
                required 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark-900 mb-2">Company</label>
              <input 
                type="text" 
                placeholder="Enter company name" 
                required 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark-900 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter email" 
                required 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-gray-600" 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-dark-900 mb-2">Message</label>
              <textarea 
                rows="6" 
                placeholder="How can we help" 
                required 
                className="w-full px-5 py-4 border border-gray-200 rounded-xl bg-white outline-none focus:ring-2 focus:ring-primary-500 transition font-medium text-gray-600 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#3F8AE2] text-white font-bold py-5 rounded-2xl transition hover:bg-[#3577C8] shadow-xl shadow-blue-100 tracking-widest text-sm"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="grid md:grid-cols-2 gap-12 mt-20 fade-up" style={{ transitionDelay: '300ms' }} ref={addToRefs}>
            <div>
              <h4 className="text-sm font-bold text-dark-900 mb-3 tracking-wider">Email</h4>
              <p className="text-gray-600 font-medium">contact@donau.eu</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-dark-900 mb-3 tracking-wider">Phone Number</h4>
              <p className="text-gray-600 font-medium">+49 163 555 1584</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
