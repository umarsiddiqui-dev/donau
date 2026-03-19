import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import AuthHeader from '../../components/layout/AuthHeader'
import AuthFooter from '../../components/layout/AuthFooter'

export default function SignUp() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    organizationSlug: '',
    website: '',
    description: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    twitter: '',
    linkedin: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFinalSubmit = async (e) => {
    if (e) e.preventDefault()
    setError('')
    setIsLoading(true)
    try {
      await register(formData)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please check your information.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 text-slate-800 antialiased font-sans flex flex-col min-h-screen">
      <AuthHeader />

      <main className="flex-grow flex flex-col items-center justify-start pt-12 px-4">
        <div className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-gray-100 w-full max-w-[640px] relative min-h-[500px]">
          {error && (
            <div className="mb-6 bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          {step === 1 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Organization Information</h1>
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Organization slug/username</label>
                  <input type="text" name="organizationSlug" value={formData.organizationSlug} onChange={handleInputChange} placeholder="Enter slug/username"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm" />
                </div>
                <button type="button" onClick={() => setStep(2)}
                  className="w-full bg-[#3F8AE2] hover:bg-[#3577C8] text-white font-bold py-3.5 rounded-xl transition-all text-sm mt-4">Next</button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="text-2xl font-bold text-center text-slate-900 mb-2">Almost Done</h1>
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Enter First Name"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-900 mb-2 ml-1">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter Last Name"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-primary-500 outline-none transition-all text-sm" />
                </div>
                <button type="submit" disabled={isLoading}
                   className="w-full bg-[#3F8AE2] hover:bg-[#3577C8] text-white font-bold py-3.5 rounded-xl transition-all text-sm mt-4">
                  {isLoading ? 'Creating Account...' : 'Complete Sign Up'}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>

      <AuthFooter />
    </div>
  )
}

