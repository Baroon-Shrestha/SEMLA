import React from "react";
import {
  School,
  FileCheck,
  BadgeCheck,
  Users2,
  Handshake,
  Contact2,
} from "lucide-react";

export default function HomeServices() {
  const services = [
    {
      title: "Course & College Counseling",
      description:
        "Find the perfect course and institution in Japan based on your academic profile, language level, and career aspirations.",
      icon: <School size={48} className="text-[#89CFF0]" />,
    },
    {
      title: "Document Preparation",
      description:
        "From SOP to health reports, get expert help with completing all required documents for your application and visa.",
      icon: <FileCheck size={48} className="text-[#89CFF0]" />,
    },
    {
      title: "Visa Documentation",
      description:
        "We walk you through the Japan student visa application process and help ensure accuracy, timeliness, and approvals.",
      icon: <BadgeCheck size={48} className="text-[#89CFF0]" />,
    },
    {
      title: "Interview Training",
      description:
        "Get personalized mock interviews, etiquette training, and Japanese cultural preparation before your embassy interview.",
      icon: <Users2 size={48} className="text-[#89CFF0]" />,
    },
    {
      title: "Pre-Departure Briefing",
      description:
        "From airport tips to currency exchange, receive a checklist for everything you need before leaving for Japan.",
      icon: <Handshake size={48} className="text-[#89CFF0]" />,
    },
    {
      title: "Ongoing Support in Japan",
      description:
        "We connect you with Japanese local support, part-time job tips, and emergency contact guidance even after arrival.",
      icon: <Contact2 size={48} className="text-[#89CFF0]" />,
    },
  ];

  const studentSuccessImages = [
    {
      name: "Aayush Lama",
      img: "/images/Student1.jpg",
      description: "Language School – Tokyo",
    },
    {
      name: "Mina Karki",
      img: "/images/Student2.jpg",
      description: "Senmon Gakkou – Osaka",
    },
    {
      name: "Ramesh Shrestha",
      img: "/images/Student3.jpg",
      description: "University of Nagoya",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D1B2A] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#89CFF0]/20 rounded-full mb-4">
            <span className="text-[#89CFF0] font-semibold text-sm uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Empowering Your{" "}
            <span className="text-[#89CFF0]">Study in Japan</span>
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            We offer tailored services that go beyond applications—ensuring
            you're fully prepared, supported, and confident from counseling to
            settlement in Japan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#1B263B] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#324A69]/30 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#89CFF0] opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-[#415A77] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(service.icon, {
                    size: 28,
                    className: "text-white",
                  })}
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#89CFF0] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-[#89CFF0] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0D1B2A]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="bg-[#1B263B] rounded-2xl p-10 shadow-md border border-[#324A69]/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Planning to Study in Japan?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let our counselors walk you through the process and personalize
              your study journey with the right school, visa help, and career
              advice.
            </p>
            <button className="bg-[#89CFF0] hover:bg-[#71b7de] text-[#0D1B2A] px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Student Stories */}
        {/* <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            Our Student Success Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {studentSuccessImages.map((student, idx) => (
              <div
                key={idx}
                className="bg-[#1B263B] border border-[#324A69]/30 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <img
                  src={student.img}
                  alt={student.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-white">
                    {student.name}
                  </h3>
                  <p className="text-sm text-white/60">{student.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
