import React from 'react'
import { Link } from 'react-router-dom'

const PEOPLE = [
  {name:'A. Partner', role:'Senior Partner'},
  {name:'B. Advocate', role:'Partner'},
  {name:'C. Counsel', role:'Counsel'},
  {name:'D. Associate', role:'Associate'}
]

export default function PeoplePreview(){
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">People</h2>
        <Link to="/people" className="text-blue-600">See all</Link>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {PEOPLE.map((p, idx) => (
          <div key={idx} className="p-4 border rounded text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center text-xl mb-2">{p.name[0]}</div>
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-500">{p.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
