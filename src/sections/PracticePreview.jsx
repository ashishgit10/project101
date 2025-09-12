import React from 'react'
import { Link } from 'react-router-dom'

const PRACTICES = [
  "Corporate / M&A", "Banking & Finance", "Competition", "Tax", "Data Privacy & Protection",
  "Intellectual Property", "Dispute Resolution"
]

export default function PracticePreview(){
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Expertise</h2>
        <Link to="/practice" className="text-blue-600">See all</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {PRACTICES.map((p, i) => (
          <div key={i} className="p-4 border rounded hover:shadow">
            <h3 className="font-medium">{p}</h3>
            <p className="text-sm text-gray-600 mt-2">Short description for {p}…</p>
          </div>
        ))}
      </div>
    </section>
  )
}
