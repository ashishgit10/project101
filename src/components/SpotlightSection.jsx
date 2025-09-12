import React, { useState, useEffect, useRef } from "react";

const SpotlightSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // Trigger when top of section has passed 100px from viewport top
     
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
      className={`min-h-screen flex items-center transition-colors duration-700 ${scrolled ? "bg-white" : "bg-[#b0c999]"
        }`}
    >
      <div className="flex flex-col">


        <h2 className="text-[#c97b63] uppercase tracking-wide border-b border-[#c97b63] pb-2 mb-4">
          Spotlight
        </h2>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
          {/* Left Column */}
          <div>

            <p className="text-lg leading-relaxed mb-6">
              We are delighted to announce that our Banking & Finance, Capital
              Markets, Competition/Antitrust, Corporate/M&A, Dispute Resolution,
              Arbitration, International & Cross-Border Capabilities and Projects,
              Infrastructure & Energy practice areas were ranked by Chambers Global
              2025.
            </p>
            <p className="mb-6">
              Zia Mody, Bahram N. Vakil and Ajay Bahl have been ranked as “Eminent
              Practitioners” in recognition of their years of experience and
              expertise.
            </p>
            <button className="border border-[#004b87] text-[#004b87] px-5 py-2 rounded hover:bg-[#004b87] hover:text-white transition">
              View Rankings
            </button>
          </div>

          {/* Right Column */}
          <div>
            <p className="leading-relaxed">
              Senior Partners, Agnik Bhattacharyya, Anand Shah, Anil Kasturi, Anuja
              Tiwari, Ashwath Rau, Darshika Kothari, Lionel D’Almeida, Nandish
              Vyas, Nilanjana Singh, Rajendra Barot, Ram Kumar Poornachandran,
              Roxanne Anderson, Srinath Dasari, Varoon Chandra and Vijayendra Pratap
              Singh have also been ranked along with our Partners, Aditya Jalan,
              Bharat Budholia, Dinoo Muthappa, Hemangini Dadwal, Ishan Handa, Kirthi
              Srinivas and Toshit Shandilya.
            </p>
          </div>
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
