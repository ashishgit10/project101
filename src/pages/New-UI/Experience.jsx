import city from "../../assets/pattern5.png";
import notebook from "../../assets/logo.jpeg";
import { ArrowRight } from "lucide-react";
import "../../global.css";
function Experience() {
  function Feature({ image, label, title, copy, link }) {
    return (
      <article className="grid grid-cols-[110px_1fr] gap-4 sm:grid-cols-[160px_1fr] sm:gap-5">
        <img
          className="h-[120px] w-[110px] object-cover sm:h-[125px] sm:w-[160px]"
          src={image}
          alt=""
        />
        <div>
          <p className="mb-2 text-[8px] font-semibold tracking-[.2em] text-[#bd9154]">
            {label}
          </p>
          <h3 className="font-serif text-xl leading-none">{title}</h3>
          <p className="mt-2 text-[10px] leading-snug">{copy}</p>
          <a
            className="mt-2 inline-flex items-center gap-2 border-b pb-1 text-[10px]"
            href="#contact"
          >
            {link} <ArrowRight size={14} />
          </a>
        </div>
      </article>
    );
  }
  return (
    <section id="insights" className="bg-[#f5f3ed] py-9">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] gap-7 sm:w-[89vw] md:grid-cols-2 lg:grid-cols-[1fr_1fr_.8fr]">
        <Feature
          image={city}
          label="SELECTED EXPERIENCE"
          title={
            <>
              Experience That
              <br />
              Builds Confidence
            </>
          }
          copy="A track record of advising clients across industries and jurisdictions on complex and high-stakes matters."
          link="View All Matters"
        />
        <Feature
          image={notebook}
          label="INSIGHTS & PERSPECTIVES"
          title="Latest Insights"
          copy="Thoughts, analysis and updates on key legal, regulatory and commercial developments."
          link="View All Articles"
        />
        <div className="border-l border-slate-300 pl-5">
          {[
            "The Evolving Landscape of India’s Insolvency Regime",
            "Key Regulatory Changes in India’s Data Protection Framework",
            "Recent Trends in Commercial Arbitration in India",
          ].map((item) => (
            <a
              className="flex justify-between gap-3 border-b border-slate-300 py-3 text-[10px] last:border-0"
              href="#contact"
              key={item}
            >
              {item}
              <ArrowRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
