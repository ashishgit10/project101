
import Marquee from "react-fast-marquee"; // npm install react-fast-marquee
import LeafPattern from "../assets/pattern5.png"; // replace with your leaf asset
import arrow from "../assets/right-arrow-1.svg";
// sample logos
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo.jpeg";
import Logo4 from "../assets/logo3.png";
const logos = [Logo1, Logo2, Logo3, Logo4];

const Marque = () => {
    return (<>


        <div className=" bg-white w-full">
            <Marquee gradient={false} speed={40}>
                {logos.map((logo, idx) => (
                    <img
                        key={idx}
                        src={logo}
                        alt={`logo-${idx}`}
                        className="h-28 sm:h-16 md:h-36 mx-6 sm:mx-10 md:mx-12 object-contain"
                    />
                ))}
            </Marquee>
        </div>
        <section className="bg-[#0b2540] text-white relative">
            {/* ===================== Top Section ===================== */}

            <div className=" pt-12 md:max-w-1/2">

                <div className="w-full px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-10 lg:gap-0">

                    {/* first- Quote Box */}
                    <div className="flex-1 lg:ml-32 ml-0  order-1 lg:order-2">
                        <h3 className="text-[#9FD6B2] text-2xl font-play sm:text-3xl font-semibold mb-6 lg:text-left">
                            Impact
                        </h3>
                        <ul className="space-y-4 sm:space-y-6 text-[#B6654C] font-semibold">
                            {[
                                "PRO BONO ENGAGEMENTS",
                                "ENVIRONMENTAL, SOCIAL & CORPORATE GOVERNANCE",
                                "ADVOCACY",
                                "IMPACT FINANCING",
                            ].map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-2 sm:gap-3 border-b border-[#B6654C]/40 pb-2 text-sm sm:text-base md:text-lg"
                                >
                                    <img src={arrow} className="w-3" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* RIGHT - Impact List */}
                    {/*        <div className="relative border border-[#B6654C] p-6 sm:p-8 lg:p-10 flex-1 text-center order-2 lg:order-1">
                    
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0b2540] px-4">
                            <img
                                src={QuoteIcon}
                                alt="quote"
                                className="w-8 h-8 md:w-10 md:h-10"
                            />
                        </div>

                  
                        <p className="text-[#9FD6B2] font-play italic text-2xl lg:text-3xl sm:text-lg md:text-xl leading-relaxed mb-6">
                            We need to reflect on how privileged we are as a profession, on
                            what we believe in as human beings. The fact is, someone else is
                            doing the hard work.
                        </p>
                        <p className="text-[#9FD6B2] font-semibold text-sm sm:text-base md:text-lg">
                            Ajay Bahl, Co-Founder & Managing Partner
                        </p>

                
                        <img
                            src={Pattern}
                            alt="pattern"
                            className="absolute -bottom-8 sm:-bottom-10 right-0 w-20 sm:w-24 md:w-28 opacity-80"
                        />
                    </div> */}


                </div>
            </div>

            {/* ===================== Careers Section ===================== */}
            <div className="md:max-w-1/2 px-4 sm:px-6 lg:px-12 py-8 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-12">
                {/* LEFT - Careers List */}
                <div className="flex-1 lg:ml-32 ml-0 relative">
                    <h3 className="text-[#9FD6B2] font-play text-2xl sm:text-3xl font-semibold mb-6">
                        Careers
                    </h3>
                    <ul className="space-y-4 sm:space-y-6 text-[#B6654C] font-semibold">
                        {[
                            "CULTURE",
                            "TRAINING & DEVELOPMENT",
                            "OPPORTUNITIES",
                            "ALUMNI",
                            "INNOVATION",
                        ].map((item, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-2 sm:gap-3 border-b border-[#B6654C]/40 pb-2 text-sm sm:text-base md:text-lg"
                            >
                                <img src={arrow} className="w-3" /> {item}
                            </li>
                        ))}
                    </ul>

                    {/* Decorative leaf bottom left */}

                </div>

                {/* RIGHT - Quote Box */}
                {/* <div className="relative border border-[#B6654C] p-6 sm:p-8 lg:p-10 flex-1 text-center">
                 
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0b2540] px-4">
                        <img
                            src={QuoteIcon}
                            alt="quote"
                            className="w-8 h-8 md:w-10 md:h-10"
                        />
                    </div>

               
                    <p className="text-[#9FD6B2] font-play italic text-2xl lg:text-3xl sm:text-lg md:text-xl leading-relaxed mb-6">
                        We’re about honest conversations and greater collaboration between
                        the partners. We are mandated to share knowledge, and are less
                        proprietorial about our territory. What benefits one, must benefit
                        all.
                    </p>
                    <p className="text-[#9FD6B2] font-semibold text-sm sm:text-base md:text-lg">
                        Zia J. Mody, Co-Founder & Managing Partner
                    </p>

                </div> */}
            </div>
            <img
                src={LeafPattern}
                alt="leaf"
                className="absolute -bottom-6 right-0 md:left-16 w-28 sm:w-32 md:w-40 opacity-80"
            />
        </section>
    </>
    );
};

export default Marque;
