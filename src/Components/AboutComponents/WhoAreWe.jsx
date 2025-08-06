import React from "react";
import { Link } from "react-router-dom";

export default function WhoAreWe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
                Semla
              </h1>
              <div className="w-24 h-1 bg-[#F6C90E] rounded-full"></div>
            </div>

            <div className="space-y-6 leading-relaxed">
              <p className="text-xl font-semibold text-gray-900">
                Shaping futures through expert guidance for Japan.
              </p>

              <p className="text-lg font-medium text-gray-900">
                Semla Educational Consultancy is a trusted name in Japanese
                education consulting, helping students unlock opportunities for
                higher studies in Japan. We specialize in Japanese language
                training, university placements, and complete visa processing
                support.
              </p>

              <p className="text-lg font-medium text-gray-900">
                Our mission is to empower Nepali students with the knowledge,
                cultural preparation, and academic direction necessary to thrive
                in Japan’s competitive educational environment. We guide them
                step-by-step—from language proficiency to university admission.
              </p>

              <p className="text-lg font-medium text-gray-900">
                Whether you’re preparing for language school or higher education
                in Japan, Semla is here to walk with you every step of the way,
                ensuring a smooth, professional, and culturally aware journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/courses"
                className="bg-gradient-to-r from-[#F6C90E] to-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Learn More
              </Link>

              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F6C90E] to-yellow-300 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <img
                  src="/images/Ielts1.jpg"
                  alt="Semla Counselling"
                  className="rounded-xl w-full object-cover mb-6 aspect-video"
                />

                {/* Stats or highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      3000+
                    </div>
                    <div className="text-sm text-gray-700">Students Guided</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">
                      95%
                    </div>
                    <div className="text-sm text-gray-700">
                      Visa Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
