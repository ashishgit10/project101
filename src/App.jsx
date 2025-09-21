import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import DisclaimerModal from './components/DisclaimerModal'
import Expertise from './pages/Expertise'
import PeoplePage from './pages/PeoplePage'
import Imapct from './pages/Impact'
import Impact from './pages/Impact'
import Resource from './pages/Resource'

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
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/peoplepage" element={<PeoplePage />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/resources" element={<Resource />} />


        </Routes>
      </main>
      {/*   <Footer /> */}
    </div>
  )
}
