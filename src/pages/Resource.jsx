import React from 'react'
export default function Resources(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Resources</h1>
      <p className="text-gray-700 mb-6">Publications, alerts, and guides.</p>
      <div className="space-y-3">
        {Array.from({length:8}).map((_,i)=>(
          <div key={i} className="p-4 border rounded flex items-center justify-between">
            <div>
              <div className="font-medium">Resource Title {i+1}</div>
              <div className="text-sm text-gray-500">Short excerpt or date</div>
            </div>
            <a href="#" className="text-blue-600">Read</a>
          </div>
        ))}
      </div>
    </div>
  )
}
