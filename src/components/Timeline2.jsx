import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from "../assets/left-arrow.svg";
import ArrowRight from "../assets/right-arrow.svg";

const Timeline2 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const newsData = [
    {
      title: "Strengthening the appellate pillar of India’s competition framework",
      date: "Sep 10, 2025",
      tags: "Competition / Antitrust",
      category: "Publications",
    },
    {
      title: "Discrimination and Harassment in India",
      date: "Sep 09, 2025",
      tags: "Employment Labour & Benefits",
      category: "Publications",
    },
    {
      title: "Third Amendment to the GNA Regulations – Key Highlights",
      date: "Sep 08, 2025",
      tags: "Energy, Infrastructure",
      category: "Publications",
    },
    {
      title: "Third Amendment to the GNA Regulations – Key Highlights",
      date: "Sep 08, 2025",
      tags: "Energy, Infrastructure",
      category: "Publications",
    },
    {
      title: "Third Amendment to the GNA Regulations – Key Highlights",
      date: "Sep 08, 2025",
      tags: "Energy, Infrastructure",
      category: "Publications",
    },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="w-5 h-5 rounded-full bg-[#B6654C] mx-auto" />
        <div className="w-px h-12 bg-[#B6654C] mx-auto" />
        <div className="w-12 border-t border-[#B6654C] mx-auto mb-3" />
        <h3 className="text-[#B6654C] font-bold uppercase tracking-wider text-lg">
          Latest Resources
        </h3>
        <div className="w-12 border-t border-[#B6654C] mx-auto mt-2" />
      </div>

      {/* Swiper */}
      <div className="">
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {newsData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="px-2">
                <div className="text-xs uppercase text-[#B6654C] tracking-wide mb-2 font-semibold">
                  {item.category}
                </div>
                <div className="border-t border-[#B6654C] pt-3">
                  <h4 className="text-lg font-medium font-play text-[#004b87] leading-snug hover:underline cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm italic text-gray-600">
                    {item.date} | {item.tags}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      {/* Custom Navigation Buttons */}
      <button ref={prevRef} className="absolute left-0 bottom-0 md:top-2/3 md:-bottom-0 -translate-y-1/2  gap-2 text-[#B6654C] z-10">
        <img src={ArrowLeft} alt="Prev" className="w-12 h-10" />

      </button>
      <button ref={nextRef} className="absolute right-0 bottom-0 md:top-2/3 md:-bottom-0 -translate-y-1/2 gap-2 text-[#B6654C] z-10">
        <img src={ArrowRight} alt="Next" className="w-12 h-10" />
      </button>
    </div>
  );
};

export default Timeline2;
