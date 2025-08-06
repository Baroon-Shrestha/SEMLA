import React from "react";
import { motion } from "framer-motion";
import WhoAreWe from "./WhoAreWe";

export default function AboutHero() {
  return (
    <div className="relative">
      {/* Hero Section with Background Image and Dark Overlay */}
      <div
        className="w-full h-[70vh] bg-center bg-cover flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/images/japan.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1A1A2E]/30 z-10"></div>

        {/* Animated Title and Description */}
        <div className="relative z-20 text-white text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-snug"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
          >
            <span className="text-[#F6C90E]">About</span>{" "}
            <span className="bg-gradient-to-r from-[#F6C90E] to-yellow-300 bg-clip-text text-transparent">
              Semla Consultancy
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base md:text-xl font-medium leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
          >
            <span className="font-semibold text-white">
              Semla Educational Consultancy
            </span>{" "}
            is dedicated to helping students pursue their academic goals in
            Japan. We provide complete support in
            <span className="text-[#F6C90E] font-semibold">
              {" "}
              Japanese language training
            </span>
            ,
            <span className="text-[#F6C90E] font-semibold">
              {" "}
              university and college admission
            </span>
            , and
            <span className="text-[#F6C90E] font-semibold">
              {" "}
              visa processing
            </span>
            . Our mission is to ensure every student has the guidance and
            resources to succeed in Japan.
          </motion.p>
        </div>
      </div>

      {/* Additional About Section */}
      <WhoAreWe />
    </div>
  );
}
