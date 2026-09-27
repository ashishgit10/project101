import React from 'react'

function Footer() {
  return (
          <footer id="contact" className="bg-[#031d3c] text-white">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] gap-6 py-10 sm:w-[89vw] md:grid-cols-[1fr_auto_1.3fr] md:items-center">
          <div>
            <h2 className="font-serif text-lg">Discuss your matter with us.</h2>
            <p className="mt-2 text-[10px] text-slate-200">
              Astreus Legal　|　New Delhi, India
            </p>
          </div>
          <a
            className={`${button} bg-[#dbb36d] text-[#10294a]`}
            href="mailto:astreuslegal@gmail.com"
          >
            Contact the Firm <ArrowRight size={14} />
          </a>
          <div className="md:text-right">
            <div className={`${wordmark} md:ml-auto`}>
              <span>ASTREUS</span>
              <small className="mt-1 font-sans text-[6px] tracking-[.35em]">
                — LEGAL —
              </small>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-[9px] md:justify-end">
              {nav.map((item) => (
                <a href={anchor(item)} key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-[calc(100%-40px)] flex-col gap-2 border-t border-white/25 py-3 text-[8px] text-slate-300 sm:w-[89vw] sm:flex-row sm:justify-between">
          <span>© 2026 Astreus Legal. All rights reserved.</span>
          <span>Privacy Policy　/　Disclaimer</span>
        </div>
      </footer>
  )
}

export default Footer