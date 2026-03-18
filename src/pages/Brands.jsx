import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useModal } from '../context/ModalContext';
import TrustBar from '../components/layout/TrustBar';

const Brands = () => {
  const addToRefs = useIntersectionObserver();
  const { openModal } = useModal();

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 grid-bg -z-10"></div>
        {/* Data Dots */}
        <div className="data-dot" style={{ top: '20%', left: '10%' }}></div>
        <div className="data-dot" style={{ top: '40%', left: '85%' }}></div>
        <div className="data-dot" style={{ top: '70%', left: '15%' }}></div>
        <div className="data-dot" style={{ top: '30%', left: '60%' }}></div>
        <div className="data-dot" style={{ top: '80%', left: '75%' }}></div>
        
        <div className="max-w-4xl mx-auto text-center fade-up" ref={addToRefs}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-tight tracking-tight text-dark-900">
            Build products without<br className="hidden md:block" />managing supply chains.
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Define what you need. Receive verified offers. Launch faster.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
            <button 
              onClick={() => openModal('login')} 
              className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-semibold px-7 py-3 rounded-lg text-sm shadow-lg shadow-primary-200"
            >
              Create Product
            </button>
            <button 
              onClick={() => openModal('demo')} 
              className="btn-outline w-full sm:w-auto border border-gray-200 bg-white text-gray-700 font-semibold px-7 py-3 rounded-lg text-sm"
            >
              View Demo
            </button>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* AI ASSISTANT MOCKUP */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">See how briefs are structured</h2>
          <p className="mt-4 text-gray-500 text-lg">Define your product requirements clearly with AI assistance and get matched with the right manufacturers faster.</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 fade-up" ref={addToRefs}>
          {/* Header */}
          <div className="px-8 py-6 border-b border-gray-100 mb-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center relative w-9 h-9">
                <svg className="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 4L8.5 10.5L15 12L8.5 13.5L7 20L5.5 13.5L0 12L5.5 10.5L7 4Z"></path>
                  <path d="M17 3L17.6 5.8L20 6.2L17.6 6.6L17 9.4L16.4 6.6L14 6.2L16.4 5.8L17 3Z"></path>
                  <path d="M17 14L17.6 16.8L20 17.2L17.6 17.6L17 20.4L16.4 17.6L14 17.2L16.4 16.8L17 14Z"></path>
                </svg>
              </div>
              <span className="font-extrabold text-dark-900 tracking-tighter text-lg">Donau AI Assistant</span>
            </div>
          </div>
          
          {/* Chat Interface */}
          <div className="p-4 md:p-8 pt-4 space-y-8">
            <div className="max-h-[460px] overflow-y-auto pr-2 md:pr-4 custom-scrollbar space-y-8">
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-primary-500 text-white px-7 py-5 max-w-md rounded-2xl rounded-tr-none shadow-sm">
                  <p className="text-[14px] leading-relaxed font-semibold">Create a premium Vitamin D3 supplement for the European market. Capsules, bottle packaging, MOQ around 5,000 units.</p>
                </div>
              </div>
              
              {/* Assistant bubble */}
              <div className="flex justify-start">
                <div className="bg-[#EFF6FC] rounded-2xl rounded-tl-[4px] px-8 py-7 max-w-xl text-dark-800 border border-blue-50/50 shadow-sm">
                  <p className="text-[14px] mb-6 font-medium leading-relaxed">Sure. Here is a structured product brief based on your request.</p>
                  <div className="text-[14px] space-y-2.5 font-medium text-dark-900">
                    <p><span className="font-bold">Product:</span> Premium Vitamin D3 Supplement</p>
                    <p><span className="font-bold">Form:</span> Capsules</p>
                    <p><span className="font-bold">Packaging:</span> Bottle</p>
                    <p><span className="font-bold">MOQ:</span> 5,000 units</p>
                    <p><span className="font-bold">Target market:</span> European Union</p>
                    <p><span className="font-bold">Certifications required:</span> GMP / ISO compliant manufacturers</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input Bar */}
            <div className="pt-8">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <input type="text" placeholder="Type your response..." className="w-full pl-6 pr-6 py-5 bg-[#F8FAFC] border border-gray-100 rounded-xl outline-none transition-all duration-300 text-[14px] text-gray-400" />
                </div>
                <button className="w-14 h-14 bg-primary-500 rounded-xl flex items-center justify-center text-white hover:bg-primary-600 transition shadow-sm">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howItWorks" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900">How it works</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 fade-up relative" ref={addToRefs}>
          <div className="absolute top-8 left-[16.6%] right-[16.6%] h-px border-t border-dashed border-primary-200 hidden md:block z-0 transform translate-y-[-50%]"></div>
          
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-lg shadow-primary-200">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 1</p>
            <h4 className="font-bold text-dark-900 mb-2">Create Structured Brief</h4>
            <p className="text-gray-500 text-sm">Define product requirements with AI-assistance.</p>
          </div>
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-lg shadow-primary-200">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 2</p>
            <h4 className="font-bold text-dark-900 mb-2">Receive Verified Offers</h4>
            <p className="text-gray-500 text-sm">Matched manufacturers submit transparent proposals.</p>
          </div>
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-lg shadow-primary-200">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 3</p>
            <h4 className="font-bold text-dark-900 mb-2">Compare & Launch</h4>
            <p className="text-gray-500 text-sm">Evaluate side-by-side and move to production.</p>
          </div>
        </div>
      </section>

      {/* READY TO LAUNCH */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 leading-tight">Ready to launch your product?</h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">The manufacturing infrastructure layer for European commerce.</p>
          <div className="mt-10 px-6 sm:px-0">
            <button 
              onClick={() => openModal('login')} 
              className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-primary-200"
            >
              Create Product
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
