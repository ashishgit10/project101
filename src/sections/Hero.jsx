import { useState } from "react";
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

            <section className="fixed top-0 left-0 w-full h-screen bg-[#002346] text-white flex flex-col justify-center items-center font-sans overflow-hidden z-0">

                {/* ✅ Desktop Timeline */}
                <div className="relative  max-w-6xl hidden lg:flex items-start">
                    {/* Timeline line */}
                    <div className="absolute top-2 left-0 right-82 h-[1px] bg-white/30"></div>

                    {/* Timeline items */}
                    <div className="flex flex-1 justify-between mr-5">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-start cursor-pointer"
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                            >
                                {/* Dot */}
                                <div
                                    className={`z-10 transition-all duration-500 rounded-full ${active === index
                                            ? "w-4 h-4 bg-[#c97b63] scale-125"
                                            : "w-3 h-3 bg-[#c97b63]"
                                        }`}
                                />

                                {/* Title with animation */}
                                <div
                                    className={`mt-4 text-xl transition-all duration-500 ${active === index
                                            ? "text-[#c97b63] font-semibold text-xl translate-y-[-10px]"
                                            : "text-[#c97b63]  translate-y-0"
                                        }`}
                                >
                                    {item.title}
                                </div>

                                {/* Description with fade-in */}
                                <div
                                    className={`mt-2 w-64 text-center text-[#a8d8a2] text-xl leading-relaxed tracking-wide transition-all duration-500 ${active === index
                                            ? " translate-y-0"
                                            : "opacity-0 translate-y-4 pointer-events-none"
                                        }`}
                                >
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side Unmatched */}
                    <div className="pl-6 border-t border-b border-white/30 flex items-center">
                        <div className="text-4xl font-semibold py-5 text-[#c97b63]">Unmatched</div>
                    </div>
                </div>

                {/* ✅ Mobile Vertical Layout (unchanged) */}
                <div className="w-full px-6 pb-10 pt-36 space-y-10 lg:hidden overflow-y-auto">
                    {items.map((item, index) => (
                        <div key={index}>
                            {/* Dot + Line */}
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="w-2 h-2 bg-[#c97b63] rounded-full"></span>
                                <div className="flex-1 h-[1px] bg-white/30"></div>
                            </div>
                            {/* Title */}
                            <h3 className="text-2xl font-light text-[#c97b63]">
                                {item.title}
                            </h3>
                            {/* Description */}
                            <p className="mt-2 text-[#a8d8a2] text-[21px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}

                    {/* Unmatched */}
                    <div className="pt-6 border-t border-white/30">
                        <h2 className="text-4xl font-light text-[#c97b63]">Unmatched</h2>
                    </div>
                </div>
            </section>


            <main className="relative z-10 mt-[100vh]">

              {/*   <section className=" bg-white flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <Section1 />
                    </div>
                </section> */}

                <section className=" bg-white">
                    <div className="">
                        <SpotlightSection />
                    </div>
                </section>

                <section className=" bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
                        <Marque />
                    </div>
                </section>

                <section className=" bg-gray-100 ">
                    <div className="">
                        <Footer />
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Hero;
