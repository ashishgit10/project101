import React, { useRef, useState, useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import Person1 from "../assets/Aniket_Singh.jpeg";
import Person2 from "../assets/Ashish_Chaudhary.jpeg";
import Person3 from "../assets/Isha_Baloni.jpeg";
import Person4 from "../assets/Sreeraj_Prabhakaran_K.jpeg";
import Pattern from "../assets/pattern2.png";
import qot from "../assets/quote.svg";
import ellipse from "../assets/ellipse1.svg";

const people = [
  { name: "Aniket Singh", image: Person1 },
  { name: "Ashish Chaudhary", image: Person2 },
  { name: "Isha Baloni", image: Person3 },
  { name: "Sreeraj Prabhakaran K", image: Person4 },
];

// ✅ SlideCard
const SlideCard = React.memo(function ({ data, dataIndex }) {
  const person = data[dataIndex];
  return (
    <div className="flex flex-col items-center">
      <img
        src={person.image}
        alt={person.name}
        className="w-72 h-[400px] object-cover shadow-md rounded"
        draggable={false}
      />
      <p className="mt-2 text-[#004b87] font-semibold uppercase tracking-wide text-sm">
        {person.name}
      </p>
    </div>
  );
});

const People = () => {
  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.goNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6  pb-10 ">
      <h3 className="text-[#004b87] text-2xl md:text-3xl font-play font-semibold mb-8 text-center md:text-left">
        The People <br /> of AZB
      </h3>

      {/* ✅ Responsive Flexbox */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
        {/* LEFT - Carousel */}
        <div className="w-full md:w-1/2 lg:w-2/3 flex justify-center">
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = 3;
              if (parentWidth <= 768) currentVisibleSlide = 1;
              else if (parentWidth <= 1024) currentVisibleSlide = 3;

              return (
                <StackedCarousel
                  ref={carouselRef}
                  data={people}
                  slideComponent={SlideCard}
                  slideWidth={320}
                  carouselWidth={parentWidth}
                  maxVisibleSlide={3}
                  currentVisibleSlide={currentVisibleSlide}
                  useGrabCursor
                  customScales={[1, 0.85, 0.7]}
                  transitionTime={500}
                  onActiveSlideChange={(idx) => setActiveIndex(idx)}
                />
              );
            }}
          />
        </div>

        {/* RIGHT - Quote Box */}
        <div className="relative mx-40 md:mx-0 border border-[#B6654C] w-full md:w-1/2 lg:w-1/3 p-8 md:p-10 min-h-[320px] md:min-h-[400px] flex flex-col items-center justify-start text-center">
          {/* Top Quote SVG */}
          <div className="flex justify-center absolute -top-5 bg-white px-4">
            <img src={qot} alt="quote mark" className="w-8 h-8" />
          </div>

          {/* Quote Text */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[#B6654C] italic text-[26px] text-base md:text-lg leading-relaxed mb-6">
              We’ve never been about size; we’ve always been about quality.
            </p>
            <p className="mt-2 text-[#B6654C] relative z-10 font-semibold text-sm md:text-base">
              Bahram N. Vakil, Founding Partner
            </p>
          </div>

          {/* Bottom Patterns */}
          <img
            src={Pattern}
            alt="decorative pattern"
            className="absolute bottom-0 right-0 w-20 md:w-32"
          />
        </div>
      </div>

      {/* Bottom Button */}
      <div className="text-center mt-10">
        <button className="border border-[#004b87] text-[#004b87] px-6 py-3 rounded hover:bg-[#004b87] hover:text-white transition">
          Meet our People
        </button>
      </div>
    </section>
  );
};

export default People;
