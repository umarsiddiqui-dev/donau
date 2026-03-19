import { Link } from 'react-router-dom'

export default function AuthFooter() {
  return (
    <footer className="w-full py-8 flex flex-col items-center gap-3 text-sm text-[#475569]">
      <div className="flex gap-1.5">
        <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
        <span>|</span>
        <Link to="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
      </div>
      <span>&copy; 2026 DonauAI</span>
    </footer>
  )
}
