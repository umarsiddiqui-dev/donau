import { Link } from 'react-router-dom'

export default function AuthHeader() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center pr-6">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-[13px] text-slate-700 font-medium">English</span>
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}
