import React, { useState } from "react";

const testimonials = [
  {
    text: `Greatly appreciate the entire team of Omni Global Education for seamless guidance in making my international academic journey a reality. Their invaluable support helped me smoothly overcome the difficult reapplication process...`,
    name: "Rosne Lama",
    title: "Visa Granted Student",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    text: `Omni Global Education excels in simplifying paperwork and visa processes for students. Their personalized approach, expertise, and successful track record ensure a smooth transition into academic pursuits abroad...`,
    name: "Sony Shakya",
    title: "Visa Granted Student",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    text: `One of the best consultancies in Nepal for Canada. All the staff are very helpful. If you're seeking hassle-free visa assistance from experts who genuinely care about your success...`,
    name: "Ujjwal Bhatta",
    title: "Visa Granted Student",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

export default function TeamAndTestimonial() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("fade-out");

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setSlideDirection("fade-in");
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection("");
      }, 400);
    }, 200);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("fade-out");

    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setSlideDirection("fade-in");
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection("");
      }, 400);
    }, 200);
  };

  return (
    <section className="bg-gray-50 py0 px-4 md:px-8">
      <style jsx>{`
        .fade-out {
          opacity: 0;
          transform: translateY(10px);
        }
        .fade-in {
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeInUp 0.4s ease-out forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .content-transition {
          transition: all 0.3s ease-in-out;
        }
      `}</style>

      
    </section>
  );
}
