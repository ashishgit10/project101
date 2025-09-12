import React from 'react'
import { Link } from 'react-router-dom'

const RESOURCES = [
  {title: 'Deal Update: Mega M&A', date: '2025-05-10'},
  {title: 'Guidance: Data Protection', date: '2025-03-02'},
  {title: 'Alert: New Banking Rules', date: '2025-01-18'}
]

export default function ResourcesPreview(){
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Resources</h2>
        <Link to="/resources" className="text-blue-600">See all</Link>
      </div>

      <ul className="mt-4 space-y-3">
        {RESOURCES.map((r,i) => (
          <li key={i} className="p-3 border rounded hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{r.title}</div>
                <div className="text-sm text-gray-500">{r.date}</div>
              </div>
              <a className="text-blue-600" href="#">Read</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
