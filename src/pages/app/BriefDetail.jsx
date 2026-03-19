import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'
import DiscussionModal from '../../components/modals/DiscussionModal'
import PauseModal from '../../components/modals/PauseModal'
import { briefService } from '../../services/briefService'
import { useAuth } from '../../context/AuthContext'

export default function BriefDetail() {
  const location = useLocation()
  const briefId = location.state?.briefId || 'BR12345678'
  const { user, logout } = useAuth()
  
  const [activeTab, setActiveTab] = useState('overview')
  const [isDiscussionModalOpen, setIsDiscussionModalOpen] = useState(false)
  const [isPauseModalOpen, setIsPauseModalOpen] = useState(false)
  const [profilePanel, setProfilePanel] = useState(null)
  const [messagePanel, setMessagePanel] = useState(null)
  const [proposalPanel, setProposalPanel] = useState(null)

  const [brief, setBrief] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBrief = async () => {
      setIsLoading(true)
      try {
        const data = await briefService.getBriefById(briefId)
        setBrief(data)
      } catch (err) {
        setError('Failed to load brief details.')
        setBrief({
          id: briefId,
          title: 'Premium Vitamin D3 Supplement',
          category: 'Dietary Supplements',
          createdDate: '12/01/2026',
          description: 'We are looking for a manufacturer to produce a high-quality vitamin D3 supplement...',
          budget: '€10,000 - €25,000 USD',
          timeline: 'February 14, 2026',
          volume: '250 units',
          materials: 'Gelatin',
          requirements: ['FDA registered facility', 'GMP certified', 'Third-party testing available'],
          status: 'Active'
        })
      } finally {
        setIsLoading(false)
      }
    }
    fetchBrief()
  }, [briefId])

  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col relative">
      <AppHeader activeNav="briefs" user={user} onLogout={logout} />
      
      {isLoading && (
        <div className="absolute inset-x-0 top-0 h-1 z-50">
          <div className="h-full bg-primary-500 animate-pulse w-full"></div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 leading-tight mb-2">{brief?.title || 'Loading Brief...'}</h1>
            <p className="text-xs text-slate-500 flex items-center gap-2">
              <span className="text-primary-500 font-medium">#{brief?.id || briefId}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span>{brief?.category}</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span>Created {brief?.createdDate}</span>
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'manufacturers', 'proposals'].map(tabId => (
              <button key={tabId} onClick={() => setActiveTab(tabId)}
                className={`border-b-2 py-3 px-1 text-xs font-bold focus:outline-none flex items-center gap-2 ${
                  activeTab === tabId ? 'border-primary-500 text-primary-600' : 'border-transparent text-slate-500 hover:border-gray-300 hover:text-slate-700'
                }`}>
                {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-6">
          {activeTab === 'overview' && (
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Brief Description</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{brief?.description}</p>
            </div>
          )}
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
      <DiscussionModal isOpen={isDiscussionModalOpen} onClose={() => setIsDiscussionModalOpen(false)} />
      <PauseModal isOpen={isPauseModalOpen} onClose={() => setIsPauseModalOpen(false)} />
    </div>
  )
}

