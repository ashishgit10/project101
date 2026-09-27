import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Menu, X, Linkedin, Instagram } from "lucide-react";
import courthouse from "../assets/blind1.jpeg";

import notebook from "../assets/logo.jpeg";

import people from "../components/Data/people";
import { Approach } from "./New-UI/Approach";
import Practice from "./New-UI/Practice";
import YAstreus from "./New-UI/YAstreus";
import Rpeople from "./New-UI/Rpeople";
import Experience from "./New-UI/Experience";

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

/* function LegacyHome() {
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
} */

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
        <Approach />
        <Practice />
        <YAstreus />
        <Rpeople />
        <Experience />
      </main>
    </div>
  );
}
