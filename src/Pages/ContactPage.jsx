import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    education: "",
    percentage: "",
    course: "",
    country: "",
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData((prev) => ({
      ...prev,
      country: country,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = "9800000000"; // Demo number for WhatsApp

    const message =
      `Hello SEMLA educational Consultnacy,%0A%0A` +
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Email: ${formData.email}%0A` +
      `Education: ${formData.education}%0A` +
      `Percentage: ${formData.percentage}%0A` +
      `Course Interested: ${formData.course}%0A` +
      `Preferred Country: ${formData.country}%0A`;

    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-sky-600 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/images/contact.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover brightness-75 z-0"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-4 transition-all duration-1000 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } bg-gradient-to-r from-yellow-300 to-pink-500 bg-clip-text text-transparent`}
          >
            Let’s Talk About Your Future Stay
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto text-white/90 transition-all duration-1000 delay-200 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Contact{" "}
            <span className="font-bold text-yellow-300">SEMLA EDUCATION</span>{" "}
            in Chabel, Kathmandu for personalized bookings, inquiries, and
            travel assistance.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gradient-to-b from-[#f0f4ff] to-[#dfe9f3] px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-6 animate-fade-in-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Contact <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-gray-600">
              We're located at Chabel, kathmandu — a heart of hospitality in
              Kathmandu. Drop by for bookings, recommendations, or a warm cup of
              tea with us.
            </p>

            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone:</h4>
                  <p className="text-gray-700">+9779800000000</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p className="text-gray-700">info@semla.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-md">
              <h4 className="font-semibold text-blue-700 mb-2">
                Visit Us on Google Map
              </h4>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0591533455954!2d85.31033977546504!3d27.712113376189097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f0ec9c3a5%3A0x6d1820df3b77dd53!2sChhetrapati%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1722999999999!5m2!1sen!2snp"
                width="100%"
                height="250"
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Send Us a Message
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Let us know how we can help you. Fill out the form and we’ll get
              back shortly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Education Level</option>
                  <option>+2 Completed</option>
                  <option>Bachelor Completed</option>
                  <option>Master Completed</option>
                  <option>Other</option>
                </select>
                <input
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                  placeholder="Percentage"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Course Interested</option>
                <option>Hotel Management in Austria</option>
                <option>IT in Japan</option>
                <option>Engineering in Finland</option>
                <option>Other</option>
              </select>

              <button
                type="submit"
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
