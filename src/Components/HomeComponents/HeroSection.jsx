import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1920&q=80&auto=format&fit=crop",
      alt: "Japanese students in classroom",
      caption: "Achieve Your Dreams in Japan",
    },
    {
      url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80&auto=format&fit=crop",
      alt: "Counseling session",
      caption: "Personalized Student Guidance",
    },
    {
      url: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?w=1920&q=80&auto=format&fit=crop",
      alt: "Japanese university campus",
      caption: "Start Your Education Journey Today",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative min-h-[80vh] overflow-hidden bg-[#0D1B2A]">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover opacity-20"
            />
            {/* Overlay Removed for Clean Blue Theme */}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-[80vh] flex flex-col justify-center items-start px-6 lg:px-20 py-16">
        <motion.div
          className="text-left space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Study. Settle. Succeed.
          </h1>
          <p className="text-white/90 text-lg sm:text-xl font-light max-w-xl leading-relaxed">
            SEMLA Educational Consultancy Pvt. Ltd. empowers students to pursue
            quality education in Japan through transparent guidance, trusted
            processes, and lifelong support.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#89CFF0] hover:bg-[#71b7de] text-[#0D1B2A] px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all">
              Get Free Counseling
            </button>
            <button className="bg-white/90 hover:bg-hite text-[#0D1B2A] px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all">
              Explore Courses
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-10 flex flex-wrap gap-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-[#FFE55C]" />
            <div>
              <div className="text-lg font-bold">3000+ Students</div>
              <div className="text-sm opacity-80">Guided to Japan</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-[#FFE55C]" />
            <div>
              <div className="text-lg font-bold">Nationwide Support</div>
              <div className="text-sm opacity-80">Across All Provinces</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-[#FFE55C]" />
            <div>
              <div className="text-lg font-bold">Expert Advisors</div>
              <div className="text-sm opacity-80">10+ Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
