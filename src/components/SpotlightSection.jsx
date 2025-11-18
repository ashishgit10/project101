import React, { useState, useEffect, useRef } from "react";


const SpotlightSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);

  const items = [
    {
      title: "Energy",
      description:
        "The energy we bring to every engagement builds true partnership.",
    },
    {
      title: "Expertise",
      description:
        "Our expertise across sectors and practice areas runs deep, and we continue to add to our knowledge.",
    },
    {
      title: "Execution",
      description: "Attention to detail ensures flawless implementation.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setScrolled(rect.top < 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Perfectly Centered Desktop Timeline */}
      <div className="relative w-full flex justify-center items-center py-10 hidden lg:flex">
        <div className="w-[90%] max-w-7xl relative md:mt-10 flex items-start justify-between">
          {/* Horizontal line (centered full width) */}
          <div className="absolute top-[10px] left-32 right-[315px] h-[1px] bg-white/30" />

          {/* Timeline items */}
          <div className="flex justify-between w-full">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center cursor-pointer"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Dot */}
                <div
                  className={`z-10 transition-all duration-500 rounded-full ${
                    active === index
                      ? "w-4 h-4 bg-[#c97b63] scale-125"
                      : "w-3 h-3 bg-[#c97b63]"
                  }`}
                />

                {/* Title */}
                <div
                  className={`mt-4 text-xl transition-all duration-500 ${
                    active === index
                      ? "text-[#c97b63] font-semibold translate-y-[-10px]"
                      : "text-[#c97b63]"
                  }`}
                >
                  {item.title}
                </div>

                {/* Description */}
                <div
                  className={`mt-2 w-64 text-[#a8d8a2] text-xl leading-relaxed tracking-wide transition-all duration-500 ${
                    active === index
                      ? "translate-y-0 opacity-100"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Unmatched perfectly aligned to right end */}
          <div className="flex items-center justify-center border-t border-b border-white/30 h-full">
            <h2 className="text-4xl font-semibold text-[#c97b63] py-2">
              Unmatched
            </h2>
          </div>
        </div>
      </div>

      <div className="w-full px-6 pb-10 pt-36 space-y-10 lg:hidden overflow-y-auto">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-2 mb-4">
              <span className="w-2 h-2 bg-[#c97b63] rounded-full"></span>
              <div className="flex-1 h-[1px] bg-white/30"></div>
            </div>
            <h3 className="text-2xl font-light text-[#c97b63]">{item.title}</h3>
            <p className="mt-2 text-[#a8d8a2] text-[21px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
        <div className="pt-6 border-t border-white/30">
          <h2 className="text-4xl font-light text-[#c97b63]">Unmatched</h2>
        </div>
      </div>

    {/*   <section
        ref={sectionRef}
        className={`py-24 flex flex-col lg:pt-12 px-6 transition-colors duration-700 ${
          scrolled ? "bg-white" : "bg-[#b0c999]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col">
        
          <div className="hidden md:flex w-[10%] border-b border-[#c97b63] pb-8">
            <h2 className="text-[#c97b63] text-md md:text-xl uppercase font-bold tracking-wide">
              Spotlight
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between py-8">
       
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <p className="mb-4 text-md md:text-xl text-cyan-950">
                We are delighted to announce that our Banking & Finance, Capital
                Markets, Competition/Antitrust, Corporate/M&A, Dispute
                Resolution, Arbitration, International & Cross-Border
                Capabilities and Projects, Infrastructure & Energy practice
                areas were ranked by Chambers Global 2025.
              </p>
              <p className="text-md md:text-xl text-cyan-950">
                Zia Mody, Bahram N. Vakil and Ajay Bahl have been ranked as
                “Eminent Practitioners” in recognition of their years of
                experience and expertise.
              </p>
            </div>

 
            <div className="md:w-1/2 md:pl-8">
              <p className="text-md md:text-xl text-cyan-950">
                Senior Partners, Agnik Bhattacharyya, Anand Shah, Anil Kasturi,
                Anuja Tiwari, Ashwath Rau, Darshika Kothari, Lionel D’Almeida,
                Nandish Vyas, Nilanjana Singh, Rajendra Barot, Ram Kumar
                Poornachandran, Roxanne Anderson, Srinath Dasari, Varoon Chandra
                and Vijayendra Pratap Singh have also been ranked along with our
                Partners, Aditya Jalan, Bharat Budholia, Dinoo Muthappa,
                Hemangini Dadwal, Ishan Handa, Kirthi Srinivas and Toshit
                Shandilya.
              </p>
            </div>
          </div>

          <div className="w-full relative flex justify-center">
            <img src={pat} className="absolute hidden lg:block w-52 left-0" alt="" />
            <button className="mt-8 border text-lg border-[#004b87] font-bold text-[#004b87] px-5 py-2 rounded hover:bg-[#004b87] hover:text-white transition">
              View Rankings
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default SpotlightSection;
