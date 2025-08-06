import React from "react";

export default function Successstories() {
  const studentImages = [
    "student01.jpg",
    "student02.jpg",
    "student03.jpg",
    "student04.jpg",
    "student05.jpg",
    "student06.jpg",
  ];
  return (
    <div>
      <section className="bg-white py-12 px-4 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Success Stories
          </h2>
          <p className="text-gray-600 mt-2">Meet our proud students</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {studentImages.map((img, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={`/images/${img}`}
                alt={`Student ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
