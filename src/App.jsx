import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

import DisclaimerModal from './components/DisclaimerModal'

export default function App() {
  const [acceptedDisclaimer, setAcceptedDisclaimer] = useState(
    () => localStorage.getItem('acceptedDisclaimer') === 'true'
  )

  return (
    <div className="">
   
      <main className="flex-grow">
        {!acceptedDisclaimer && (
          <DisclaimerModal onAccept={() => {
            setAcceptedDisclaimer(true)
            localStorage.setItem('acceptedDisclaimer', 'true')
          }} />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    {/*   <Footer /> */}
    </div>
  )
}
