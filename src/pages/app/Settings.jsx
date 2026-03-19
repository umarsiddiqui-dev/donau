import { useState, useEffect } from 'react'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'
import SettingsSidebar from '../../components/layout/SettingsSidebar'
import { useAuth } from '../../context/AuthContext'
import { userService } from '../../services/userService'

export default function Settings() {
  const { user, logout } = useAuth()
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    jobTitle: user?.jobTitle || '',
    dob: user?.dob || '',
    phoneNumber: user?.phoneNumber || ''
  })
  const [settingsData, setSettingsData] = useState({
    timezone: user?.timezone || 'Eastern Time (US & Canada)',
    language: user?.language || 'English'
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        jobTitle: user.jobTitle || '',
        dob: user.dob || '',
        phoneNumber: user.phoneNumber || ''
      })
      setSettingsData({
        timezone: user.timezone || 'Eastern Time (US & Canada)',
        language: user.language || 'English'
      })
    }
  }, [user])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const handleSettingsChange = (e) => {
    const { name, value } = e.target
    setSettingsData(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdateProfile = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateProfile(profileData)
      setMessage('Profile updated successfully!')
    } catch (err) {
      setMessage('Failed to update profile. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  const handleUpdateSettings = async () => {
    setIsUpdating(true)
    setMessage('')
    try {
      await userService.updateSettings(settingsData)
      setMessage('Settings updated successfully!')
    } catch (err) {
      setMessage('Failed to update settings. Please try again.')
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="bg-white text-slate-800 antialiased font-sans min-h-screen flex flex-col">
      <AppHeader activeNav="" user={user} onLogout={logout} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 w-full flex-grow relative">
        {(isUpdating) && (
          <div className="absolute inset-x-0 top-0 h-1 z-50">
            <div className="h-full bg-primary-500 animate-pulse w-full"></div>
          </div>
        )}

        <div className="flex flex-col md:flex-row" style={{ gap: '64px' }}>
          <SettingsSidebar />

          <div className="flex-1 space-y-8">
            {message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${message.includes('success') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {message}
              </div>
            )}

            <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-100">
                <h2 className="font-bold text-[#0f172a]">Personal Information</h2>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Email</label>
                  <input type="email" value={user?.email || ''} readOnly className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 text-sm focus:outline-none cursor-not-allowed" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">First Name</label>
                    <input type="text" name="firstName" value={profileData.firstName} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-primary-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0f172a] mb-2 tracking-tight">Last Name</label>
                    <input type="text" name="lastName" value={profileData.lastName} onChange={handleProfileChange} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:border-primary-500 focus:ring-4 focus:ring-blue-50/50 transition-all outline-none" />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button onClick={handleUpdateProfile} disabled={isUpdating} className="bg-[#3F8AE2] text-white px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-[#3577C8] transition-colors shadow-sm shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed">
                    {isUpdating ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}

