import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Linkedin, Instagram } from "lucide-react";
import courthouse from "../assets/blind1.jpeg";
import scales from "../assets/logo-justice.jpeg";
import notebook from "../assets/logo.jpeg";
import city from "../assets/pattern5.png";
import people from "../components/Data/people";

const practices = [
  [
    "Corporate &",
    "Commercial",
    "Advising on transactions, corporate governance, M&A and commercial contracts.",
  ],
  [
    "Dispute Resolution",
    "",
    "Strategic representation in litigation, arbitration and alternative dispute resolution.",
  ],
  [
    "Real Estate",
    "",
    "Support across real estate transactions, development, leasing and regulatory approvals.",
  ],
  [
    "Insolvency &",
    "Restructuring",
    "Guiding businesses through financial distress, restructuring and resolution processes.",
  ],
  [
    "Intellectual Property",
    "",
    "Protection and enforcement of your innovation, brand and creative assets.",
  ],
  [
    "Regulatory &",
    "Compliance",
    "Advisory on regulatory frameworks, sectoral laws and compliance strategy.",
  ],
];
const nav = [
  "Home",
  "About",
  "Practice Areas",
  "People",
  "Insights",
  "Contact",
];

function LegacyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const anchor = (item) =>
    item === "Home" ? "#home" : `#${item.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <div className="astreus-site">
      <header className="site-header">
        <Link className="wordmark" to="/" onClick={closeMenu}>
          <span>ASTREUS</span>
          <small>— LEGAL —</small>
        </Link>
        <nav className={menuOpen ? "site-nav open" : "site-nav"}>
          {nav.map((item) => (
            <a key={item} href={anchor(item)} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="mobile-contact" href="#contact" onClick={closeMenu}>
            Speak With Counsel <ArrowRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section id="home" className="hero">
          <img src={courthouse} alt="Classical courthouse columns" />
          <div className="hero-shade" />
          <div className="wrap hero-content">
            <p className="eyebrow">ASTREUS LEGAL</p>
            <h1>
              Counsel, Strategy.
              <br />
              Resolution.
            </h1>
            <p className="intro">
              Strategic legal counsel for complex matters. Astreus Legal advises
              businesses, institutions and individuals on matters where legal
              precision, commercial understanding and discretion matter.
            </p>
            <div className="actions">
              <a className="button gold" href="#practice-areas">
                Explore Our Practice <ArrowRight />
              </a>
              <a className="button outline" href="#contact">
                Speak With Counsel
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="approach dark-section">
          <div className="wrap approach-grid">
            <div>
              <p className="eyebrow">OUR APPROACH</p>
              <h2>
                Law demands more
                <br />
                than knowledge.
                <br />
                <em>It demands judgment.</em>
              </h2>
              <p>
                At Astreus Legal, we bring together deep legal expertise,
                commercial insight and a practical approach to help our clients
                navigate complexity, make informed decisions and achieve lasting
                outcomes.
              </p>
              <a className="text-link" href="#why">
                About Astreus Legal <ArrowRight />
              </a>
            </div>
            <div className="approach-image">
              <img src={scales} alt="Scales of justice and legal books" />
            </div>
            <p className="vertical-message">
              STRATEGIC
              <br />
              THINKING.
              <br />
              PRACTICAL
              <br />
              SOLUTIONS.
              <br />
              LASTING IMPACT.
            </p>
          </div>
        </section>
        <section id="practice-areas" className="practice dark-section">
          <div className="wrap">
            <p className="eyebrow">PRACTICE AREAS</p>
            <h2>Our Core Practice Areas</h2>
            <p className="practice-note">
              Tailored legal solutions for a dynamic world.
            </p>
            <div className="practice-grid">
              {practices.map(([first, second, copy], index) => (
                <article key={first} className="practice-card">
                  <span>0{index + 1}</span>
                  <h3>
                    {first}
                    <br />
                    {second}
                  </h3>
                  <p>{copy}</p>
                  <a href="#contact">
                    Learn More <ArrowRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="why" className="why">
          <div className="why-photo">
            <img src={notebook} alt="Astreus Legal notebook and pen" />
          </div>
          <div className="why-statement">
            <p className="eyebrow">WHY ASTREUS</p>
            <h2>
              Precision in advice.
              <br />
              Discipline in execution.
              <br />
              Clarity in complexity.
            </h2>
          </div>
          <div className="why-list">
            {[
              [
                "⚖",
                "DEEP EXPERTISE",
                "Specialised knowledge across key practice areas and industries.",
              ],
              [
                "♧",
                "CLIENT-CENTRIC",
                "Pragmatic advice, tailored to your business and goals.",
              ],
              ["♙", "DISCRETION & TRUST", "Absolute confidentiality. Always."],
              [
                "◎",
                "RESULTS-DRIVEN",
                "Focused on outcomes that create long-term value.",
              ],
            ].map(([icon, title, copy]) => (
              <div className="why-item" key={title}>
                <i>{icon}</i>
                <div>
                  <b>{title}</b>
                  <p>{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="people" className="people-section dark-section">
          <div className="wrap people-grid">
            <div className="people-intro">
              <p className="eyebrow">OUR PEOPLE</p>
              <h2>
                The Minds Behind
                <br />
                Astreus Legal
              </h2>
              <p>
                A team of experienced and forward-thinking professionals,
                committed to excellence.
              </p>
              <Link className="text-link" to="/peoplepage">
                Meet Our Team <ArrowRight />
              </Link>
            </div>
            {people.slice(0, 3).map((person, index) => (
              <article className="person" key={person.id}>
                <img src={person.image} alt={person.name} />
                <h3>{person.name}</h3>
                <p>{index === 0 ? "Managing Partner" : "Partner"}</p>
              </article>
            ))}
            <Link className="view-team" to="/peoplepage">
              View All
              <br />
              Professionals <ArrowRight />
            </Link>
          </div>
        </section>
        <section id="insights" className="features">
          <div className="wrap features-grid">
            <article className="feature-card">
              <img src={city} alt="City skyline" />
              <div>
                <p className="eyebrow">SELECTED EXPERIENCE</p>
                <h3>
                  Experience That
                  <br />
                  Builds Confidence
                </h3>
                <p>
                  A track record of advising clients across industries and
                  jurisdictions on complex and high-stakes matters.
                </p>
                <a className="text-link" href="#contact">
                  View All Matters <ArrowRight />
                </a>
              </div>
            </article>
            <article className="feature-card">
              <img src={notebook} alt="Legal notebook" />
              <div>
                <p className="eyebrow">INSIGHTS & PERSPECTIVES</p>
                <h3>Latest Insights</h3>
                <p>
                  Thoughts, analysis and updates on key legal, regulatory and
                  commercial developments.
                </p>
                <a className="text-link" href="#contact">
                  View All Articles <ArrowRight />
                </a>
              </div>
            </article>
            <div className="article-list">
              {[
                "The Evolving Landscape of India’s Insolvency Regime",
                "Key Regulatory Changes in India’s Data Protection Framework",
                "Recent Trends in Commercial Arbitration in India",
              ].map((item) => (
                <a href="#contact" key={item}>
                  {item}
                  <ArrowRight />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="footer">
        <div className="wrap footer-top">
          <div>
            <h2>Discuss your matter with us.</h2>
            <p>
              Astreus Legal <span /> New Delhi, India
            </p>
          </div>
          <a className="button gold" href="mailto:astreuslegal@gmail.com">
            Contact the Firm <ArrowRight />
          </a>
          <div className="footer-brand">
            <div className="wordmark">
              <span>ASTREUS</span>
              <small>— LEGAL —</small>
            </div>
            <div className="footer-links">
              {nav.map((item) => (
                <a href={anchor(item)} key={item}>
                  {item}
                </a>
              ))}
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom wrap">
          <span>© 2026 Astreus Legal. All rights reserved.</span>
          <span>Privacy Policy　/　Disclaimer</span>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchor = (item) =>
    item === "Home" ? "#home" : `#${item.toLowerCase().replaceAll(" ", "-")}`;
  const closeMenu = () => setMenuOpen(false);
  const wordmark =
    "flex flex-col items-center font-serif text-[18px] leading-none tracking-[.3em] text-[#dbb36d] sm:text-[22px]";
  const eyebrow =
    "mb-4 text-[10px] font-semibold tracking-[.24em] text-[#dbb36d]";
  const button =
    "inline-flex items-center justify-center gap-3 px-4 py-3 text-[10px] sm:px-5";
  return (
    <div className="overflow-hidden bg-[#031d3c] font-sans text-[#10294a]">
      <header className="absolute z-30 flex h-16 w-full items-center justify-between border-b border-white/15 bg-[#031d3c] px-5 text-white lg:h-[74px] lg:px-[5.5vw]">
        <a
          href="#home"
          className={`${wordmark} lg:border-r lg:border-white/35 lg:pr-8`}
        >
          <span>ASTREUS</span>
          <small className="mt-1.5 font-sans text-[6px] tracking-[.35em]">
            — LEGAL —
          </small>
        </a>
        <nav
          className={`${menuOpen ? "translate-x-0" : "translate-x-full"} fixed inset-0 z-[-1] flex min-h-screen w-full flex-col items-start gap-7 bg-[#031d3c] px-7 pt-28 transition-transform duration-300 lg:static lg:z-auto lg:min-h-0 lg:flex-1 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:gap-9 lg:bg-transparent lg:p-0 xl:gap-11`}
        >
          {nav.map((item, i) => (
            <a
              key={item}
              onClick={closeMenu}
              href={anchor(item)}
              className={`font-serif text-3xl text-white hover:text-[#dbb36d] lg:font-sans lg:text-xs ${i === 0 ? "lg:border-b-2 lg:border-[#dbb36d] lg:pb-3" : ""}`}
            >
              {item}
            </a>
          ))}
          <a
            className="mt-4 flex items-center gap-2 border border-[#dbb36d] px-5 py-3 text-xs text-white lg:hidden"
            href="#contact"
            onClick={closeMenu}
          >
            Speak With Counsel <ArrowRight size={15} />
          </a>
        </nav>
        <a
          className="hidden items-center gap-2 border border-[#dbb36d]/80 px-5 py-3 text-[11px] lg:flex"
          href="#contact"
        >
          Speak With Counsel <ArrowRight size={14} />
        </a>
        <button
          className="relative z-10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>
      <main>
        <section
          id="home"
          className="relative flex h-[680px] items-end text-white sm:h-[min(65vw,720px)] sm:min-h-[585px] sm:items-center"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] sm:object-[center_45%]"
            src={courthouse}
            alt="Classical courthouse columns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021630]/95 via-[#021c3a]/75 to-[#021c3a]/10" />
          <div className="relative mx-auto w-[calc(100%-40px)] max-w-[1360px] pb-16 sm:w-[89vw] sm:pt-24 sm:pb-0">
            <p className={eyebrow}>ASTREUS LEGAL</p>
            <h1 className="mb-5 font-serif text-5xl leading-[.97] tracking-[-.05em] sm:text-[clamp(45px,5.1vw,76px)]">
              Counsel, Strategy.
              <br />
              Resolution.
            </h1>
            <p className="max-w-[395px] text-lg leading-relaxed text-slate-200 sm:text-[20px]">
              Strategic legal counsel for complex matters. Astreus Legal advises
              businesses, institutions and individuals on matters where legal
              precision, commercial understanding and discretion matter.
            </p>
            <div className="mt-6 flex gap-2 sm:gap-4">
              <a
                className={`${button} bg-[#dbb36d] text-[#10294a]`}
                href="#practice-areas"
              >
                Explore Our Practice <ArrowRight size={14} />
              </a>
              <a
                className={`${button} border border-[#dbb36d]`}
                href="#contact"
              >
                Speak With Counsel
              </a>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="border-t border-white/35 bg-[#031d3c] py-12 text-white sm:py-9"
        >
          <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] gap-7 sm:w-[89vw] md:grid-cols-[1.05fr_1fr_.36fr] md:items-center md:gap-10">
            <div>
              <p className={eyebrow}>OUR APPROACH</p>
              <h2 className="mb-5 font-serif text-[31px] leading-[1.08] tracking-tight sm:text-[35px]">
                Law demands more
                <br />
                than knowledge.
                <br />
                <em className="text-[#dbb36d]">It demands judgment.</em>
              </h2>
              <p className="max-w-sm text-xs leading-relaxed text-slate-200">
                At Astreus Legal, we bring together deep legal expertise,
                commercial insight and a practical approach to help our clients
                navigate complexity, make informed decisions and achieve lasting
                outcomes.
              </p>
              <a
                className="mt-3 inline-flex items-center gap-3 border-b pb-1 text-[11px]"
                href="#why"
              >
                About Astreus Legal <ArrowRight size={14} />
              </a>
            </div>
            <img
              className="h-[220px] w-full object-cover sm:h-[250px]"
              src={scales}
              alt="Scales of justice and legal books"
            />
            <p className="border-l border-[#dbb36d] pl-6 text-[10px] font-semibold leading-[2.1] tracking-[.2em]">
              STRATEGIC
              <br />
              THINKING.
              <br />
              PRACTICAL
              <br />
              SOLUTIONS.
              <br />
              LASTING IMPACT.
            </p>
          </div>
        </section>
        <section
          id="practice-areas"
          className="border-t border-white/20 bg-[#031d3c] py-11 text-white sm:py-7"
        >
          <div className="mx-auto w-[calc(100%-40px)] max-w-[1360px] sm:w-[89vw]">
            <p className={eyebrow}>PRACTICE AREAS</p>
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <h2 className="font-serif text-[31px] leading-none tracking-tight sm:text-[35px]">
                Our Core Practice Areas
              </h2>
              <p className="text-[11px] text-slate-200">
                Tailored legal solutions for a dynamic world.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {practices.map(([first, second, copy], index) => (
                <article
                  className="mb-6 flex min-h-[185px] flex-col border-l border-white/30 px-3 odd:border-l-0 odd:pl-0 sm:odd:border-l sm:odd:pl-3 lg:first:border-l-0 lg:first:pl-0"
                  key={first}
                >
                  <span className="font-serif text-lg text-[#dbb36d]">
                    0{index + 1}
                  </span>
                  <h3 className="my-2 font-serif text-base leading-none italic">
                    {first}
                    <br />
                    {second}
                  </h3>
                  <p className="text-[14px] leading-snug text-slate-200">
                    {copy}
                  </p>
                  <a
                    className="mt-auto flex items-center gap-2 text-[10px] text-[#dbb36d]"
                    href="#contact"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="why" className="bg-[#f5f3ed]">
          <div className="grid md:grid-cols-[1fr_1.1fr_.9fr]">
            <img
              className="h-[245px] w-full object-cover md:h-full"
              src={notebook}
              alt="Astreus Legal notebook and pen"
            />
            <div className="p-10 sm:p-12">
              <p className={eyebrow}>WHY ASTREUS</p>
              <h2 className="font-serif text-[29px] leading-[1.16] tracking-tight sm:text-[32px]">
                Precision in advice.
                <br />
                Discipline in execution.
                <br />
                Clarity in complexity.
              </h2>
            </div>
            <div className="m-7 border-l border-[#506079] pl-6 sm:pl-10">
              {[
                [
                  "⚖",
                  "DEEP EXPERTISE",
                  "Specialised knowledge across key practice areas and industries.",
                ],
                [
                  "♧",
                  "CLIENT-CENTRIC",
                  "Pragmatic advice, tailored to your business and goals.",
                ],
                [
                  "♙",
                  "DISCRETION & TRUST",
                  "Absolute confidentiality. Always.",
                ],
                [
                  "◎",
                  "RESULTS-DRIVEN",
                  "Focused on outcomes that create long-term value.",
                ],
              ].map(([icon, title, copy]) => (
                <div
                  className="flex gap-4 border-b border-slate-300 py-2 last:border-0"
                  key={title}
                >
                  <i className="text-xl not-italic text-[#bd9154]">{icon}</i>
                  <div>
                    <b className="text-[9px] tracking-[.18em]">{title}</b>
                    <p className="mt-1 text-[10px] leading-snug">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="people" className="bg-[#031d3c] py-11 text-white">
          <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] grid-cols-2 gap-5 sm:w-[89vw] md:grid-cols-[1.5fr_repeat(3,1fr)_0.7fr]">
            <div className="col-span-2 md:col-span-1">
              <p className={eyebrow}>OUR PEOPLE</p>
              <h2 className="font-serif text-[31px] leading-[1.08]">
                The Minds Behind
                <br />
                Astreus Legal
              </h2>
              <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-200">
                A team of experienced and forward-thinking professionals,
                committed to excellence.
              </p>
              <Link
                className="mt-3 inline-flex items-center gap-3 border-b pb-1 text-[11px]"
                to="/peoplepage"
              >
                Meet Our Team <ArrowRight size={14} />
              </Link>
            </div>
            {people.slice(0, 3).map((person, index) => (
              <article key={person.id}>
                <img
                  className="h-40 w-full border border-[#dbb36d]/60 object-cover object-top sm:h-36"
                  src={person.image}
                  alt={person.name}
                />
                <h3 className="mt-2 font-serif text-base">{person.name}</h3>
                <p className="text-[9px] text-slate-200">
                  {index === 0 ? "Managing Partner" : "Partner"}
                </p>
              </article>
            ))}
            <Link
              className="col-span-2 flex h-16 items-center justify-center gap-2 border border-[#dbb36d]/80 text-[10px] md:col-span-1 md:h-36"
              to="/peoplepage"
            >
              View All Professionals <ArrowRight size={14} />
            </Link>
          </div>
        </section>
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
      </main>
      <footer id="contact" className="bg-[#031d3c] text-white">
        <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1360px] gap-6 py-10 sm:w-[89vw] md:grid-cols-[1fr_auto_1.3fr] md:items-center">
          <div>
            <h2 className="font-serif text-lg">Discuss your matter with us.</h2>
            <p className="mt-2 text-[10px] text-slate-200">
              Astreus Legal　|　New Delhi, India
            </p>
          </div>
          <a
            className={`${button} bg-[#dbb36d] text-[#10294a]`}
            href="mailto:astreuslegal@gmail.com"
          >
            Contact the Firm <ArrowRight size={14} />
          </a>
          <div className="md:text-right">
            <div className={`${wordmark} md:ml-auto`}>
              <span>ASTREUS</span>
              <small className="mt-1 font-sans text-[6px] tracking-[.35em]">
                — LEGAL —
              </small>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-[9px] md:justify-end">
              {nav.map((item) => (
                <a href={anchor(item)} key={item}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-[calc(100%-40px)] flex-col gap-2 border-t border-white/25 py-3 text-[8px] text-slate-300 sm:w-[89vw] sm:flex-row sm:justify-between">
          <span>© 2026 Astreus Legal. All rights reserved.</span>
          <span>Privacy Policy　/　Disclaimer</span>
        </div>
      </footer>
    </div>
  );
}

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
