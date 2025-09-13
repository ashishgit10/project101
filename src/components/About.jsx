import React from "react";
import arrow from "../assets/right-arrow-1.svg"; // your decorative image

const About = () => {
    return (
        <section className="max-w-7xl relative mx-auto px-4 md:px-8 py-12 md:py-20">

            <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-10 md:gap-16">
                {/* LEFT - Decorative Image */}


                {/* MIDDLE - Text Content */}
                <div className="flex flex-col text-center justify-around md:text-left">
                    <h2 className="text-[#004b87] text-2xl md:text-3xl font-semibold mb-4">
                        About
                    </h2>
                    <p className="text-[#002b45] text-base md:text-lg leading-relaxed max-w-xl">
                        Founded in 2004, the Firm’s clear and singular purpose is to provide
                        reliable, practical and full-service advice across sectors. Our
                        greatest strength is an in-depth understanding of legal, regulatory
                        and commercial environments, in India and elsewhere.
                    </p>
                </div>

                {/* RIGHT - Sidebar Links */}
                <div className="md:flex md:flex-col items-start hidden text-sm md:text-base gap-4">
                    {[
                        { label: "PURPOSE", href: "#" },
                        { label: "HISTORY", href: "#" },
                        { label: "AWARDS & RANKINGS", href: "#" },
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="flex items-center gap-2 text-[#B6654C] hover:text-[#8a4c38] transition"
                        >
                            {/* Triangle Icon */}
                            <img src={arrow} className="w-3" />
                            <span className="uppercase tracking-wide border-b border-[#B6654C] pb-1">
                                {item.label}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
