import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">AZB & Partners</div>
          <div className="text-sm text-gray-500 mt-2">Advocates & Solicitors</div>
        </div>

        <div>
          <div className="font-medium">Contact</div>
          <div className="text-sm text-gray-600 mt-2">Regd. Office: 1st Floor, 29-Daryaganj, Netaji Subash Marg, Delhi – 110002, India</div>
        </div>

        <div className="text-sm text-gray-600">
          <div>CIN: U74899DL1999PLC101534</div>
          <div className="mt-2">Terms of Use | Privacy Policy</div>
        </div>
      </div>
      <div className="bg-gray-50 border-t py-3 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} AZB & Partners. All rights reserved.
      </div>
    </footer>
  )
}
