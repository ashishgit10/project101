import React from 'react'
import { ArrowRight } from "lucide-react";
import people from "../../components/Data/people";
import { Link } from "react-router-dom";
function Rpeople() {
  return (
     <section id="people" className="bg-[#031d3c] py-11 text-white">
              <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] grid-cols-2 gap-5 sm:w-[89vw] md:grid-cols-[1.5fr_repeat(3,1fr)_0.7fr]">
                <div className="col-span-2 md:col-span-1">
                  <p className="mb-4 text-[10px] font-semibold tracking-[.24em] text-[#dbb36d]">OUR PEOPLE</p>
                  <h2 className="font-serif text-[31px] leading-[1.08]">
                    The Minds Behind
                    <br />
                    Astreus Legal
                  </h2>
                  <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-200">
                    A team of experienced and forward-thinking professionals,
                    committed to excellence.
                  </p>
                  <Link
                    className="mt-3 inline-flex items-center gap-3 border-b pb-1 text-[11px]"
                    to="/peoplepage"
                  >
                    Meet Our Team <ArrowRight size={14} />
                  </Link>
                </div>
                {people.map((person, index) => (
                    <div key={index}>
                  <Link to={`/advocate/${person.id}`}>
                    <img
                      className="h-40 w-full border border-[#dbb36d]/60 object-cover object-top sm:h-36"
                      src={person.image}
                      alt={person.name}
                    />
                    <h3 className="mt-2 font-serif text-base">{person.name}</h3>
                    <p className="text-[9px] text-slate-200">
                      {index === 0 ? "Managing Partner" : "Partner"}
                    </p>
                  </Link>
                  </div>
                ))}
               
              </div>
            </section>
  )
}

export default Rpeople