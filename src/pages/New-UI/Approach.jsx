import { ArrowRight } from "lucide-react";
import scales from "../../assets/logo-justice.jpeg";
export const Approach = () => {
    
  return (
     <section
          id="about"
          className="border-t border-white/35 bg-[#031d3c] py-12 text-white sm:py-9"
        >
          <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] gap-7 sm:w-[89vw] md:grid-cols-[1.05fr_1fr_.36fr] md:items-center md:gap-10">
            <div>
              <p className="mb-4 text-[10px] font-semibold tracking-[.24em] text-[#dbb36d]">OUR APPROACH</p>
              <h2 className="mb-5 font-serif text-[31px] leading-[1.08] tracking-tight sm:text-[35px]">
                Law demands more
                <br />
                than knowledge.
                <br />
                <em className="text-[#dbb36d]">It demands judgment.</em>
              </h2>
              <p className="max-w-sm text-xs leading-relaxed text-slate-200">
                At Astreus Legal, we bring together deep legal expertise,
                commercial insight and a practical approach to help our clients
                navigate complexity, make informed decisions and achieve lasting
                outcomes.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-3 border-b pb-1 text-[11px]"
                href="#why"
              >
                About Astreus Legal <ArrowRight size={14} />
              </a>
            </div>
            <img
              className="h-[220px] w-full object-cover sm:h-[250px]"
              src={scales}
              alt="Scales of justice and legal books"
            />
            <p className="border-l border-[#dbb36d] pl-6 text-[10px] font-semibold leading-[2.1] tracking-[.2em]">
              STRATEGIC
              <br />
              THINKING.
              <br />
              PRACTICAL
              <br />
              SOLUTIONS.
              <br />
              LASTING IMPACT.
            </p>
          </div>
        </section>
  )
}
