import React from "react";
import arrow from "../assets/right-arrow-1.svg"; // your decorative image

const About = () => {
  return (
    <section className="max-w-7xl relative mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="flex flex-col justify-around items-center md:items-start gap-10 md:gap-16">
        {/* LEFT - Decorative Image */}

        {/* MIDDLE - Text Content */}
        <div className="flex flex-col text-center p-11 justify-around md:text-left">
          <h2 className="text-[#004b87] text-2xl md:text-3xl font-semibold mb-4">
            About
          </h2>
          <p className="text-[#002b45] text-base md:text-lg  
  font-[400]
  whitespace-pre-line 
  text-justify leading-relaxed">
            Founded in 2025, ASTREUS LEGAL is a contemporary law firm built on the principles of precision, integrity, and unwavering client commitment. The firm brings together a team of dynamic legal professionals dedicated to delivering strategic, solution-driven, and ethically grounded representation across diverse practice areas.
            With core strengths in Criminal Litigation, Civil Law, Matrimonial Disputes, and Banking & Finance, ASTREUS LEGAL blends rigorous legal analysis with a practical, result-oriented approach. Every matter is handled with meticulous preparation, clear strategy, and a deep understanding of the personal and commercial realities clients face.
            What sets the firm apart is its client-centric philosophy. ASTREUS LEGAL prioritises transparent communication, personalised attention, and tailored legal solutions that reflect the unique needs of each case. Whether dealing with complex criminal proceedings, sensitive matrimonial disputes, intricate civil matters, or financially significant banking issues, the firm ensures that every client receives guidance grounded in both compassion and competence.
            Driven by a commitment to excellence, ASTREUS LEGAL embraces modern legal practices, research-driven advocacy, and continuous professional growth. The firm’s mission is simple yet powerful: to protect rights, uphold justice, and provide dependable legal support with professionalism and dignity.
          </p>
        </div>
     
      </div>
    </section>
  );
};

export default About;
