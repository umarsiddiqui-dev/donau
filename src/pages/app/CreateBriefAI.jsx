import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppHeader from '../../components/layout/AppHeader'

export default function CreateBriefAI() {
  const [chatHistory, setChatHistory] = useState([
     { id: 1, sender: 'ai', text: "Hi! I'll help you connect with manufacturers. What product do you want to create?" }
  ])
  const chatRef = useRef(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [chatHistory])

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans h-screen flex flex-col">
      <AppHeader activeNav="dashboard" />
      <main className="flex-grow flex flex-col p-6 max-w-[1600px] mx-auto w-full h-[calc(100vh-64px)]">
        <h1 className="text-xl font-bold text-slate-900">AI Brief Assistant</h1>
        <div className="flex-grow flex flex-col md:flex-row gap-6 mt-6 overflow-hidden">
          <div className="w-full md:w-1/2 bg-white rounded-2xl border border-gray-100 flex flex-col shadow-sm">
             <div ref={chatRef} className="flex-grow overflow-y-auto p-6 space-y-6">
               {chatHistory.map(msg => (
                 <div key={msg.id} className="text-sm p-4 bg-gray-50 rounded-xl">{msg.text}</div>
               ))}
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}
