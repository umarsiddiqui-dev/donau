import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useCountUp from '../hooks/useCountUp';
import { useModal } from '../context/ModalContext';

// Assets
import landingImg from '../assets/landing_img.png';
import servicesBrands from '../assets/services_brands.png';
import servicesManufacturers from '../assets/services_manufacturers.png';
import avatarRobert from '../assets/avatar_robert.png';

const StatCounter = ({ target, label, suffix = '+' }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const count = useCountUp(target, 2000, isVisible);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="stat-number text-4xl md:text-5xl font-extrabold">{count}{suffix}</div>
      <p className="text-gray-500 text-sm mt-2">{label}</p>
    </div>
  );
};

const Home = () => {
  const addToRefs = useIntersectionObserver();
  const { openModal } = useModal();

  return (
    <div>
      {/* HERO */}
      <section className="pt-28 md:pt-32 pb-12 md:pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto fade-up" ref={addToRefs}>
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-dark-900">
            The Infrastructure Layer for<br className="hidden md:block" />European Contract Manufacturing
          </h1>
          <p className="mt-5 text-gray-500 text-lg max-w-2xl mx-auto">
            Launch products faster with structured briefs, verified manufacturers, and transparent proposals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
            <button onClick={() => openModal('login')} className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-semibold px-7 py-3 rounded-lg text-sm">
              Create Product
            </button>
            <button 
              onClick={() => document.getElementById('manufacturers').scrollIntoView({ behavior: 'smooth' })} 
              className="btn-outline w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-7 py-3 rounded-lg text-sm"
            >
              Join as a Manufacturer
            </button>
          </div>
        </div>
        
        {/* App preview */}
        <div className="max-w-5xl mx-auto mt-14 relative fade-up" ref={addToRefs}>
          <img src={landingImg} alt="Donau platform preview" className="w-full float-anim" />
          {/* AI chat bubble overlay */}
          <div className="chat-bubble absolute top-1/3 right-0 translate-x-4 bg-white rounded-xl shadow-xl p-4 max-w-[220px] hidden lg:block">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z" />
                </svg>
              </div>
              <span className="font-semibold text-xs text-dark-900">Donau AI Assistant</span>
              <button className="ml-auto text-gray-400 text-xs">✕</button>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              I'm here to help you analyze best briefs, compare proposals and answer questions about it.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-white border-t border-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-up" ref={addToRefs}>
          <StatCounter target={240} label="Verified Manufacturers" />
          <StatCounter target={15} label="European Countries" />
          <StatCounter target={48} label="Average Response Time" suffix="h" />
          <StatCounter target={12} label="Product Categories" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center fade-up" ref={addToRefs}>
          <p className="text-primary-600 font-semibold text-sm mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">What our platform do</h2>
        </div>
        
        {/* For Brands */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12 items-center fade-up" ref={addToRefs}>
          <div>
            <p className="text-primary-600 font-semibold text-sm mb-3">For Brands</p>
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 leading-snug">
              Build products without<br className="hidden md:block" />managing supply chains.
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>AI-assisted structured briefs</li>
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Verified manufacturing partners</li>
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Transparent proposals</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => openModal('login')} className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm">
                Create Product
              </button>
              <button onClick={() => openModal('demo')} className="btn-outline w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg text-sm">
                View Demo
              </button>
            </div>
          </div>
          <div><img src={servicesBrands} alt="Brand dashboard" className="w-full" /></div>
        </div>
        
        {/* For Manufacturers */}
        <div id="manufacturers" className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12 items-center fade-up" ref={addToRefs}>
          <div className="order-2 md:order-1"><img src={servicesManufacturers} alt="Manufacturer portal" className="w-full" /></div>
          <div className="order-1 md:order-2">
            <p className="text-primary-600 font-semibold text-sm mb-3">For Manufacturers</p>
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 leading-snug">
              Access structured European<br className="hidden md:block" />product demand.
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Qualified product briefs</li>
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Direct brand communication</li>
              <li className="flex items-center gap-3 text-gray-600"><span className="w-2 h-2 rounded-full bg-primary-500"></span>Secure proposal submission</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button onClick={() => openModal('signup')} className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm">
                Join as a Manufacturer
              </button>
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} 
                className="btn-outline w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-6 py-2.5 rounded-lg text-sm"
              >
                Explore Briefs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="howItWorks" className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center fade-up" ref={addToRefs}>
          <p className="text-primary-600 font-semibold text-sm mb-2">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">How brands launch a product</h2>
        </div>
        <div className="max-w-5xl mx-auto mt-14 grid md:grid-cols-3 gap-10 fade-up relative" ref={addToRefs}>
          <div className="absolute top-8 left-[16.6%] right-[16.6%] h-px border-t border-dashed border-primary-200 hidden md:block z-0 transform translate-y-[-50%]"></div>
          
          <div className="text-center group relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <p className="text-primary-600 text-[10px] font-bold mb-1 uppercase tracking-widest">Step 1</p>
            <h4 className="font-bold text-dark-900 mb-2">Create Structured Brief</h4>
            <p className="text-gray-500 text-sm">Define product requirements with AI-assistance.</p>
          </div>
          <div className="text-center group relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path></svg>
            </div>
            <p className="text-primary-600 text-[10px] font-bold mb-1 uppercase tracking-widest">Step 2</p>
            <h4 className="font-bold text-dark-900 mb-2">Receive Verified Offers</h4>
            <p className="text-gray-500 text-sm">Matched manufacturers submit transparent proposals.</p>
          </div>
          <div className="text-center group relative z-10">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary-600 flex items-center justify-center transition shadow-md">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
            </div>
            <p className="text-primary-600 text-[10px] font-bold mb-1 uppercase tracking-widest">Step 3</p>
            <h4 className="font-bold text-dark-900 mb-2">Compare & Launch</h4>
            <p className="text-gray-500 text-sm">Evaluate side-by-side and move to production.</p>
          </div>
        </div>
      </section>

      {/* WHY DONAU */}
      <section className="py-16 md:py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center fade-up" ref={addToRefs}>
          <p className="text-primary-600 font-semibold text-sm mb-2">Why Donau</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900">Built for confidence</h2>
        </div>
        <div className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-up" ref={addToRefs}>
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition card-hover">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-dark-900 mb-3">Structured Demand</h4>
            <p className="text-gray-500 leading-relaxed">Every brief follows a standardized format manufacturers can act on immediately.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition card-hover">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-dark-900 mb-3">Verified Manufacturers</h4>
            <p className="text-gray-500 leading-relaxed">All production partners are vetted for certifications, capacity, and reliability.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition card-hover">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-dark-900 mb-3">Secure Collaboration</h4>
            <p className="text-gray-500 leading-relaxed">End-to-end encrypted messaging and document exchange.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition card-hover">
            <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-dark-900 mb-3">Transparent Proposals</h4>
            <p className="text-gray-500 leading-relaxed">Compare pricing, timelines, and capabilities in a structured format.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16 md:py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative fade-up text-center" ref={addToRefs}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16">What clients are experiencing</h2>

          {/* Desktop Quotes */}
          <div className="absolute left-0 top-24 text-[#93C5FD] text-[120px] font-serif leading-[0.5] hidden md:block">&ldquo;</div>
          <div className="absolute right-0 bottom-40 text-[#93C5FD] text-[120px] font-serif leading-[0.5] hidden md:block">&rdquo;</div>

          <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
            <div className="text-[#93C5FD] text-6xl font-serif leading-none block md:hidden mb-4">&ldquo;</div>
            <p className="text-xl text-gray-800 leading-relaxed mb-12">
              Robert went from his idea for a longevity supplement to Ready and Shipped within 6 weeks, he received 4 offers within 48 Hours.
            </p>
            <div className="flex flex-col items-center justify-center">
              <img src={avatarRobert} alt="Robert Pawlick" className="w-16 h-16 rounded-full object-cover mb-4" />
              <h4 className="font-bold text-black">Robert Pawlick</h4>
              <p className="text-gray-500 text-sm mb-16">Solarwatt</p>
            </div>
            <div className="text-[#93C5FD] text-6xl font-serif leading-none block md:hidden mb-8">&rdquo;</div>
            <button onClick={() => openModal('login')} className="w-full sm:w-auto bg-[#0EA5E9] hover:bg-sky-600 text-white font-medium px-8 py-3 rounded-lg transition shadow-sm text-sm">
              Create Product
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center fade-up" ref={addToRefs}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-900 leading-tight">
            Rebuilding European<br className="hidden md:block" />Manufacturing Coordination.
          </h2>
          <p className="mt-5 text-gray-500 text-base max-w-xl mx-auto">
            Europe's contract manufacturing landscape is fragmented. Donau creates the structured coordination layer connecting verified demand with verified production — transparency, efficiency, and at scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
            <button onClick={() => openModal('login')} className="btn-primary w-full sm:w-auto bg-primary-600 text-white font-semibold px-7 py-3 rounded-lg text-sm">
              Create Product
            </button>
            <button onClick={() => openModal('signup')} className="btn-outline w-full sm:w-auto border border-gray-300 text-gray-700 font-semibold px-7 py-3 rounded-lg text-sm">
              Join as a Manufacturer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
