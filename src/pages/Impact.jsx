import React, { useState } from "react";
import { ChevronRight, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import linkedin from "../assets/linkedin.png";
export default function Impact() {
  const [openIndex, setOpenIndex] = useState(null);

  const menu = [
    {
      title: "Purpose",
      links: ["Corporate Law", "Litigation", "Arbitration","Matrimonial law","Banking and Finance"],
    },
    {
      title: "History",
      links: ["Banking & Finance", "Energy", "Technology"],
    },
    {
      title: "Awards & Ranking",
      links: [], // direct link
    },
  ];

  return (<>


    <Navbar bgColor="bg-[#fdf9f3]" textclr="text-[#002346]" />
    <div className="bg-[#fdf9f3] min-h-screen flex flex-col justify-between">
      {/* Expertise Section */}
      <section className="flex flex-col md:flex-row px-6 md:px-48 pb-16 pt-40 gap-12 flex-1">
       
       {/*  <div className="flex-1">
          <h2 className="text-4xl font-light font-play text-[#a45c48] leading-snug mb-6">
            Our undertakings for long-term impact are an organic extension of our purpose.
          </h2>
          <p className="text-[#002346] leading-relaxed text-lg">
            They are to employ our deep knowledge of the law beyond the business, the transaction, the deal. To use the opportunities and skills we possess, to reflect on the culture we’re creating. Individually and collectively, these are our efforts to help shape the thinking of our future generations, and arm them with strategies for true, sustainable growth.          </p>
        </div> */}

        <div className="flex-1 max-w-lg">
          {menu.map((item, index) => (
            <div key={index} className="border-b border-gray-300 py-4">
              {/* Header Row */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  item.links.length > 0 &&
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-lg font-medium text-[#002346]">
                  {item.title}
                </span>
                {item.links.length > 0 ? (
                  openIndex === index ? (
                    <ChevronRight size={20} className="text-[#002346]" />
                  ) : (
                    <ChevronRight size={20} className="text-[#002346]" />
                  )
                ) : (
                  <ChevronRight size={20} className="text-[#002346]" />
                )}
              </div>

     
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <ul className="space-y-2 pl-2">
                  {item.links.map((link, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center text-gray-700 hover:text-blue-600 cursor-pointer"
                    >
                      {link}
                      <ChevronRight size={16} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 md:px-16 py-6 border-t border-gray-300 text-sm">
        {/* Left Links */}
        <div className="flex flex-wrap gap-6 text-[#002346] font-medium">
          <Link to="/opportunities" className="hover:text-blue-600">
            Opportunities
          </Link>
          <Link to="/news" className="hover:text-blue-600">
            News & Media
          </Link>
          <Link to="/alumni" className="hover:text-blue-600">
            Alumni
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Right Social Links */}
        <div className="flex gap-4 items-center text-[#002346] font-medium">
          <span>Connect</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
             <img src={linkedin} className="w-4"/>
          </a>
          <a
            href="#rss"
            className="hover:text-blue-600"
          >
            <span className="text-xl">📰</span>
          </a>
        </div>
      </footer>
    </div>
  </>
  );
}
