import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'
import InviteModal from '../../components/modals/InviteModal'
import { briefService } from '../../services/briefService'

function MetaTag({ icon, label }) {
  return (
    <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon}></path>
      </svg>
      {label}
    </span>
  )
}

export default function Briefs() {
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [briefs, setBriefs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    active: '0',
    discussion: '0',
    proposals: '0',
    matched: '0'
  })

  useEffect(() => {
    fetchBriefs()
  }, [])

  const fetchBriefs = async () => {
    setIsLoading(true)
    try {
      const data = await briefService.getBriefs()
      setBriefs(data.briefs || data) 
      setStats(data.stats || { active: '15', discussion: '3', proposals: '5', matched: '2' })
    } catch (err) {
      setBriefs([
        { id: 1, title: 'Premium Vitamin D3 Supplement', status: 'Draft', category: 'Dietary Supplements', budget: '€1000 - €100000 USD', invited: '5 Invited', proposals: '3 Proposals', date: '12/02/2026' },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AppHeader activeNav="briefs" />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-[28px] font-bold text-slate-900 tracking-tight">My Briefs</h1>
            <p className="text-[15px] text-slate-500 mt-1">Manage your product briefs and track manufacturer engagement</p>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={() => setIsInviteModalOpen(true)} className="px-6 py-2.5 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded-lg font-medium text-[15px]">
              Invite Manufacturers
            </button>
            <Link to="/create-brief-manual" className="px-6 py-2.5 bg-[#3F8AE2] text-white rounded-lg font-medium text-[15px]">
              Create Brief
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mb-8 relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10">
              <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <div className="space-y-4 py-4">
            {briefs.map((brief, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl mx-4 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-[16px] font-bold text-slate-900">{brief.title}</h3>
                    <span className="bg-blue-100 text-primary-600 text-[12px] px-3 py-0.5 rounded-full font-medium">{brief.status}</span>
                  </div>
                  <Link to="/brief-detail" className="text-primary-500 text-sm">View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
      <InviteModal isOpen={isInviteModalOpen} onClose={() => setIsInviteModalOpen(false)} />
    </div>
  )
}

