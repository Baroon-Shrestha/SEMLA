import React, { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  GraduationCap,
  BookOpen,
  Users,
  Mail,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const { pathname } = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileDropdown = () => setMobileDropdownOpen(!mobileDropdownOpen);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navLinkClass = (path) => {
    const base =
      "relative py-2 transition-all duration-300 group cursor-pointer flex items-center gap-2";
    const active =
      pathname === path ? "text-[#89CFEF]" : "text-white hover:text-[#89CFEF]";
    return `${base} ${active}`;
  };

  const mobileNavLinkClass = (path) => {
    const base =
      "flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 group";
    const active =
      pathname === path
        ? "text-[#89CFEF] bg-[#2E2E3A] shadow-lg"
        : "text-white hover:text-[#89CFEF] hover:bg-[#2E2E3A]";
    return `${base} ${active}`;
  };

  const countryFlags = {
    cyprus: "🇨🇾",
    japan: "🇯🇵",
    finland: "🇫🇮",
    korea: "🇰🇷",
  };

  return (
    <header className="bg-[#1A1A2E] text-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Omni Global Logo"
            className="w-20 h-20 object-contain drop-shadow-md"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-10 font-medium text-lg">
          <Link to="/" className={navLinkClass("/")}>
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link to="/about" className={navLinkClass("/about")}>
            {" "}
            <Users className="w-5 h-5" /> About Us{" "}
          </Link>
          <Link to="/japan" className={navLinkClass("/japan")}>
            {" "}
            <Users className="w-5 h-5" /> Study in Japan{" "}
          </Link>

          <Link to="/courses" className={navLinkClass("/courses")}>
            {" "}
            <BookOpen className="w-5 h-5" /> Courses{" "}
          </Link>
          <Link to="/contact" className={navLinkClass("/contact")}>
            {" "}
            <Mail className="w-5 h-5" /> Contact Us{" "}
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-[#2E2E3A] transition-colors duration-300"
          >
            {menuOpen ? (
              <X className="w-7 h-7 text-white rotate-90" />
            ) : (
              <Menu className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-gradient-to-b from-[#1A1A2E] to-[#0F0F1F] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-5 space-y-2">
          <Link to="/" className={mobileNavLinkClass("/")}>
            {" "}
            <Home className="w-5 h-5" /> Home{" "}
          </Link>
          <Link to="/about" className={mobileNavLinkClass("/about")}>
            {" "}
            <Users className="w-5 h-5" /> About Us{" "}
          </Link>
          <Link to="/japan" className={mobileNavLinkClass("/japan")}>
            {" "}
            <Users className="w-5 h-5" /> Study in Japan{" "}
          </Link>

          <Link to="/courses" className={mobileNavLinkClass("/courses")}>
            {" "}
            <BookOpen className="w-5 h-5" /> Courses{" "}
          </Link>
          <Link to="/contact" className={mobileNavLinkClass("/contact")}>
            {" "}
            <Mail className="w-5 h-5" /> Contact Us{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
