import React, { useState } from "react";
import "./timeline.css"; // custom CSS animations
import Section1 from "../components/Section1";
import SpotlightSection from "../components/SpotlightSection";
import Timeline2 from "../components/Timeline2";
import People from "../components/People";
import About from "../components/About";
import seal from "../assets/pattern3.png"
import Marque from "../components/Marque";
import Footer from "../components/Footer";
const Hero = () => {
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

    return (
        <div className="relative">
            {/* Fixed Hero Section */}
            <section className="fixed top-0 left-0 w-full h-screen bg-[#002346] text-white flex flex-col justify-center items-center font-sans overflow-hidden z-0">
                <div className="relative w-4/5 max-w-6xl flex items-center justify-between">
                    {/* Timeline */}
                    <div className="flex-1 flex items-center justify-between relative pr-24">
                        {/* Horizontal Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/30 transform -translate-y-1/2" />

                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center cursor-pointer w-1/3"
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                            >
                                {/* Dot */}
                                <div className="absolute top-1/2 -translate-y-1/2">
                                    <div
                                        className={`transition-all duration-500 rounded-full ${active === index
                                            ? "w-4 h-4 bg-[#c97b63] scale-125"
                                            : "w-3 h-3 bg-white"
                                            }`}
                                    ></div>
                                </div>

                                {/* Title + Description */}
                                <div className="flex flex-col items-center mt-12">
                                    <div
                                        className={`transition-colors duration-300 text-xl ${active === index
                                            ? "text-[#c97b63] font-medium text-2xl"
                                            : "text-white opacity-70"
                                            }`}
                                    >
                                        {item.title}
                                    </div>

                                    {/* Description with fade-in */}
                                    {active === index && (
                                        <div className="fade-in mt-4 w-64 text-center text-[#a8d8a2] text-base leading-relaxed">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Static "Unmatched" Section */}
                    <div className="pl-6 border-l border-white/30">
                        <div className="text-4xl font-light text-[#c97b63]">Unmatched</div>
                    </div>
                </div>
            </section>

            {/* Scrollable Content */}
            <main className="relative z-10 mt-[100vh]">
                <section className=" bg-white flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <Section1 />
                    </div>
                </section>

                <section className=" bg-white">
                    <div className="">
                        <SpotlightSection />
                    </div>
                </section>
                <section className=" bg-white flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <Timeline2 />
                    </div>
                </section>

                <section className=" bg-white flex items-center justify-center">
                    <div className="w-full max-w-7xl">
                        <People />
                    </div>
                </section>

                <section className=" bg-gray-100 flex items-center justify-center">
                    <div className="w-full relative max-w-7xl">
                        <div className="flex-shrink-0">
                            <img
                                src={seal}
                                alt="decorative seal"
                                className="w-40 h-40 absolute -left-52 md:w-56 md:h-56 object-contain"
                            />
                        </div>
                        <About />
                    </div>
                </section>


                <section className=" bg-gray-100 ">
                   <div className="">
                   <Marque/>
                   </div>
                </section>

               
                <section className=" bg-gray-100 ">
                   <div className="">
                   <Footer/>
                   </div>
                </section>
            </main>
        </div>
    );
};

export default Hero;
