import React from "react";

import Person1 from "../assets/Aniket_Singh.jpeg";
import Person2 from "../assets/Ashish_Chaudhary.jpeg";
import Person3 from "../assets/Isha_Baloni.jpeg";
import Person4 from "../assets/Sreeraj_Prabhakaran_K.jpeg";
import Pattern from "../assets/pattern2.png";
import qot from "../assets/quote.svg";

const people = [
  { name: "Aniket Singh", image: Person1 },
  { name: "Isha Baloni", image: Person3 },
  { name: "Sreeraj Prabhakaran K", image: Person4 },
  { name: "Ashish Chaudhary", image: Person2 },
];

const People = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
      <h3 className="text-[#004b87] text-2xl md:text-3xl font-play font-semibold mb-8 text-center md:text-left">
        The People <br /> of Astreus Legal
      </h3>

      {/* ✅ Horizontal People Section */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-56 text-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-56 h-72 object-cover shadow-md rounded-md"
            />
            <p className="mt-3 text-[#004b87] font-semibold uppercase tracking-wide text-sm">
              Adv. {person.name}
            </p>
            <div className="text-center mt-10">
              <button className="border border-[#004b87] text-[#004b87] font-bold px-6 py-3 rounded hover:bg-[#004b87] hover:text-white transition">
                View Profile
              </button>
            </div>
          </div>

        ))}
      </div>

      {/* ✅ Bottom Button */}

    </section>
  );
};

export default People;
