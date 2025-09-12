import React from 'react'
export default function Practice(){
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Expertise</h1>
      <p className="text-gray-700 mb-6">Complete list of practice areas (click into each for details).</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* replicate from preview but bigger */}
        {['Corporate / M&A','Banking & Finance','Competition','Tax','Data Privacy & Protection','IP','Dispute Resolution'].map((p,i)=>(
          <div key={i} className="p-4 border rounded hover:shadow">
            <h3 className="font-semibold">{p}</h3>
            <p className="text-sm text-gray-600 mt-2">Overview content for {p}…</p>
          </div>
        ))}
      </div>
    </div>
  )
}
