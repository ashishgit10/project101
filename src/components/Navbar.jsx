import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-md text-sm font-medium " +
      (isActive
        ? "text-blue-700"
        : "text-gray-700 hover:text-blue-600")
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false); // scrolling down → hide
      } else {
        setShowNav(true); // scrolling up → show
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full bg-[#002346] z-50 transition-transform duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002346] text-white rounded flex items-center justify-center font-bold">
              AZB
            </div>
            <div>
              <div className="text-lg font-semibold text-white">AZB & Partners</div>
              <div className="text-xs text-white">
                Advocates & Solicitors
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10
          
          ">
            <NavItem to="/"><div className="text-white">ABOUT</div></NavItem>
            <NavItem to="/practice"><div className="text-white">EXPERTISE</div></NavItem>
            <NavItem to="/people"><div className="text-white">PEOPLE</div></NavItem>
             <NavItem to="/people"><div className="text-white">IMPACT</div></NavItem>
            <NavItem to="/resources"><div className="text-white">RESOURCES</div></NavItem>
            <NavItem to="/careers"><div className="text-white">CAREERS</div></NavItem>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-700 ease-in-out ${mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg font-medium">
          <NavItem to="/" onClick={() => setMobileOpen(false)}>About</NavItem>
          <NavItem to="/practice" onClick={() => setMobileOpen(false)}>Expertise</NavItem>
          <NavItem to="/people" onClick={() => setMobileOpen(false)}>People</NavItem>
          <NavItem to="/resources" onClick={() => setMobileOpen(false)}>Resources</NavItem>
          <NavItem to="/careers" onClick={() => setMobileOpen(false)}>Careers</NavItem>
          <a
            href="#contact"
            className="px-4 py-2 border rounded hover:bg-gray-50"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </a>
          <a
            href="/#search"
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setMobileOpen(false)}
          >
            Search
          </a>
        </div>
      </div>
    </>
  );
}
