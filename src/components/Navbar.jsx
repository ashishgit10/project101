import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronRight, Plus, Minus } from "lucide-react";
import logo from "../assets/logo.jpeg";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-md text-sm font-medium " +
      (isActive ? "text-white" : "text-white hover:text-[#aabf91]")
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openSection, setOpenSection] = useState(null);

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

  // Menu structure
  const menuItems = [
    {
      title: "ABOUT",
      links: [
        { label: "Purpose", to: "/purpose" },
        { label: "History", to: "/history" },
        { label: "Awards & Rankings", to: "/awards" },
      ],
    },
    {
      title: "EXPERTISE",
      to: "/expertise", // 🔑 direct link
    },
    {
      title: "PEOPLE",
      links: [
        { label: "Founding Partners", to: "/founding-partners" },
        { label: "Senior Partners", to: "/senior-partners" },
        { label: "Partners", to: "/partners" },
      ],
    },
    {
      title: "RESOURCES",
      to: "/resources", // 🔑 direct link
    },
    {
      title: "CAREERS",
      to: "/careers", // 🔑 direct link
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full bg-[#002346] z-50 transition-transform duration-500 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#002346] text-white rounded flex items-center justify-center font-bold">
              <img src={logo} className="rounded" alt="logo" />
            </div>
            <div>
              <div className="text-lg font-semibold text-white">Astreus</div>
              <div className="text-xs text-white font-semibold">Legal</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <NavItem to="/about">ABOUT</NavItem>
            <NavItem to="/expertise">EXPERTISE</NavItem>
            <NavItem to="/people">PEOPLE</NavItem>
            <NavItem to="/impact">IMPACT</NavItem>
            <NavItem to="/resources">RESOURCES</NavItem>
            <NavItem to="/careers">CAREERS</NavItem>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={38} className="text-white" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-700 ease-in-out ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto px-3 pb-10 pt-24 space-y-6 text-lg font-medium">
          {menuItems.map((menu, index) => (
            <div key={index}>
              {menu.to ? (
                // Direct link (EXPERTISE, RESOURCES, CAREERS)
                <Link
                  to={menu.to}
                  className="block py-2  font-semibold text-[#002346]"
                  onClick={() => setMobileOpen(false)}
                >
                  {menu.title}
                </Link>
              ) : (
                // Accordion menu (ABOUT, PEOPLE)
                <>
                  <div
                    className="flex justify-between items-center cursor-pointer py-2 "
                    onClick={() =>
                      setOpenSection(openSection === index ? null : index)
                    }
                  >
                    <span className="font-semibold text-[#002346]">
                      {menu.title}
                    </span>
                    {menu.links.length > 0 &&
                      (openSection === index ? (
                        <Minus size={20} className="text-[#002346]" />
                      ) : (
                        <Plus size={20} className="text-[#002346]" />
                      ))}
                  </div>

                  {openSection === index && menu.links.length > 0 && (
                    <div className="ml-4 mt-2 space-y-2">
                      {menu.links.map((link, subIndex) => (
                        <Link
                          key={subIndex}
                          to={link.to}
                          className="flex justify-between items-center py-2 text-gray-700 hover:text-blue-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                          <ChevronRight size={18} />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
