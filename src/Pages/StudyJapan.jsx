import React, { useRef, useState } from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Send,
  HelpCircle,
} from "lucide-react";

const RequirementCard = ({ title, items, bgColor }) => (
  <div
    className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${bgColor}`}
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-3 text-sm text-gray-700">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle className="text-green-600 w-5 h-5 mt-0.5 flex-shrink-0" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function StudyJapan() {
  const [openIndex, setOpenIndex] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    preferred_study: "",
    message: "",
  });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const { user_name, user_email, user_phone, preferred_study, message } =
      formData;

    if (
      !user_name ||
      !user_email ||
      !user_phone ||
      !preferred_study ||
      !message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    const whatsappMessage = `Hello SEMLA,%0A%0AI am interested in studying in Japan. Here are my details:%0A%0AName: ${user_name}%0AEmail: ${user_email}%0APhone: ${user_phone}%0APreferred Study: ${preferred_study}%0AMessage: ${message}%0A%0APlease get in touch with me.`;
    const whatsappURL = `https://wa.me/9779818739823?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      preferred_study: "",
      message: "",
    });

    setFormSubmitted(true);

    // Reset success message after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: "Why choose Japan for higher education?",
      answer:
        "Japan offers a unique blend of advanced academic research, global innovation, and rich cultural tradition. Its universities are highly ranked globally, with many offering English-medium programs and outstanding support for international students.",
    },
    {
      question: "Does SEMLA support the entire admission process?",
      answer:
        "Yes. SEMLA provides comprehensive support – from university selection, documentation, application, interview preparation, visa assistance, to pre-departure training.",
    },
    {
      question: "Do Japanese institutions accept students with academic gaps?",
      answer:
        "Yes. Most vocational and language programs accept students with up to 3–4 years of academic gap, provided there is a valid explanation and strong motivation letter.",
    },
    {
      question: "Can I study in English in Japan?",
      answer:
        "Absolutely. Several Japanese universities offer full-time programs in English, especially in engineering, business, and international studies. However, basic Japanese is recommended for daily life.",
    },
    {
      question: "Are scholarships available for international students?",
      answer:
        "Yes. MEXT, JASSO, and university-based merit scholarships are available. SEMLA assists in identifying and applying for suitable scholarship options.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-[70vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/japan.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
          <div className="text-white space-y-6">
            <h4 className="text-lg font-medium bg-white/20 inline-block px-3 py-1 rounded-full">
              Study in Japan with SEMLA
            </h4>
            <h1 className="text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Learn. Live. Grow in Japan.
            </h1>
            <p className="text-lg max-w-lg text-gray-100">
              SEMLA helps Nepali students discover their path to Japanese
              universities and vocational schools with expert guidance and
              real-time support.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#1B263B]  text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Start Application
            </a>
          </div>
        </div>
      </div>

      {/* JAPAN POSTER */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/eligibility.jpg"
            alt="Study in Japan Poster"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#1B263B]">
              Eligibility Criteria for Japan Admission
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Minimum GPA: 2.8 (for +2 graduates)</li>
              <li>Academic gap accepted up to 4 years (with justification)</li>
              <li>
                Japanese Language: JLPT N5/N4 for vocational, N2+ for university
              </li>
              <li>Financial proof/sponsorship mandatory for visa</li>
              <li>Part-time work allowed (up to 28 hrs/week)</li>
            </ul>
            <button className="mt-4 bg-[#1B263B]  text-white px-6 py-3 rounded-lg text-sm font-semibold transition">
              Speak With SEMLA Counselor
            </button>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS SECTION */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Japan Study Requirements via SEMLA
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Review the academic, linguistic, financial, and legal documents
              necessary to begin your journey to Japan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RequirementCard
              title="Academic Qualifications"
              bgColor="bg-blue-50 border border-blue-100"
              items={[
                "+2 completion or Bachelor's degree",
                "Consistent GPA above 2.8 or equivalent",
                "Clear academic transcripts and certificates",
              ]}
            />
            <RequirementCard
              title="Language Proficiency"
              bgColor="bg-green-50 border border-green-100"
              items={[
                "JLPT N5-N2 depending on program",
                "IELTS 6.0+ for English-medium degrees",
                "Interview or SOP for some institutions",
              ]}
            />
            <RequirementCard
              title="Financial Documentation"
              bgColor="bg-yellow-50 border border-yellow-100"
              items={[
                "Bank balance certificate ($10,000 minimum)",
                "Sponsor letter or self-funded statement",
                "Scholarship award letters (if any)",
              ]}
            />
            <RequirementCard
              title="Visa Essentials"
              bgColor="bg-red-50 border border-red-100"
              items={[
                "Certificate of Eligibility (COE)",
                "University/college admission letter",
                "Valid passport & photo",
                "Proof of funds and intent",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ENHANCED WHATSAPP FORM */}
      <section
        id="form"
        className="bg-gradient-to-br from-blue-200 to-[#1B263B] py-18 px-4"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-[#1B263B] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Free Expert Counseling
            </h2>
            <p className="text-lg text-gray-600">
              Connect with our Japan education specialists via WhatsApp for
              personalized guidance
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl">
            {formSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent via WhatsApp. Our team will contact
                  you shortly.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl  focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleInputChange}
                      placeholder="+977 98XXXXXXXX"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl  focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Study Level *
                  </label>
                  <select
                    name="preferred_study"
                    value={formData.preferred_study}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors"
                  >
                    <option value="">Select your preferred study level</option>
                    <option>Japanese Language Course</option>
                    <option>Diploma / Vocational</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's / Postgraduate</option>
                    <option>PhD / Doctorate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your study goals, preferred subjects, or any specific questions you have..."
                    rows="4"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={sendWhatsApp}
                  className="w-full bg-[#1B263B] text-white font-bold py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-3 text-lg"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting, you agree to receive counseling information via
                  WhatsApp
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ENHANCED FAQ SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-16 h-16 text-[#1B263B] mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about studying in Japan through
              SEMLA
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-opacity-50 rounded-2xl"
                >
                  <span className="text-[#1B263B] font-bold text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#1B263B]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#1B263B]" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 bg-[#1B263B]  text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Contact Our Counselors
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
