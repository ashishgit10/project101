import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import linkedin from "../assets/linkedin.png";
import Footer from "../components/Footer";

export default function ExpertisePage() {
  const navigate = useNavigate();

  const expertise = [
    {
      title: "Corporate Law",
      desc: `Our firm provides comprehensive legal services in all aspects of corporate law. We advise businesses of all sizes on company formation, regulatory compliance, mergers and acquisitions, corporate governance, and commercial contracts. Our goal is to help clients navigate complex legal frameworks efficiently while protecting their strategic and financial interests.`,
      path: "/expertise/details",
      shortdesc: "Comprehensive legal services for businesses — formation, compliance, mergers, contracts, and governance."
    },
    {
      title: "Criminal Litigation",
      desc: `We have extensive experience in criminal litigation, representing clients in a wide range of criminal matters. Our team is dedicated to protecting our clients’ rights and ensuring a fair trial, from investigation through to appeal. We approach every case with precision, discretion, and a commitment to achieving the best possible outcome.`,
      path: "/expertise/details",
      shortdesc: "Representation in all criminal matters, from investigation to appeal, with precision and discretion."
    },
    {
      title: "Matrimonial Law",
      desc: `Our matrimonial law practice offers compassionate and practical guidance in all areas of family and divorce law. We handle cases involving divorce, child custody, maintenance, and property settlements with sensitivity and professionalism. Our priority is to protect our clients’ interests while helping them reach fair and lasting resolutions.`,
      path: "/expertise/details",
      shortdesc: "Guidance in divorce, custody, maintenance, and settlements — prioritizing fairness and compassion."
    },
    {
      title: "Banking and Finance",
      desc: `We advise financial institutions, corporations, and individuals on a broad range of banking and finance matters. Our expertise includes loan and security documentation, regulatory compliance, debt recovery, and financial restructuring. With a deep understanding of the financial sector, we deliver tailored legal solutions that support sound and secure transactions.`,
      path: "/expertise/details",
      shortdesc: "Advisory on loans, compliance, recovery, and restructuring — ensuring sound financial transactions."
    },
    {
      title: "Civil Matters",
      desc: `Our firm handles a wide spectrum of civil matters with a focus on delivering timely and effective legal solutions. We represent clients in disputes involving contracts, property, torts, recovery of money, and other civil claims. Our team combines strong litigation skills with strategic negotiation to resolve conflicts efficiently, always prioritizing our clients’ best interests.`,
      path: "/expertise/details",
      shortdesc: "Resolution of contract, property, and tort disputes through strong litigation and negotiation"
    },
    {
      title: "Loan Settlement Services",
      desc: `We offer specialized legal support in loan settlement and debt negotiation. Our team assists individuals and businesses in restructuring or settling outstanding loans with banks and financial institutions. We work diligently to secure favorable terms, protect our clients’ assets, and bring financial disputes to an equitable resolution through negotiation or legal recourse.`,
      path: "/expertise/details",
      shortdesc: "Support in negotiating and settling outstanding loans to protect client assets and interests."
    },
    {
      title: "Mining Laws",
      desc: `Astreus Legal Associates LLP offers focused legal assistance in mining law, covering compliance and advisory under the Mines and Minerals (Development and Regulation) Act, 1957, and related rules. We handle mining lease matters, licensing, royalty issues, environmental and forest clearance requirements, and disputes before regulatory authorities. Our team provides practical, industry-aligned solutions to ensure smooth mining operations and adherence to all statutory obligations.`,
      path: "/expertise/details",
      shortdesc: "Legal assistance in mining compliance, licensing, leases, and regulatory clearances.",
    }
  ];

  return (
    <>
      <Navbar bgColor="bg-[#fdf9f3]" textclr="text-[#002346]" />

      <div className="bg-[#fdf9f3] min-h-screen flex flex-col justify-between">
        <section className="px-6 lg:px-24 pt-32 pb-20 flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002346] mb-12 text-center">
            Our Areas of Expertise
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <div
                key={i}
                onClick={() => navigate(item.path, { state: item })}
                className="group  rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 border hover:border cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#002346] mb-2 group-hover">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc.length > 100
                      ? item.desc.substring(0, 100) + "..."
                      : item.desc}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <ChevronRight
                    size={20}
                    className="text-[#002346] group-hover:translate-x-1 group-hover:text-blue-700 transition-transform duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
