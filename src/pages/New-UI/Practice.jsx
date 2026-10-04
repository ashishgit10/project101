import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import "../../global.css";
import { Link, useNavigate } from "react-router-dom";

function Practice() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const practices = [
    {
      title: "Corporate & Commercial",
      desc: `Astreus Legal advises businesses, entrepreneurs, investors, and institutions on a broad range of corporate and commercial matters. Our work encompasses business structuring, commercial contracts, corporate documentation, negotiations, joint ventures, investments, shareholder arrangements, and transactional advisory. We assist clients in navigating legal considerations throughout the business lifecycle, from establishing operations and documenting commercial relationships to managing complex transactions and contractual obligations. Our approach combines legal analysis with an understanding of commercial objectives, enabling us to identify potential risks while helping clients structure their affairs with greater clarity and certainty. Whether advising on an individual transaction or an ongoing commercial relationship, we focus on carefully considered documentation, effective risk management, and legally sound arrangements aligned with the client's objectives.`,
      path: "/expertise/details",
      shortdesc:
        "Advising businesses on corporate structuring, transactions, commercial contracts, governance, and business growth.",
    },

    {
      title: "Dispute Resolution",
      desc: `Astreus Legal handles a wide range of contentious matters arising from commercial, contractual, civil, property, and other legal disputes. Our dispute resolution practice encompasses litigation, arbitration, mediation, negotiation, and other appropriate mechanisms for resolving conflicts. We assist clients from the early assessment of a dispute through pleadings, evidence, hearings, settlement discussions, and final resolution. Our work involves analysing the legal and factual dimensions of each matter, identifying the issues that require attention, and developing a structured approach to the proceedings. We represent clients before appropriate courts, tribunals, and arbitral forums and also advise on strategies for avoiding unnecessary escalation. Every dispute presents its own circumstances, and our focus is on careful preparation, precise legal submissions, and a practical understanding of the client's interests.`,
      path: "/expertise/details",
      shortdesc:
        "Strategic representation in litigation, arbitration, mediation, and negotiation with careful preparation and legal strategy.",
    },

    {
      title: "Real Estate",
      desc: `Our Real Estate practice covers legal matters relating to the acquisition, development, ownership, use, leasing, and transfer of immovable property. We advise individuals, businesses, developers, investors, and other stakeholders on property transactions, title and documentation, leases, development arrangements, joint ventures, property-related agreements, and disputes. Our work includes reviewing and structuring documentation, identifying legal and title-related considerations, and assisting clients in navigating regulatory and contractual requirements associated with real estate transactions. We also advise on disputes involving possession, ownership, contractual obligations, and other property-related issues. Given the financial and long-term implications of property transactions, our approach emphasises careful due diligence, clear documentation, and identification of potential legal issues at an early stage.`,
      path: "/expertise/details",
      shortdesc:
        "Legal support for property acquisition, development, leasing, documentation, title, transactions, and disputes.",
    },

    {
      title: "Insolvency & Bankruptcy",
      desc: `Astreus Legal advises stakeholders on legal issues arising from insolvency, restructuring, debt resolution, and bankruptcy proceedings. Our practice covers matters involving creditors, financial institutions, corporate debtors, promoters, investors, and other stakeholders under the applicable insolvency framework. We assist with assessing claims, preparing and responding to proceedings, advising on creditor rights, restructuring arrangements, and representing clients before appropriate adjudicating authorities and forums. We also advise on legal issues surrounding recovery, resolution processes, and transactions involving financially distressed entities. Insolvency matters often involve multiple stakeholders, significant documentation, and strict procedural requirements. Our approach therefore focuses on timely assessment, detailed preparation, and a clear understanding of the commercial and legal implications of each available course of action.`,
      path: "/expertise/details",
      shortdesc:
        "Guidance on insolvency, restructuring, debt resolution, bankruptcy proceedings, creditor rights, and recovery matters.",
    },

    {
      title: "Intellectual Property",
      desc: `Our Intellectual Property practice assists businesses, creators, entrepreneurs, and organisations in protecting and managing their intellectual assets. We advise on matters concerning trademarks, copyright, brand protection, licensing, commercialisation, and intellectual property disputes, subject to the nature of the rights involved. Our work includes reviewing agreements, advising on ownership and usage rights, addressing infringement concerns, and representing clients in appropriate contentious proceedings. In an increasingly knowledge-driven economy, intellectual property can form an important part of an organisation's commercial identity and value. We therefore approach IP matters with attention to both legal protection and the underlying commercial context. From developing appropriate contractual safeguards to responding to disputes, our focus is on helping clients understand their rights, obligations, and available legal remedies.`,
      path: "/expertise/details",
      shortdesc:
        "Protecting trademarks, copyright, brands, licensing rights, creative assets, and other intellectual property.",
    },

    {
      title: "Regulatory & Compliance",
      desc: `Astreus Legal advises businesses and organisations on legal and regulatory requirements applicable to their operations. Our Regulatory & Compliance practice involves assisting clients in understanding applicable laws, regulatory frameworks, contractual obligations, internal processes, and compliance considerations. We provide legal guidance on regulatory developments, documentation, governance matters, notices, regulatory interactions, and risk identification, depending on the client's requirements and sector. Our role is to help clients understand the legal framework within which they operate and identify areas requiring attention before they develop into larger legal or operational concerns. As regulatory environments continue to evolve, we place particular emphasis on practical advice, careful documentation, and keeping legal considerations aligned with the client's business activities.`,
      path: "/expertise/details",
      shortdesc:
        "Advisory on regulatory frameworks, governance, compliance requirements, documentation, and legal risk.",
    },

    {
      title: "Civil Law",
      desc: `Our Civil Law practice encompasses a broad range of disputes and legal matters concerning individual rights, property, contracts, obligations, recovery, injunctions, and other civil claims. We advise and represent individuals, businesses, and institutions in matters before appropriate courts and forums. Our work begins with understanding the factual background and identifying the legal issues that determine the dispute. We assist with legal notices, pleadings, documentation, evidence, negotiations, settlement discussions, and court proceedings as required. Civil disputes often involve detailed facts and extensive documentation, making careful preparation particularly important. Our approach focuses on understanding the client's position, analysing the applicable law, and presenting the matter in a structured and legally sustainable manner while exploring appropriate avenues for resolution.`,
      path: "/expertise/details",
      shortdesc:
        "Representation in civil disputes involving property, contracts, obligations, recovery, injunctions, and individual rights.",
    },

    {
      title: "Criminal Law",
      desc: `Astreus Legal provides legal assistance in criminal matters involving individuals, businesses, and other stakeholders. Our practice includes advice and representation in appropriate criminal proceedings, complaints, investigations, bail matters, and related litigation. We assist clients in understanding the legal process, their rights and obligations, and the procedural considerations relevant to their circumstances. Criminal proceedings can have significant legal and personal consequences and often require prompt attention to facts, evidence, documentation, and procedural requirements. Our approach is grounded in careful legal analysis, preparation, and representation before the appropriate authorities and courts. We work to ensure that the client's case is examined within the applicable legal framework and that available procedural and substantive remedies are appropriately considered.`,
      path: "/expertise/details",
      shortdesc:
        "Legal assistance in criminal proceedings, complaints, investigations, bail matters, and related litigation.",
    },

    {
      title: "Matrimonial Disputes",
      desc: `Our Matrimonial Disputes practice addresses legal issues arising from marriage, separation, divorce, maintenance, custody, matrimonial rights, and related family disputes. We assist clients in navigating proceedings with sensitivity to both the legal and personal dimensions involved. Our services may include legal consultation, drafting and reviewing documents, negotiation, mediation, and representation in appropriate proceedings. Family disputes can involve complex questions concerning financial arrangements, children, property, and personal rights, making a considered legal approach essential. Where appropriate, we also explore avenues for negotiated or mediated resolution. Our focus is on providing clear legal guidance, maintaining confidentiality, understanding the circumstances of each matter, and helping clients navigate the applicable legal process with informed decision-making.`,
      path: "/expertise/details",
      shortdesc:
        "Measured legal counsel for divorce, separation, maintenance, custody, matrimonial rights, and family disputes.",
    },

    {
      title: "Loan Settlement Services",
      desc: `Astreus Legal assists individuals and businesses in navigating legal issues arising from outstanding loans, financial obligations, and debt-related disputes. Our Loan Settlement Services involve reviewing relevant loan documentation, understanding the nature of outstanding obligations, examining correspondence and notices, and advising on available legal and negotiated avenues. Where appropriate, we assist clients in engaging with lenders or financial institutions regarding settlement discussions and documentation. We also advise on legal considerations arising from recovery actions and related proceedings. Every financial situation has its own contractual and factual circumstances, and therefore requires a careful review before determining an appropriate course of action. Our objective is to provide clients with a clear understanding of their legal position and the available mechanisms for addressing outstanding financial obligations.`,
      path: "/expertise/details",
      shortdesc:
        "Assistance with loan documentation, debt-related disputes, lender negotiations, settlement, and recovery actions.",
    },

    {
      title: "Mining Law",
      desc: `Our Mining Law practice focuses on legal and regulatory matters relating to exploration, extraction, mineral rights, land, environmental considerations, permissions, contracts, and commercial arrangements within the mining sector. We advise businesses, operators, landholders, and other stakeholders on legal issues arising across the mining lifecycle, subject to the applicable statutory and regulatory framework. Our work may include reviewing agreements, advising on regulatory requirements, assisting with disputes, and analysing legal issues concerning mining operations and related commercial relationships. The sector involves multiple layers of legislation, permissions, regulatory authorities, and contractual arrangements. We therefore approach mining-related matters by examining the interaction between commercial objectives and the applicable legal and regulatory framework, with careful attention to documentation, compliance, and dispute prevention.`,
      path: "/expertise/details",
      shortdesc:
        "Legal and regulatory guidance on mining operations, mineral rights, land, permissions, contracts, and disputes.",
    },

    {
      title: "Consumer Disputes",
      desc: `Astreus Legal advises and represents consumers and businesses in disputes arising from goods, services, contractual obligations, deficient performance, unfair practices, and other matters falling within applicable consumer protection laws. We assist with assessing the nature of a grievance, reviewing supporting documentation, preparing legal communications and complaints, and representing clients before appropriate consumer forums and authorities. Consumer disputes frequently depend on contracts, invoices, correspondence, warranties, service records, and other documentary evidence. Our approach therefore places emphasis on establishing the factual record and identifying the legal issues that support the client's position. We also advise businesses on responding to consumer claims and addressing legal issues arising from customer relationships. Our objective is to provide clear guidance throughout the process and pursue appropriate legal remedies within the applicable framework.`,
      path: "/expertise/details",
      shortdesc:
        "Representation in consumer disputes involving goods, services, contracts, deficient performance, and unfair practices.",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -280,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="practice-areas"
      className="bg-[#061b36] py-12 text-white sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1360px] sm:w-[89vw]">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="mb-3 text-[9px] font-semibold tracking-[.28em] text-[#dbb36d]">
              PRACTICE AREAS
            </p>

            <h2 className="font-serif text-3xl leading-none sm:text-4xl lg:text-5xl">
              Our Core Practice Areas
            </h2>
          </div>

          <div className="hidden items-center gap-4 text-right text-[10px] text-white/70 md:flex">
            <span>Tailored legal solutions for a dynamic world.</span>
            <span className="block h-px w-10 bg-white/40" />
          </div>
        </div>

        {/* Practice List Wrapper */}
        <div className="relative">
          {/* Mobile Left Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous practice area"
            className="
              absolute
              left-1
              top-40
              z-10
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-[#061b36]/95
              text-white
              shadow-lg
              transition
              hover:border-[#dbb36d]
              hover:text-[#dbb36d]
              md:hidden
            "
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          {/* Mobile Right Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next practice area"
            className="
              absolute
              right-1
               top-40
              z-10
              flex
              h-9
              w-9
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/30
              bg-[#061b36]/95
              text-white
              shadow-lg
              transition
              hover:border-[#dbb36d]
              hover:text-[#dbb36d]
              md:hidden
            "
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          {/* Horizontal Practice List */}
          <div
            ref={scrollRef}
            className="
              flex
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/20
              [-ms-overflow-style:none]
              [scrollbar-width:thin]
            "
          >
            {practices.map((practice, index) => (
              <article
                key={practice.title}
                className="
                  group
                  min-w-[245px]
                  flex-1
                  border-l
                  border-white/30
                  px-5
                  first:border-l-0
                  sm:min-w-[270px]
                  sm:px-6
                  lg:min-w-[210px]
                  lg:px-5
                  xl:min-w-[215px]
                "
              >
                {/* Number */}
                <div className="mb-3 font-serif text-2xl leading-none text-[#dbb36d]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="min-h-[52px] font-serif text-lg italic leading-[1.15] text-white sm:text-xl">
                  {practice.title}
                </h3>

                {/* Description */}
                <p className="mt-4 min-h-[72px] max-w-[220px] text-[14px] leading-[1.55] text-white/75 sm:text-[11px]">
                  {practice.shortdesc}
                </p>

                {/* Learn More */}
                <div
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    border-b
                    border-[#dbb36d]/50
                    pb-1
                    text-[10px]
                    font-medium
                    text-[#dbb36d]
                    transition-all
                    duration-300
                    group-hover:gap-3
                  "
                  onClick={() => navigate(practice.path, { state: practice })}
                >
                  Learn More
                  <ArrowRight size={14} strokeWidth={1.5} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Practice;
