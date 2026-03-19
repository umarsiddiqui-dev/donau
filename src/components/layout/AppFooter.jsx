import { Link } from 'react-router-dom'

export default function AppFooter() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center mb-3">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">AI-powered platform connecting brands with manufacturers</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link to="/brands" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Brands</Link></li>
              <li><Link to="/manufacturers" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Manufacturers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4">Contact</h4>
            <p className="text-sm text-slate-500 mb-4">info@donauai.com</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">&copy; 2026 DonauApp</p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            English
          </div>
        </div>
      </div>
    </footer>
  )
}
