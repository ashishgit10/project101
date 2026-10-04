import React from 'react'
import notebook from "../../assets/logo.png";
import "../../global.css"
function YAstreus() {
  return (
    <section id="why" className="bg-[#f5f3ed]">
            <div className="grid md:grid-cols-[1fr_1.1fr_.9fr]">
              <img
                className="h-[245px] w-full object-cover md:h-full"
                src={notebook}
                alt="Astreus Legal notebook and pen"
              />
              <div className="p-10 sm:p-12">
                <p className= "mb-4 text-[10px] font-semibold tracking-[.24em] text-[#dbb36d]">WHY ASTREUS</p>
                <h2 className="font-serif text-[29px] leading-[1.16] tracking-tight sm:text-[32px]">
                  Precision in advice.
                  <br />
                  Discipline in execution.
                  <br />
                  Clarity in complexity.
                </h2>
              </div>
              <div className="m-7 border-l  border-[#506079] pl-6 sm:pl-10">
                {[
                  [
                    "⚖",
                    "DEEP EXPERTISE",
                    "Specialised knowledge across key practice areas and industries.",
                  ],
                  [
                    "♧",
                    "CLIENT-CENTRIC",
                    "Pragmatic advice, tailored to your business and goals.",
                  ],
                  [
                    "♙",
                    "DISCRETION & TRUST",
                    "Absolute confidentiality. Always.",
                  ],
                  [
                    "◎",
                    "RESULTS-DRIVEN",
                    "Focused on outcomes that create long-term value.",
                  ],
                ].map(([icon, title, copy]) => (
                  <div
                    className="flex gap-4 border-b border-slate-300 py-2 last:border-0"
                    key={title}
                  >
                    <i className="text-xl not-italic text-[#bd9154]">{icon}</i>
                    <div>
                      <b className="text-[9px] tracking-[.18em]">{title}</b>
                      <p className="mt-1 text-[10px]  text-[#002346] leading-snug">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  )
}

export default YAstreus