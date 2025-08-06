import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courseCategories = [
  {
    title: "IELTS Preparation",
    description:
      "Our IELTS Preparation program is designed to help you unlock your full potential by strengthening your skills in Listening, Reading, Writing, and Speaking. With structured lessons, mock tests, and personalized feedback from certified experts, this course empowers you to perform with confidence on test day. Whether you're aiming for academic or general training, every module is tailored to meet your goals and elevate your English proficiency.",
    image: "/images/Ielts.jpg",
    color: "from-blue-500 to-blue-700",
    icon: "🎯",
    details:
      "This course includes real-time practice tests, targeted strategies for each IELTS section, and individual mentorship to improve fluency, vocabulary, and test confidence.",
  },
  {
    title: "PTE Classes",
    description:
      "The PTE Academic course is built for modern learners looking to ace the test through a smart, technology-driven approach. With AI-evaluated mock tests, instructor-led sessions, and focused practice exercises, you'll strengthen your speaking, writing, reading, and listening abilities. This course equips you with tools and strategies specifically aligned with the PTE format, giving you the clarity and control you need to succeed.",
    image: "/images/images (5).jpg",
    color: "from-green-500 to-green-700",
    icon: "📚",
    details:
      "Get tailored practice sets, advanced AI mock exams, and coaching on score-improving techniques—all optimized for the PTE Academic structure.",
  },
  {
    title: "TOEFL Coaching",
    description:
      "Our TOEFL Coaching program is perfect for students preparing to study or work in English-speaking countries. You’ll master academic English through interactive sessions that sharpen your reading comprehension, writing clarity, listening accuracy, and speaking fluency. With simulated test environments and instructor insights, this course builds both your confidence and competence.",
    image: "/images/images (4).jpg",
    color: "from-purple-500 to-purple-700",
    icon: "🏆",
    details:
      "Includes in-depth lessons, skill-building tasks, and full-length practice tests to help you tackle the TOEFL confidently and effectively.",
  },
  {
    title: "Japanese Language (JLPT)",
    description:
      "Whether you're just starting out or targeting N1 level proficiency, our Japanese Language course prepares you thoroughly for the JLPT exam. The curriculum blends grammar, vocabulary, listening, and reading skills with cultural knowledge, creating a balanced learning experience. Native instructors guide you step by step with practical exercises and JLPT-style test simulations.",
    image: "/images/japan.jpg",
    color: "from-red-500 to-red-700",
    icon: "🌸",
    details:
      "Study with experienced Japanese tutors, engage in interactive learning, and progress from N5 to N1 with JLPT-aligned training and feedback.",
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#e8f9f9] to-[#d1f0f0] py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 text-sm rounded-full bg-orange-100 text-orange-600 font-medium tracking-wide shadow">
              Start your success story
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Explore Our Most In-Demand Courses
            </h1>
            <p className="text-gray-700 text-base">
              As Nepal’s top education consultancy, we guide you toward your
              international academic goals with expert-led coaching programs and
              real-world test strategies.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-900 transition font-semibold">
              Get Free Counseling
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <img
              src="/images/AboutHero.jpg"
              alt="Education Hero"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Courses Section */}
      {courseCategories.map((course, idx) => (
        <div key={idx} className="max-w-7xl mx-auto px-6 py-12">
          <div
            className={`flex flex-col ${
              idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 space-y-4"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                {course.icon} {course.title}
              </h2>
              <p className="text-gray-700">{course.description}</p>
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl hover:from-orange-600 hover:to-red-600 transition"
              >
                Learn More
              </button>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <div className="w-full h-64">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-lg w-full p-8 rounded-2xl shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold"
              >
                &times;
              </button>

              {/* Modal Content */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedCourse.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedCourse.details}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
