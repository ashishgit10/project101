import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impact() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const menu = [
    {
      title: "Purpose",
      links: [
        "Corporate Law",
        "Litigation",
        "Arbitration",
        "Matrimonial law",
        "Banking and Finance",
        "Mining Laws",
      ],
    },

    {
      title: "History",
      links: [],
      path: "/info",
      desc: `The firm was established with a clear vision of redefining modern legal practice through efficiency, strategic thinking, and client-centric service. Rather than relying on decades-old institutional history, the firm draws its strength from the diverse expertise, contemporary legal understanding, and forward-looking approach of its founding members. Built in an era of rapid regulatory evolution, Astreus Legal has been shaped from the outset to meet the demands of today’s dynamic legal environment—combining deep legal knowledge with technology-driven processes, innovative problem-solving, and a commitment to delivering practical, outcome-oriented solutions. While the firm’s history may be young, its philosophy, professionalism, and capability stand firmly on par with more established legal institutions.`,
    },
  ];

  return (
    <>
      <Navbar bgColor="bg-[#fdf9f3]" textclr="text-[#002346]" />

      <div className="bg-[#fdf9f3] min-h-screen flex flex-col justify-between">
        {/* Expertise Section */}
        <section className="flex flex-col md:flex-row px-6 md:px-48 pb-16 pt-40 gap-12 flex-1">
          <div className="flex-1 max-w-lg">
            {menu.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                {/* Header Row */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => {
                    if (item.links.length > 0) {
                      setOpenIndex(openIndex === index ? null : index);
                    } else if (item.path) {
                      navigate(item.path, {
                        state: { title: item.title, desc: item.desc },
                      });
                    }
                  }}
                >
                  <span className="text-lg font-medium text-[#002346]">
                    {item.title}
                  </span>

                  <ChevronRight size={20} className="text-[#002346]" />
                </div>

                {/* Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-screen opacity-100 mt-3"
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

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
