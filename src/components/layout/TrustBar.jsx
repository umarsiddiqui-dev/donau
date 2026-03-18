import React from 'react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: (
        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Certified European supplement manufacturers"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: "GMP & ISO compliant production"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: "Structured RFQ process"
    },
    {
      icon: (
        <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: "Transparent proposal comparison"
    }
  ];

  return (
    <section className="py-10 border-y border-gray-100 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-dark-900 font-medium text-xs sm:text-sm">
              <div className="w-8 h-8 rounded-full bg-white border border-primary-100 flex items-center justify-center shadow-sm flex-shrink-0">
                {item.icon}
              </div>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
