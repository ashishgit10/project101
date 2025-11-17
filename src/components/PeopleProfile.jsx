import { useParams } from "react-router-dom";
import peopleData from "./Data/people.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function PeopleProfile() {
    const { id } = useParams();

    const person = peopleData.find((p) => p.id === id);

    if (!person) {
        return <h2 className="text-center py-10 text-red-600">Profile not found</h2>;
    }

    return (
        <>
            <Navbar />

            <section className="max-w-4xl mx-auto py-24 px-5">
                <img
                    src={person.image}
                    alt={person.name}
                    className="w-64 h-80 object-cover mx-auto rounded shadow-[10px_10px_0px_#e8b520]"
                />

                <h1 className="text-3xl font-bold text-center mt-6 text-[#004b87]">
                    Adv. {person.name}
                </h1>

                <p className="  text-gray-700 mt-6
  text-lg 
  leading-relaxed 
  font-[400]
  whitespace-pre-line 
  text-justify
  max-w-6xl
  mx-auto">
                    {person.description}
                </p>
            </section>
            <Footer />

        </>
    );
}
