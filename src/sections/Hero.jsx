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
import logo from "../assets/logo-bg.png"
const Hero = () => {


    return (
        <div className="relative mt-[100vh]">
            <section className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10">
                <img
                    src={logo}
                    alt="Astreus Banner"
                    className="w-full h-full object-cover object-center md:object-[center_40%] md:scale-80"
                />
            </section>
            <main className="relative z-10 ">

                {/*   <section className=" bg-white flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
                    <div className="w-full max-w-7xl">
                        <Section1 />
                    </div>
                </section> */}

                <section className="bg-[#002346]">
                    <div>
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
