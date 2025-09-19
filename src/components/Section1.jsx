import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from "../assets/left-arrow.svg";
import ArrowRight from "../assets/right-arrow.svg";

const Section1 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const newsData = [
    {
      title: "CleanMax Enviro Energy Solutions Limited Promoter Group...",
      date: "Aug 27, 2025",
      tags: "Capital Markets, Competition / Antitrust, Corporate / M&A",
      category: "Deals",
    },
    {
      title: "Vistaar Financial Services Pvt Ltd and its existing majority...",
      date: "Aug 26, 2025",
      tags: "Private Equity & Venture Capital",
      category: "Deals",
    },
    {
      title: "Amansa Investments Limited on its acquisition of a minority...",
      date: "Aug 26, 2025",
      tags: "Corporate / Mergers & Acquisitions",
      category: "Deals",
    },
    {
      title: "Amansa Investments Limited on its acquisition of a minority...",
      date: "Aug 26, 2025",
      tags: "Corporate / Mergers & Acquisitions",
      category: "Deals",
    },
    {
      title: "Amansa Investments Limited on its acquisition of a minority...",
      date: "Aug 26, 2025",
      tags: "Corporate / Mergers & Acquisitions",
      category: "Deals",
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
    <div className="relative w-11/12 mx-auto">
      {/* Heading */}
      <h3 className="text-[#0E2B4D] font-bold uppercase tracking-wider mb-6">
        In The News
      </h3>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {newsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div>
              <div className="text-sm uppercase text-[#c97b63] tracking-wide mb-2">
                {item.category}
              </div>
              <div className="border-t-2 border-[#c97b63] pt-3">
                <h4 className="text-xl font-medium font-play text-[#004b87] leading-snug hover:underline cursor-pointer">
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

      {/* Custom Navigation Buttons */}
      <div className="">

        <div className="absolute -bottom-60 inset-y-0 -left-6 md:bottom-0 flex items-center z-10">
          <button ref={prevRef} className="p-2">
            <img src={ArrowLeft} alt="Prev" className="w-12 h-10" />
          </button>
        </div>

        <div className="absolute -bottom-60 inset-y-0 -right-6 md:bottom-0 flex items-center z-10">
          <button ref={nextRef} className="p-2">
            <img src={ArrowRight} alt="Next" className="w-12 h-10" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Section1;
