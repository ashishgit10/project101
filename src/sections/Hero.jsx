import { useState, useEffect } from "react";
import "./timeline.css"; // custom CSS animations

import SpotlightSection from "../components/SpotlightSection";
import Timeline2 from "../components/Timeline2";
import People from "../components/People";
import About from "../components/About";
import seal from "../assets/pattern3.png";
import Marque from "../components/Marque";
import Footer from "../components/Footer";
import logo from "../assets/blind1.jpeg";
import logo1 from "../assets/logo-justice.jpeg";

const Hero = () => {
  const [bgImage, setBgImage] = useState(logo);

  // Update background based on screen size
  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? logo1 : logo); // md breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mt-[100vh]">
      {/* Responsive Hero Background */}
      <section
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${bgImage})`,    backgroundPosition: "27% center", }}
      ></section>

      <main className="relative z-10">
        {/* Spotlight Section */}
        <section className="bg-[#002346]">
          <SpotlightSection />
        </section>

        {/* Timeline Section */}
        <section className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl">
            <Timeline2 />
          </div>
        </section>

        {/* People Section */}
        <section className="bg-white flex items-center justify-center">
          <div className="w-full max-w-7xl">
            <People />
          </div>
        </section>

        {/* About Section with Decorative Seal */}
        <section className="bg-gray-100 flex items-center justify-center">
          <div className="w-full relative max-w-7xl">
            <img
              src={seal}
              alt="decorative seal"
              className="w-40 h-40 absolute -left-52 md:w-56 md:h-56 object-contain"
            />
            <About />
          </div>
        </section>

        {/* Marquee Section */}
        <section className="bg-gray-100">
          <Marque />
        </section>

        {/* Footer Section */}
        <section className="bg-gray-100">
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Hero;
