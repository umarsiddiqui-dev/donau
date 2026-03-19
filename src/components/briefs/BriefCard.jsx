import React from 'react';

const BriefCard = ({ 
  title, 
  company, 
  status, 
  statusColor, 
  statusBg, 
  category, 
  budget, 
  units, 
  deadline 
}) => {
  return (
    <div className="bg-white p-5 md:py-4 md:px-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition card-hover block">
      {/* Mobile Top Row */}
      <div className="flex md:hidden items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-[10px] ${statusBg} ${statusColor} text-[12px] font-bold`}>
            {status}
          </span>
          <button className="text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
        <button className="p-1 text-gray-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-dark-900">{title}</h3>
            {/* Desktop Only Badge */}
            <div className="hidden md:flex items-center gap-3">
              <span className={`px-3 py-1 rounded-[10px] ${statusBg} ${statusColor} text-[12px] font-bold`}>
                {status}
              </span>
              <button className="text-gray-400 hover:text-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">{company}</p>
          
          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 mt-4 overflow-x-auto no-scrollbar">
            <div className="px-4 py-2 border border-gray-100 rounded-full flex items-center gap-2 text-[13px] text-dark-800 font-medium bg-gray-50/30 whitespace-nowrap">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              {category}
            </div>
            <div className="px-4 py-2 border border-gray-100 rounded-full flex items-center gap-2 text-[13px] text-dark-800 font-medium bg-gray-50/30 whitespace-nowrap">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
              {budget}
            </div>
            <div className="px-4 py-2 border border-gray-100 rounded-full flex items-center gap-2 text-[13px] text-dark-800 font-medium bg-gray-50/30 whitespace-nowrap">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              {units}
            </div>
            <div className="px-4 py-2 border border-gray-100 rounded-full flex items-center gap-2 text-[13px] text-dark-800 font-medium bg-gray-50/30 whitespace-nowrap">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              {deadline}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
          <button className="hidden md:block px-6 py-2.5 border border-blue-200 text-primary-500 font-bold rounded-xl text-sm transition hover:bg-blue-50 whitespace-nowrap">
            Not Proceed
          </button>
          <button className="w-full md:px-8 py-3.5 md:py-2.5 bg-[#3F8AE2] text-white font-bold rounded-xl text-sm transition hover:bg-[#3577C8] shadow-lg shadow-blue-100 whitespace-nowrap cursor-default">
            View Brief
          </button>
          <button className="hidden md:block p-1 text-gray-300 hover:text-gray-600 transition ml-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BriefCard;

