import React, { useState } from "react";

const studyJapan = {
  title: "Study in Japan",
  description:
    "SEMLA Educational Consultancy Pvt. Ltd. connects you to top institutions in Japan for Japanese language programs, vocational schools, and leading universities. Explore pathways designed for international students seeking excellence, innovation, and cultural growth.",
  image: "/images/japan.jpg",
  options: [
    "Japanese Language Schools",
    "Engineering Universities",
    "Business & Management Programs",
    "IT & Computing Courses",
    "Vocational Colleges (Senmon Gakkou)",
    "Healthcare & Nursing Colleges",
    "Hotel & Tourism Schools",
  ],
};

const optionDescriptions = {
  "Japanese Language Schools":
    "We work closely with accredited language institutions in Japan to prepare students for higher education, employment, or JLPT certification. Ideal for beginners and intermediate learners.",
  "Engineering Universities":
    "Apply to renowned engineering universities across Japan offering degrees in mechanical, civil, robotics, and more. We guide you through entrance exams, eligibility, and scholarships.",
  "Business & Management Programs":
    "Explore top-rated business schools in Tokyo, Osaka, and beyond. Learn global business, management, and entrepreneurship from industry experts.",
  "IT & Computing Courses":
    "Japan is a hub for AI, robotics, and software development. SEMLA helps you get admitted into tech universities offering cutting-edge computing courses.",
  "Vocational Colleges (Senmon Gakkou)":
    "Senmon Gakkou are practical colleges offering 2–3 year programs in fields like animation, design, hospitality, and more. SEMLA assists with placement and visa documentation.",
  "Healthcare & Nursing Colleges":
    "Japan needs skilled healthcare workers. We help eligible students apply to specialized nursing and caregiving programs with a clear path to employment.",
  "Hotel & Tourism Schools":
    "Pursue education in hotel management, tourism, and customer service—ideal for students aiming for careers in Japan’s booming hospitality sector.",
};

export default function HomeStudy() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F9FAFB] text-[#0D1B2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6">
            {studyJapan.title}
          </h2>
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed mb-6">
            {studyJapan.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {studyJapan.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedOption(option)}
                className={`px-4 py-2 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                  selectedOption === option
                    ? "bg-[#0D1B2A] text-white border-[#0D1B2A]"
                    : "text-[#0D1B2A] border-[#0D1B2A] hover:bg-[#0D1B2A] hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedOption && optionDescriptions[selectedOption] && (
            <div className="mt-6 p-5 bg-white border-l-4 border-[#89CFF0] shadow rounded relative">
              <button
                onClick={() => setSelectedOption(null)}
                className="absolute top-2 right-3 text-xl text-gray-500 hover:text-red-500"
                title="Close"
              >
                ✕
              </button>
              <h4 className="text-xl font-semibold text-[#0D1B2A] mb-2">
                {selectedOption}
              </h4>
              <p className="text-[#475569] leading-relaxed">
                {optionDescriptions[selectedOption]}
              </p>
            </div>
          )}
        </div>

        {/* Image on Right */}
        <div className="w-full">
          <img
            src={studyJapan.image}
            alt="Study in Japan"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg border border-[#cbd5e1]"
          />
        </div>
      </div>
    </section>
  );
}
