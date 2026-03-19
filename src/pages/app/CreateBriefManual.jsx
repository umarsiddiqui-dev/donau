import { Link } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'

export default function CreateBriefManual() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="briefs" />
      <main className="max-w-4xl mx-auto px-4 pt-16 pb-20 w-full">
        <h1 className="text-[30px] font-bold text-slate-900 tracking-tight mb-4">Create New Brief</h1>
        <form className="space-y-6">
          <div className="bg-white border border-[#f1f5f9] rounded-2xl p-8 shadow-sm">
            <h2 className="text-[18px] font-bold text-[#0f172a] mb-8">Basic Information</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#334155] mb-2.5">Product Title</label>
                <input type="text" placeholder="Enter Title" className="w-full py-3 px-4 border border-[#e2e8f0] rounded-xl text-[14px]" />
              </div>
            </div>
          </div>
        </form>
      </main>
      <AppFooter />
      <AIChatWidget />
    </div>
  )
}
