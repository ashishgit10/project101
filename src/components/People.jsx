import { Link } from "react-router-dom";
import people from "./Data/people.js";

import "../global.css"

const People = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 sm:py-10 py-10">
      <h3 className="text-[#004b87] text-2xl md:text-3xl font-play font-semibold mb-8 text-center md:text-left">
        The People <br /> of Astreus Legal
      </h3>

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
              <Link to={`/advocate/${person.id}`}>
                <button className="btn-border-reveal font-bold px-4 py-2 rounded transition">
                  View Profile
                </button>
              </Link>
            </div>
          </div>

        ))}
      </div>
    </section>
  );
};

export default People;
