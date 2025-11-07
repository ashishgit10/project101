import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronRight, Plus, Minus } from "lucide-react";
import logo from "../assets/logo.png";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `group relative px-3 py-2 text-md font-medium transition-colors duration-300
       ${isActive ? "text-[#002346]" : "text-[#002346] hover:text-[#c97b63]"}`
    }
    onClick={onClick}
  >
    {children}
    {/* underline effect */}
    <span
      className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#002346] transition-all duration-300 group-hover:w-full"
    ></span>
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
      to:"/"
    },
    {
      title: "EXPERTISE",
      to: "/expertise", //  direct link
    },
/*     {
      title: "PEOPLE",
      to: "/peoplepage",
    }, */
    {
      title: "IMPACT",
      to: "/impact", //  direct link
    },
    {
      title: "RESOURCES",
      to: "/resources", //  direct link
    },
  /*   {
      title: "CAREERS",
      to: "/careers", // direct link
    }, */
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full text-[#002346] bg-white z-50 transition-transform duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 text-[#002346] scale-150 rounded flex items-center justify-center font-bold">
              <img src={logo} className="rounded w-24 h-10" alt="logo" />
            </div>
            <div className="flex flex-col ">
              <p className="text-xl font-semibold font-play text-[#002346]">Astreus</p>
              <p className="text-lg text-[#002346] font-play -mt-2 font-semibold">Legal</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            <NavItem to="/">ABOUT</NavItem>
            <NavItem to="/expertise">EXPERTISE</NavItem>
            {/*   <NavItem to="/peoplepage">PEOPLE</NavItem> */}
            <NavItem to="/impact">IMPACT</NavItem>
            <NavItem to="/resources">RESOURCES</NavItem>
          
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X size={28} className="text-[#002346]" />
            ) : (
              <Menu size={38} className="text-[#002346]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-700 ease-in-out ${mobileOpen ? "translate-y-0" : "-translate-y-full"
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
