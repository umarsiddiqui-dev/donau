import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AppHeader({ user, onLogout }) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [notifMenuOpen, setNotifMenuOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const profileBtnRef = useRef(null)
  const profileMenuRef = useRef(null)
  const notifBtnRef = useRef(null)
  const notifMenuRef = useRef(null)
  const mobileBtnRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const location = useLocation()

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    if (path === '/briefs') return location.pathname.startsWith('/brief')
    if (path === '/messages') return location.pathname === '/messages'
    return false
  }

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target) &&
          profileBtnRef.current && !profileBtnRef.current.contains(e.target)) {
        setProfileMenuOpen(false)
      }
      if (notifMenuRef.current && !notifMenuRef.current.contains(e.target) &&
          notifBtnRef.current && !notifBtnRef.current.contains(e.target)) {
        setNotifMenuOpen(false)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) &&
          mobileBtnRef.current && !mobileBtnRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleProfile = (e) => {
    e.stopPropagation()
    setProfileMenuOpen(prev => !prev)
    setNotifMenuOpen(false)
  }

  const toggleNotif = (e) => {
    e.stopPropagation()
    setNotifMenuOpen(prev => !prev)
    setProfileMenuOpen(false)
  }

  const toggleMobile = (e) => {
    e.stopPropagation()
    setMobileMenuOpen(prev => !prev)
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side: Logo & Nav */}
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center pr-6 border-r border-gray-100">
              <img src="/logo.svg" alt="Donau AI Logo" className="h-8 w-auto" />
            </Link>

            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8 pl-6">
              <Link to="/dashboard"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/dashboard')
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                  </path>
                </svg>
                Dashboard
              </Link>
              <Link to="/briefs"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/briefs')
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
                My Briefs
              </Link>
              <Link to="/messages"
                className={`font-medium text-xs flex items-center gap-2 ${
                  isActive('/messages')
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-[21px] mt-[21px]'
                    : 'text-slate-500 hover:text-slate-900 transition-colors'
                }`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                  </path>
                </svg>
                Messages
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center">
              <button ref={notifBtnRef} onClick={toggleNotif} id="notification-button"
                className="text-[#64748b] hover:text-[#0e1726] transition-colors relative h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-50 outline-none">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              {/* Notification Dropdown */}
              {notifMenuOpen && (
                <div ref={notifMenuRef} id="notification-dropdown"
                  className="absolute right-0 mt-3 top-full w-[85vw] max-w-[280px] md:w-[300px] rounded-[10px] border border-[#e2e8f0] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden text-left z-50">
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3 bg-white">
                    <h4 className="text-[14px] font-bold text-[#0e1726]">Notifications</h4>
                    <a href="#" className="text-[12px] font-medium text-[#448ae6] hover:underline">Mark all as read</a>
                  </div>
                  <div className="max-h-[340px] overflow-y-auto w-full bg-white">
                    <div className="p-3 border-b border-[#e2e8f0] bg-[#f8fafc] hover:bg-gray-50 transition-colors cursor-pointer w-full text-left">
                      <div className="flex items-start justify-between mb-1 gap-2">
                        <h5 className="text-[13px] font-bold text-[#0e1726] flex-1 leading-tight m-0">New Proposal Received</h5>
                        <span className="text-[11px] text-[#64748b] whitespace-nowrap">Today</span>
                      </div>
                      <p className="text-[12px] text-[#64748b] leading-relaxed text-left w-full break-words m-0">EcoPacksolutions submitted a proposal for &quot;sustainable packaging for organic skincare line&quot;</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-px h-5 bg-gray-200 mx-1"></div>

            <div className="h-8 w-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
              style={{ backgroundColor: '#3F8AE2' }}>
              {(user?.firstName || 'E').charAt(0).toUpperCase()}
            </div>

            <div className="relative">
              <button ref={profileBtnRef} onClick={toggleProfile} id="profile-menu-button"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors block outline-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Profile Dropdown */}
              {profileMenuOpen && (
                <div ref={profileMenuRef} id="profile-menu"
                  className="absolute right-0 mt-2 w-[240px] bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.1)] border border-slate-100 z-50 flex flex-col overflow-hidden">
                  <div className="px-5 py-4 border-b border-slate-50">
                    <p className="text-sm font-bold text-slate-900">{user?.firstName || 'User'} {user?.lastName || ''}</p>
                    <p className="text-[12px] text-slate-500 mt-0.5">{user?.email || 'user@example.com'}</p>
                  </div>

                  <div className="py-2 border-b border-slate-50">
                    <Link to="/dashboard" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <span className="text-[13px] font-medium">Dashboard</span>
                    </Link>
                    <Link to="/settings" onClick={() => setProfileMenuOpen(false)}
                      className="flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors">
                      <span className="text-[13px] font-medium">Settings</span>
                    </Link>
                  </div>

                  <div className="py-2">
                    <button onClick={() => { onLogout(); setProfileMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-5 py-2.5 text-slate-600 hover:bg-slate-50 transition-colors text-left outline-none">
                      <span className="text-[13px] font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

