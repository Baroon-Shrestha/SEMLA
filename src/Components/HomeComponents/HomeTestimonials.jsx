import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rojina Tamang",
    message:
      "SEMLA made my dream to study in Japan come true. They supported me with every step—from choosing the right language school to preparing for my visa interview.",
    location: "Kathmandu, Nepal",
  },
  {
    name: "Dipesh Basnet",
    message:
      "What I loved about SEMLA was their honesty and clarity. They guided me like family and made sure I felt confident before flying to Tokyo for my higher studies.",
    location: "Butwal, Nepal",
  },
  {
    name: "Kritika Shrestha",
    message:
      "Thanks to SEMLA, I got admission into my desired college in Japan with a scholarship. Their documentation and interview prep services were excellent.",
    location: "Bhaktapur, Nepal",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-[#F9FAFB] text-[#1B263B] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            How SEMLA Changed Lives
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto">
            Hear from our students who trusted SEMLA to guide them towards a
            successful academic journey in Japan.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg hover:shadow-[#1B263B]/20 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 w-5 h-5"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-[#334155] text-base mb-4 leading-relaxed italic">
                “{t.message}”
              </p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-[#1B263B]">{t.name}</p>
                <p className="text-sm text-[#64748B]">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
