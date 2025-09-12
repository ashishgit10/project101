import React from 'react'

const PEOPLE = new Array(12).fill(0).map((_,i)=>({
  name: `Person ${i+1}`,
  role: i%3===0 ? 'Partner' : 'Associate'
}))

export default function People(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">People</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {PEOPLE.map((p, idx) => (
          <div key={idx} className="border p-4 rounded text-center hover:shadow">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-3">{p.name[0]}</div>
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-500">{p.role}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
