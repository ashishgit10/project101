import { ArrowRight} from "lucide-react";

function Practice() {
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
  return (
  <section id="practice-areas" className="practice dark-section">
            <div className="wrap">
              <p className="mb-4 text-[10px] font-semibold tracking-[.24em] text-[#dbb36d]">PRACTICE AREAS</p>
              <h2>Our Core Practice Areas</h2>
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
  )
}

export default Practice