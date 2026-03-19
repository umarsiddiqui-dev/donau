import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'
import { useAuth } from '../../context/AuthContext'

const manufacturers = [
  { name: 'EcoPack Solutions', initials: 'E', location: 'United States', rating: '4.8', certs: ['GOTS', 'ISO 9001'], aiMatch: true },
  { name: 'Nordic Manufacturing AB', initials: 'N', location: 'Sweden', rating: '4.6', certs: ['OEKO-TEX', 'ISO 14001'], aiMatch: true },
  { name: 'Rhein Produktion AG', initials: 'R', location: 'Germany', rating: '4.9', certs: ['ISO 9001', 'BCI'], aiMatch: false },
  { name: 'Adriatica Fabrics SRL', initials: 'A', location: 'Italy', rating: '4.5', certs: ['GOTS'], aiMatch: false },
  { name: 'Alpine Textiles GmbH', initials: 'A', location: 'Austria', rating: '4.8', certs: ['GOTS', 'ISO 9001'], aiMatch: false },
]

export default function BriefsInvited() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const briefId = location.state?.briefId || 'BR12345678'
  
  const [profilePanel, setProfilePanel] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const aiMatched = manufacturers.filter(m => m.aiMatch)
  const otherManufacturers = manufacturers.filter(m => !m.aiMatch)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [briefId])

  return (
    <div className="bg-[#fafafa] text-slate-800 antialiased font-sans min-h-screen flex flex-col relative">
      <AppHeader activeNav="briefs" user={user} onLogout={logout} />

      {isLoading && (
        <div className="absolute inset-x-0 top-0 h-1 z-50">
          <div className="h-full bg-primary-500 animate-pulse w-full"></div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-[26px] font-bold text-slate-900 tracking-tight">Matched Manufacturers</h1>
            <p className="text-[14px] text-slate-500 mt-1">AI-matched based on your brief <span className="text-primary-500 font-medium">#{briefId}</span> requirements.</p>
          </div>
          <button className="bg-[#3F8AE2] text-white px-6 py-2.5 rounded-lg text-[14px] font-bold hover:bg-[#3577C8] transition-colors shadow-sm">
            Send To All
          </button>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[300px]">
              <i className="ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input type="text" placeholder="Search manufacturers..." className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl text-[14px]" />
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="border-[1.5px] border-[#e2e8f0] bg-[#f8fafc] rounded-[20px] p-5 space-y-5">
              <div className="flex items-center gap-3">
                 <i className="ph ph-sparkle text-[#3F8AE2] text-[18px]"></i>
                <p className="text-[13px] font-medium text-slate-700">Based on your brief, these manufacturers best match your product and capacity needs.</p>
              </div>

              {aiMatched.map((mfr, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-[#e2e8f0] flex items-center justify-between transition-all">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#3F8AE2] font-bold text-[18px]">{mfr.initials}</div>
                    <div>
                      <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{mfr.name}</h3>
                      <div className="flex items-center gap-3 mt-1.5 text-[12px] text-slate-500">
                        <span>{mfr.location}</span>
                        <span>{mfr.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => setProfilePanel(mfr)} className="px-6 py-2 border border-[#3F8AE2] rounded-lg text-[13px] font-bold text-[#3F8AE2]">View Profile</button>
                    <button className="px-6 py-2 bg-[#3F8AE2] text-white rounded-lg text-[13px] font-bold">Send Invite</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}

