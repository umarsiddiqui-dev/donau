import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useModal } from '../context/ModalContext';
import BriefCard from '../components/briefs/BriefCard';
import TrustBar from '../components/layout/TrustBar';

const Manufacturers = () => {
  const addToRefs = useIntersectionObserver();
  const { openModal } = useModal();

  const briefs = [
    {
      title: "Premium Vitamin D3 Supplement",
      company: "Evergreenapparel.co",
      status: "Invited",
      statusColor: "text-[#6366F1]",
      statusBg: "bg-[#EEF2FF]",
      category: "Dietry Supplements",
      budget: "€1000 - €100000",
      units: "400 units",
      deadline: "2026-04-15"
    },
    {
      title: "Organic Pea Protein Powder",
      company: "HealthyFoods.co",
      status: "In Discussion",
      statusColor: "text-[#3F8AE2]",
      statusBg: "bg-[#F0F9FF]",
      category: "Healthy Foods",
      budget: "€12000 - €25000",
      units: "2,000 Units",
      deadline: "2026-03-28"
    },
    {
      title: "Recycled PET Bottle 500ml",
      company: "EcoPack.co",
      status: "Completed",
      statusColor: "text-[#22C55E]",
      statusBg: "bg-[#F0FDF4]",
      category: "Packaging",
      budget: "€45000 - €60000",
      units: "50,000 units",
      deadline: "2026-02-15"
    },
    {
      title: "Marine Collagen Peptides",
      company: "CareSolutions.co",
      status: "Proposal Submitted",
      statusColor: "text-[#0891B2]",
      statusBg: "bg-[#ECFEFF]",
      category: "Personal Care",
      budget: "€8000 - €15000",
      units: "1,200 units",
      deadline: "2026-03-05"
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg -z-10"></div>
        {/* Data Dots */}
        <div className="data-dot" style={{ top: '25%', left: '8%' }}></div>
        <div className="data-dot" style={{ top: '45%', left: '82%' }}></div>
        <div className="data-dot" style={{ top: '75%', left: '12%' }}></div>
        <div className="data-dot" style={{ top: '35%', left: '58%' }}></div>
        <div className="data-dot" style={{ top: '85%', left: '72%' }}></div>
        
        <div className="max-w-4xl mx-auto text-center fade-up" ref={addToRefs}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold leading-tight tracking-tight text-dark-900">
            Access structured European<br className="hidden md:block" />product demand.
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            Receive verified briefs. Submit proposals. Grow your production pipeline.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
            <button 
              onClick={() => openModal('signup')} 
              className="btn-primary w-full sm:w-auto bg-[#3F8AE2] text-white font-semibold px-7 py-3 rounded-lg text-sm shadow-lg shadow-blue-100"
            >
              Join as a Manufacturer
            </button>
            <button 
              onClick={() => document.getElementById('briefs').scrollIntoView({ behavior: 'smooth' })} 
              className="btn-outline w-full sm:w-auto border border-gray-200 bg-white text-gray-700 font-semibold px-7 py-3 rounded-lg text-sm"
            >
              Explore Briefs
            </button>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* LIVE BRIEFS SECTION */}
      <section id="briefs" className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-up" ref={addToRefs}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">Explore Product Briefs</h2>
            <p className="mt-4 text-gray-500 text-lg">Verified manufacturing opportunities currently live on the Donau platform.</p>
          </div>

          <div className="space-y-6 fade-up" ref={addToRefs}>
            {briefs.map((brief, index) => (
              <BriefCard key={index} {...brief} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howItWorks" className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16 fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 leading-tight">How manufacturers grow</h2>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 fade-up relative" ref={addToRefs}>
          <div className="absolute top-8 left-[16.6%] right-[16.6%] h-px border-t border-dashed border-primary-200 hidden md:block z-0 transform translate-y-[-50%]"></div>
          
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#3F8AE2] flex items-center justify-center transition shadow-lg shadow-blue-100">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 1</p>
            <h4 className="font-bold text-dark-900 mb-2">Verification</h4>
            <p className="text-gray-500 text-sm">Your certificates and capabilities are verified and visible to brands.</p>
          </div>
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#3F8AE2] flex items-center justify-center transition shadow-lg shadow-blue-100">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 2</p>
            <h4 className="font-bold text-dark-900 mb-2">Structured Briefs</h4>
            <p className="text-gray-500 text-sm">No vague requests. Every brief comes with clear specifications.</p>
          </div>
          <div className="text-center group relative z-10 transition hover:scale-105 duration-300">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#3F8AE2] flex items-center justify-center transition shadow-lg shadow-blue-100">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <p className="text-primary-600 text-[11px] font-bold mb-1 uppercase tracking-widest">Step 3</p>
            <h4 className="font-bold text-dark-900 mb-2">Direct Proposals</h4>
            <p className="text-gray-500 text-sm">Submit proposals directly. No intermediaries, no hidden fees.</p>
          </div>
        </div>
      </section>

      {/* READY TO LAUNCH */}
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center fade-up" ref={addToRefs}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-900 leading-tight">Ready to launch your business?</h2>
          <p className="mt-6 text-gray-500 text-lg max-w-xl mx-auto">The manufacturing infrastructure layer for European commerce.</p>
          <div className="mt-10 px-6 sm:px-0">
            <button 
              onClick={() => openModal('signup')} 
              className="btn-primary w-full sm:w-auto bg-[#3F8AE2] text-white font-bold px-10 py-4 rounded-xl shadow-xl shadow-blue-100 text-sm"
            >
              Join as a Manufacturer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturers;

