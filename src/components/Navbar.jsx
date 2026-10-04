
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    "Home",
    "About",
    "Practice Areas",
    "People",
    "Insights",
    "Contact",
  ];

  const anchor = (item) =>
    item === "Home"
      ? "#home"
      : `#${item.toLowerCase().replaceAll(" ", "-")}`;

  const closeMenu = () => setMenuOpen(false);

  const wordmark =
    "flex flex-col items-center font-serif text-[18px] leading-none tracking-[.3em] text-[#dbb36d] sm:text-[22px]";

  return (
    <>
      {/* Navbar */}
      <header
        className="absolute z-30 flex h-16 w-full items-center justify-between border-b border-white/15 bg-[#031d3c] px-5 text-white lg:h-[74px] lg:px-[5.5vw]"
      >
        {/* Logo */}
        <Link
          to="/"
          className={`${wordmark} lg:border-r lg:border-white/35 lg:pr-8`}
        >
          <span>ASTREUS</span>

          <small className="mt-1.5 font-sans text-[6px] tracking-[.35em]">
            — LEGAL —
          </small>
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } fixed inset-0 z-[-1] flex min-h-screen w-full flex-col items-start gap-7 bg-[#031d3c] px-7 pt-28 transition-transform duration-300 lg:static lg:z-auto lg:min-h-0 lg:flex-1 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-center lg:gap-9 lg:bg-transparent lg:p-0 xl:gap-11`}
        >
          {nav.map((item, i) => {
            // Insights goes to a separate page
            if (item === "Insights") {
              return (
                <Link
                  key={item}
                  to="/impact"
                  onClick={closeMenu}
                  className="font-serif text-xl text-white hover:text-[#dbb36d] lg:font-sans lg:text-sm"
                >
                  {item}
                </Link>
              );
            }

            // All other navigation items use page anchors
            return (
              <a
                key={item}
                onClick={closeMenu}
                href={anchor(item)}
                className={`font-serif text-xl text-white hover:text-[#dbb36d] lg:font-sans lg:text-sm`}              >
                {item}
              </a>
            );
          })}

          {/* Mobile WhatsApp CTA */}
          <a
            className="mt-4 flex items-center gap-2 border border-[#dbb36d] px-5 py-3 text-xs text-white lg:hidden"
            href="https://wa.me/916200879825"
            onClick={closeMenu}
          >
            Speak With Counsel
            <ArrowRight size={15} />
          </a>
        </nav>

        {/* Desktop WhatsApp CTA */}
        <a
          className="hidden items-center gap-2 border border-[#dbb36d]/80 px-5 py-3 text-[11px] lg:flex"
          href="https://wa.me/916200879825"
        >
          Speak With Counsel
          <ArrowRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>
    </>
  );
}
