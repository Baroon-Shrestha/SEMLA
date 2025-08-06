import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function HomeIntro2() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section ref={sectionRef} className="container mx-auto my-12 px-4">
      <div className="flex flex-col items-center gap-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-[#0D1B2A]">
              SEMLA Educational Consultancy
            </span>
          </h1>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-medium text-gray-700">
            Your Trusted Partner for a Brighter Future in Japan.
          </p>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-7xl w-full"
        >
          {/* Intro Paragraph */}
          <p className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700 mb-6">
            At SEMLA Educational Consultancy Pvt. Ltd., we specialize in guiding
            students, trainees, and professionals toward life-changing
            opportunities in Japan. Through expert counseling, language
            training, and comprehensive documentation support, we pave a clear
            and confident path toward success abroad.
          </p>

          <div className="relative">
            {/* Centered Floating Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="float-none mx-auto mb-6 md:float-right md:ml-8 md:mb-4 w-full md:w-1/2 lg:w-2/5"
            >
              <img
                src="/images/images (3).png" // <-- Replace with actual image path
                alt="SEMLA Consultancy"
                className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] object-cover object-bottom rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Text wrapping around image */}
            <div className="text-base sm:text-lg md:text-xl font-bolder text-justify text-gray-700">
              <p className="mb-4">
                <b>Our Mission</b> at SEMLA is to empower every individual with
                the tools, guidance, and support necessary to succeed
                academically and professionally in Japan. We go beyond the
                traditional role of a consultancy—we become your mentor, your
                support system, and your bridge to a rewarding future abroad.
              </p>

              <p className="mb-6">
                Whether you are aiming to study, work, or train in Japan, SEMLA
                offers structured language programs, transparent consultation,
                and personalized support to ensure a smooth journey. With a
                commitment to trust, integrity, and excellence, we strive to
                open global doors for aspiring individuals across Nepal and
                beyond.
              </p>

              <p className="mb-6">
                Our consultancy believes in a student-first philosophy. We
                listen to your goals, analyze your eligibility, and map out a
                realistic route to help you succeed. With partnerships across
                institutions in Japan and years of experience navigating visa
                processes, SEMLA ensures you're never alone in the process.
              </p>

              {/* Clear Float CTA */}
              <div className="clear-both text-center mt-8">
                <span className="text-[#0D1B2A] font-bold text-lg">
                  Start Your Journey With SEMLA Today
                </span>
                <br />
                <span className="font-extralight text-center italic">
                  Personalized guidance. Trusted expertise. Global
                  opportunities.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
