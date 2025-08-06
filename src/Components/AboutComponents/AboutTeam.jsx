import React, { useState } from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    position: "Director & Founder",
    image: "/images/images (3).png",
    description:
      "Leading SEMLA Educational Consultancy with 15+ years experience in international education guidance and student visa assistance.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@semlaedu.com",
    },
  },
  {
    name: "Michael Chen",
    position: "Senior Education Counselor",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Specializes in Canadian and Australian university applications at SEMLA, with expertise in scholarship guidance and career counseling.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@semlaedu.com",
    },
  },
  {
    name: "Priya Sharma",
    position: "Visa Documentation Specialist",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Expert in visa documentation and immigration processes at SEMLA, with a successful track record in student visa approvals.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "priya@semlaedu.com",
    },
  },
  {
    name: "David Wilson",
    position: "Academic Advisor",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Guides SEMLA students through course selection and university partnerships across UK, USA, and European institutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@semlaedu.com",
    },
  },
  {
    name: "Anjali Patel",
    position: "Student Coordinator",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Manages student applications at SEMLA and provides comprehensive support throughout the admission and enrollment process.",
    social: {
      linkedin: "#",
      instagram: "#",
      email: "anjali@semlaedu.com",
    },
  },
  {
    name: "James Rodriguez",
    position: "Financial Advisor",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Assists SEMLA students with financial planning, education loans, and scholarship applications for international study programs.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@semlaedu.com",
    },
  },
  {
    name: "Lisa Thompson",
    position: "Partnership Manager",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Develops outreach programs for SEMLA and maintains partnerships with international universities and educational institutions.",
    social: {
      linkedin: "#",
      facebook: "#",
      email: "lisa@semlaedu.com",
    },
  },
  {
    name: "Raj Kumar",
    position: "Operations Manager",
    image: "/images/79dd11a9452a92a1accceec38a45e16a.jpg",
    description:
      "Oversees daily operations at SEMLA and ensures seamless service delivery for all student consultation and visa processes.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "raj@semlaedu.com",
    },
  },
];

export default function SEMLATeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(teamMembers.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(teamMembers.length / 3)) %
        Math.ceil(teamMembers.length / 3)
    );
  };

  const getSocialIcon = (platform) => {
    const iconClass = "w-4 h-4";
    switch (platform) {
      case "linkedin":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "twitter":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C8.396 0 7.929.01 7.102.048 4.789.167 3.043 1.05 1.825 2.904.607 4.758.167 7.235.048 9.671.01 10.498 0 10.965 0 12.017s.01 1.519.048 2.346c.119 2.436.559 4.913 1.777 6.767 1.218 1.854 2.964 2.737 5.277 2.856.827.038 1.294.048 2.346.048s1.519-.01 2.346-.048c2.313-.119 4.059-1.002 5.277-2.856 1.218-1.854 1.658-4.331 1.777-6.767.038-.827.048-1.294.048-2.346s-.01-1.519-.048-2.346C23.833 7.235 23.393 4.758 22.175 2.904 20.957 1.05 19.211.167 16.898.048 16.071.01 15.604 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 3.675c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 9.9c-2.149 0-3.9-1.751-3.9-3.9s1.751-3.9 3.9-3.9 3.9 1.751 3.9 3.9-1.751 3.9-3.9 3.9zM18.406 4.594c.775 0 1.404.63 1.404 1.405s-.629 1.405-1.404 1.405-1.405-.63-1.405-1.405.63-1.405 1.405-1.405z" />
          </svg>
        );
      case "email":
        return (
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.248l9.615-6.427h.749c.904 0 1.636.732 1.636 1.636z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const currentMembers = teamMembers.slice(
    currentIndex * 3,
    (currentIndex + 1) * 3
  );

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated professionals at SEMLA Educational Consultancy Pvt.
            Ltd. are committed to guiding you through every step of your
            international education journey.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Previous team members"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-blue-50 text-gray-800 hover:text-blue-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Next team members"
          >
            <svg
              className="w-6 h-6"
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
          </button>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {currentMembers.map((member, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="w-8 h-8 bg-white/90 hover:bg-white text-gray-700 hover:text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        aria-label={`${member.name} ${platform}`}
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from(
              { length: Math.ceil(teamMembers.length / 3) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              )
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your international education journey with SEMLA
            Educational Consultancy?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
}
