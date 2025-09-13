import React, { useState, useEffect, useRef } from "react";
import pat from "../assets/pattern-1.png"

const SpotlightSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center px-6 py-12 lg:p-48 transition-colors duration-700 ${scrolled ? "bg-white" : "bg-[#b0c999]"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Spotlight Heading with Leaf Icon - Aligned to the Left */}
        <div className="hidden md:flex w-[10%] border-b border-[#c97b63] pb-8">
          <h2 className="text-[#c97b63] text-md md:text-xl uppercase font-bold tracking-wide">
            Spotlight
          </h2>
        </div>

        {/* Content Columns */}
        <div className="flex flex-col md:flex-row justify-between py-8">
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <p className="mb-4 text-md md:text-xl text-cyan-950">
              We are delighted to announce that our Banking & Finance, Capital Markets, Competition/Antitrust, Corporate/M&A, Dispute Resolution, Arbitration, International & Cross-Border Capabilities and Projects, Infrastructure & Energy practice areas were ranked by Chambers Global 2025.
            </p>
            <p className="text-md md:text-xl text-cyan-950">
              Zia Mody, Bahram N. Vakil and Ajay Bahl have been ranked as “Eminent Practitioners” in recognition of their years of experience and expertise.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8">
            <p className="text-md md:text-xl text-cyan-950">
              Senior Partners, Agnik Bhattacharyya, Anand Shah, Anil Kasturi, Anuja Tiwari, Ashwath Rau, Darshika Kothari, Lionel D’Almeida, Nandish Vyas, Nilanjana Singh, Rajendra Barot, Ram Kumar Poornachandran, Roxanne Anderson, Srinath Dasari, Varoon Chandra and Vijayendra Pratap Singh have also been ranked along with our Partners, Aditya Jalan, Bharat Budholia, Dinoo Muthappa, Hemangini Dadwal, Ishan Handa, Kirthi Srinivas and Toshit Shandilya.
            </p>
          </div>
        </div>

        {/* View Rankings Button - Centered */}
        <div className="w-full relative flex justify-center">
        <img src={pat} className="absolute hidden lg:block w-52 left-0" alt="" />
          <button className="mt-8 border text-lg border-[#004b87] font-bold text-[#004b87] px-5 py-2 rounded hover:bg-[#004b87] hover:text-white transition">
            View Rankings
          </button>
        </div>
      </div>

      {/* Decorative bottom icon */}
      <div className="absolute bottom-8 right-12">
        <img
          src="/assets/decorative-icon.svg"
          alt="decor"
          className="w-12 h-12"
        />
      </div>
    </section>
  );
};

export default SpotlightSection;