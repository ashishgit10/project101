import React from 'react'

export default function DisclaimerModal({ onAccept }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white max-w-2xl w-full rounded shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Disclaimer</h3>
        <p className="text-sm text-gray-700 mb-4">
          The contents of this website are for informational purposes only. Under the rules of the Bar Council, visitors must confirm they are permitted to view legal content. By clicking "Agree" you accept these terms.
        </p>
        <div className="flex justify-end gap-2">
          <button onClick={() => window.location.reload()} className="px-4 py-2 border rounded">Disagree</button>
          <button onClick={onAccept} className="px-4 py-2 bg-blue-600 text-white rounded">Agree</button>
        </div>
      </div>
    </div>
  )
}
