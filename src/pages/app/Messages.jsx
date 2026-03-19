import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'
import AppFooter from '../../components/layout/AppFooter'
import AIChatWidget from '../../components/AIChatWidget'
import { messageService } from '../../services/messageService'

export default function Messages() {
  const [conversations, setConversations] = useState([])
  const [activeChat, setActiveChat] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [showMobileChat, setShowMobileChat] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const messagesRef = useRef(null)

  useEffect(() => {
    fetchConversations()
  }, [])

  const fetchConversations = async () => {
    setIsLoading(true)
    setError('')
    try {
      const data = await messageService.getConversations()
      setConversations(data)
      if (data.length > 0 && !activeChat) {
        setActiveChat(data[0].id)
      }
    } catch (err) {
      setError('Failed to load messages. Showing cached data.')
      const mock = [
        { id: 1, name: 'Green Thread Manufacturing', avatar: 'GT', ref: '#BR12345678', date: '22/01/2024', lastMessage: "Hi! I'm here to help you create a detaile...", unread: 2, subject: 'RE: Premium Vitamin D3 Supplement', messages: [{ id: 1, text: "Hi! I'm here to help you create a detailed product brief. Let's start with the basics.\nWhat type of product are you looking to manufacture?", sender: 'them', time: '20:32' }] },
      ]
      setConversations(mock)
      setActiveChat(1)
    } finally {
      setIsLoading(false)
    }
  }

  const getActiveChat = () => conversations.find(c => c.id === activeChat)

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [activeChat, conversations])

  const selectChat = (id) => { setActiveChat(id); setShowMobileChat(true) }

  const sendMessage = async () => {
    if (!newMessage.trim()) return
    const msgText = newMessage
    setNewMessage('')
    
    try {
      await messageService.sendMessage(activeChat, { text: msgText })
      fetchConversations()
    } catch (err) {
      setConversations(prev => prev.map(c => c.id === activeChat ? {
        ...c,
        messages: [...c.messages, { id: Date.now(), text: msgText, sender: 'me', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }],
        lastMessage: msgText, date: 'Now'
      } : c))
    }
  }

  const active = getActiveChat()

  return (
    <div className="bg-white text-slate-800 antialiased font-sans flex flex-col h-screen">
      <AppHeader activeNav="messages" />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 w-full flex flex-col h-[calc(100vh-64px)] relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <div className="flex-grow flex flex-col md:flex-row gap-6 overflow-hidden bg-transparent mb-4 h-full">
          <div className={`w-full md:w-1/3 bg-white rounded-xl border border-gray-100 flex-col h-full shadow-sm ${showMobileChat ? 'hidden md:flex' : 'flex'}`}>
            <div className="px-5 pt-5 pb-0 border-b border-gray-100 bg-white">
              <h2 className="text-[18px] font-bold text-slate-900 mb-4">Messages</h2>
              <div className="relative mb-4">
                <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-[13px] focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-500 placeholder:text-slate-400 transition-all shadow-sm" />
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              {conversations.map(chat => (
                <div key={chat.id} onClick={() => selectChat(chat.id)}
                  className={`px-5 py-3 border-b border-gray-100 cursor-pointer transition-all hover:bg-slate-50 relative group ${activeChat === chat.id ? 'bg-[#f8faff]' : 'bg-white'}`}>
                  <div className="flex items-start gap-3.5">
                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[14px] flex-shrink-0 bg-[#eff6ff] text-[#3F8AE2]">{chat.avatar}</div>
                    <div className="flex-grow min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[10px] text-[#3F8AE2] font-medium uppercase tracking-tight">{chat.ref}</span>
                        <span className="text-[10px] text-slate-400">{chat.date}</span>
                      </div>
                      <h3 className="text-[13px] font-bold text-slate-900 truncate mb-0.5">{chat.name}</h3>
                      <div className="flex justify-between items-end gap-2">
                        <p className={`text-[11px] truncate leading-relaxed flex-grow ${chat.unread > 0 ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>{chat.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`md:w-2/3 bg-white rounded-xl border border-gray-100 flex-col h-full shadow-sm relative overflow-hidden ${showMobileChat ? 'flex' : 'hidden md:flex'}`}>
            {active ? (
              <>
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-white z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold text-[16px] flex-shrink-0 bg-[#eff6ff] text-[#3F8AE2]">{active.avatar}</div>
                    <div className="pt-0.5">
                      <h3 className="text-[16px] font-bold text-slate-900 leading-tight">{active.name}</h3>
                      <p className="text-[12px] text-slate-400 mt-1">{active.subject}</p>
                    </div>
                  </div>
                </div>

                <div ref={messagesRef} className="flex-grow p-8 overflow-y-auto bg-white space-y-6">
                  {active.messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-2xl p-5 text-[15px] leading-relaxed relative ${msg.sender === 'me' ? 'bg-[#3F8AE2] text-white' : 'bg-[#f1f5f9] text-slate-800'}`}>
                        <p className="whitespace-pre-line">{msg.text}</p>
                        <div className="mt-2 text-[12px] opacity-60 text-right">{msg.time}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-6 bg-white border-t border-gray-100">
                  <form onSubmit={e => { e.preventDefault(); sendMessage() }} className="flex items-center gap-4">
                    <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} placeholder="Type your response..."
                      className="w-full px-5 py-3 rounded-xl border border-gray-100 bg-slate-50/50 text-[15px] focus:outline-none focus:ring-2 focus:ring-primary-500/10 focus:border-primary-500 placeholder:text-slate-400 transition-all" />
                    <button type="submit" className="w-[48px] h-[48px] flex items-center justify-center bg-[#3F8AE2] text-white rounded-xl shadow-md shadow-blue-200 hover:bg-[#3577C8] transition-all">
                      <svg className="w-[22px] h-[22px] transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-grow flex items-center justify-center text-slate-400">Select a conversation to start messaging</div>
            )}
          </div>
        </div>
      </main>

      <AppFooter />
      <AIChatWidget />
    </div>
  )
}

