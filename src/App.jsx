import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DisclaimerModal from './components/DisclaimerModal'
import Expertise from './pages/Expertise'
import PeoplePage from './pages/PeoplePage'
import Impact from './pages/Impact'
import Resource from './pages/Resource'
import logo from './assets/logo.jpeg'

export default function App() {
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(
    () => localStorage.getItem('acceptedDisclaimer') === 'true'
  )

  const [loading, setLoading] = useState(true)

  // ✅ Fake loader timeout (you can adjust duration)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1100) // 2 seconds
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <img
          src={logo}
          alt="Astreus Legal"
          className="w-40 h-40 mb-4"
        />
        <h1 className="text-2xl font-bold text-[#004b87]">
          Astreus Legal
        </h1>
      </div>
    )
  }

  return (
    <div className="">
      <main className="flex-grow">
        {!acceptedDisclaimer && (
          <DisclaimerModal
            onAccept={() => {
              setAcceptedDisclaimer(true)
              localStorage.setItem('acceptedDisclaimer', 'true') 
            }}
            onClose={() => setAcceptedDisclaimer(true)}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/peoplepage" element={<PeoplePage />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resource />} />
        </Routes>
      </main>
    </div>
  )
}
