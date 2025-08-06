import React from "react";
import {
  Home,
  BookOpen,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const countryFlags = {
    japan: "🇯🇵",
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/semlaofficial", // Replace with real links
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/semlaofficial",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/semla-consultancy",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Grid 1: Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="logo.png"
                alt="SEMLA Logo"
                className="w-16 h-16 object-contain drop-shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-white">SEMLA</h3>
                <p className="text-sm text-gray-400">Educational Consultancy</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              SEMLA Educational Consultancy connects Nepali students with top
              universities and colleges in Japan, Korea, Finland, and Cyprus.
              From language programs to degree admissions, we help shape your
              academic future with care and expertise.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#009DEB] transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#009DEB]" />
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors duration-300 group"
                >
                  <Home className="w-4 h-4 group-hover:scale-110" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/courses"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors duration-300 group"
                >
                  <BookOpen className="w-4 h-4 group-hover:scale-110" />
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors duration-300 group"
                >
                  <Users className="w-4 h-4 group-hover:scale-110" />
                  About SEMLA
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="flex items-center gap-2 text-gray-300 hover:text-[#FF6B00] transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative">
              Study Destinations
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#009DEB]" />
            </h4>
            <ul className="space-y-3">
              {[{ name: "Japan", key: "japan" }].map(({ name, key }) => (
                <li key={key}>
                  <a
                    href={`/${key}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-[#009DEB] transition-colors duration-300 group"
                  >
                    <span className="text-lg">{countryFlags[key]}</span>
                    Study in {name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
              <p className="text-sm text-gray-400 mb-2">🎓 Empowering Dreams</p>
              <p className="text-white font-medium">
                1000+ students successfully placed since 2018
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white relative">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#009DEB]" />
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="bg-[#009DEB] w-10 h-10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Our Location</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    ________, Kathmandu <br />
                    Nepal 44600
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-[#009DEB] w-10 h-10 rounded-lg flex items-center justify-center">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-gray-400 text-sm">+977-986-1234567</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-[#009DEB] w-10 h-10 rounded-lg flex items-center justify-center">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-gray-400 text-sm">info@semla.edu.np</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="bg-[#009DEB] w-10 h-10 rounded-lg flex items-center justify-center">
                  <Clock className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-white">Office Hours</p>
                  <p className="text-gray-400 text-sm">
                    Sunday – Friday: 9:30 AM – 6:00 PM
                  </p>
                  <p className="text-gray-400 text-sm">Saturday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} SEMLA Educational Consultancy. All rights
              reserved.
            </p>
            <span className="hidden md:block">|</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FF6B00]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FF6B00]">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-400 flex items-center gap-2">
            <span>Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>by SEMLA Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
