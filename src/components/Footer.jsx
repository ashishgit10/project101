import React from "react";
import Logo from "../assets/logo1.png"; // your logo
import Linkedin from "../assets/linkedin.png";
import Rss from "../assets/icon-rss.svg";
import Whatsapp from "../assets/whatsapp-icon.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f5f1e9] text-[#003366] py-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left: Logo + Tagline */}
        <div className="flex flex-col items-start">
          <p className="font-semibold flex items-center gap-2 cursor-pointer">
            Stay in the loop <span className="text-xl">→</span>
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-col space-y-2 text-sm">
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Use
          </a>
        </div>

        {/* Right: Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-4 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Rss} alt="RSS" className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 top-6 md:static animate-bounce border text-xl border-[#004b87] rounded-full p-3 hover:bg-[#004b87] hover:text-white transition"
        >
         {/*  <FaArrowUp className="text-[#004b87]" /> */}⬆️
        </button>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-8 text-sm text-[#003366]">
        © 2025, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
