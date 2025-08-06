import React, { useRef, useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

// Reusable card component
const RequirementCard = ({ title, items, bgColor }) => (
  <div className={`rounded-lg p-6 shadow-md ${bgColor}`}>
    <h3 className="text-xl font-semibold mb-4 text-[#1A1A1A]">{title}</h3>
    <ul className="space-y-3 text-sm text-gray-800">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function StudyKorea() {
  const form = useRef();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "Do I need to speak Korean to study in Korea?",
    answer:
      "No, fluency in Korean is not mandatory to study in South Korea, especially if you apply for programs that are taught in English. Many top universities in Korea, such as Yonsei University, Korea University, and KAIST, offer a wide range of undergraduate and postgraduate courses in English. However, learning basic Korean is strongly recommended for daily life, communication with locals, using public transport, shopping, and part-time job opportunities. Students who speak Korean tend to adapt more quickly and enjoy a richer cultural experience while studying in Korea."
  },
  {
    question: "What are the language test requirements?",
    answer:
      "Language requirements depend on the medium of instruction. For English-taught programs, most universities accept international English tests like IELTS (typically 5.5–6.5), TOEFL, or equivalent. For Korean-taught programs, applicants are often required to submit a TOPIK (Test of Proficiency in Korean) score — usually level 3 or above for undergraduate and level 4 or higher for graduate programs. Some universities also conduct their own language interviews or accept certificates of prior education in English as an alternative to IELTS."
  },
  {
    question: "Can I work part-time while studying in Korea?",
    answer:
      "Yes, international students in South Korea can legally work part-time while studying, but certain conditions apply. Students must obtain a work permit (S-3) from the immigration office. With this permit, you can work up to 20 hours per week during the semester and unlimited hours during university vacations. Common part-time jobs include working at restaurants, cafés, retail stores, or even tutoring English or your native language. Students must maintain academic performance and attendance to retain work permission. Knowledge of basic Korean is usually required by employers."
  },
  {
    question: "Are scholarships available for international students?",
    answer:
      "Absolutely. South Korea offers a wide range of scholarships to attract international students. The most prestigious one is the Korean Government Scholarship Program (GKS), which covers full tuition, monthly living stipend, airfare, medical insurance, and settlement allowance. Many universities also offer generous merit-based scholarships that cover 30% to 100% of tuition fees. These scholarships are often awarded based on academic performance, recommendation letters, motivation statements, and language proficiency. Some universities also offer entrance scholarships for high-performing applicants without a separate application."
  },
  {
    question: "How much does it cost to study in Korea?",
    answer:
      "Tuition fees in South Korea are relatively affordable compared to many Western countries. Public universities charge between $3,000 to $6,000 per year, while private universities may cost between $5,000 to $10,000 per year, depending on the program and level of study. Engineering, Medicine, and Arts programs tend to be slightly more expensive. Living expenses — including food, transport, utilities, and other daily costs — range from $300 to $600 per month. Accommodation (dormitory or private housing) may cost an additional $200 to $400 monthly. Seoul is more expensive compared to other cities like Busan, Daegu, or Daejeon."
  },
  {
    question: "What visa do I need to study in Korea?",
    answer:
      "To study in South Korea, international students need to apply for a **D-2 Student Visa**. This visa is issued by the Korean Immigration Office and processed through the Korean Embassy or Consulate in your country. To apply, you need to submit your university admission letter, financial proof (showing ability to support tuition and living expenses), passport, visa application form, and other supporting documents. Once in Korea, you must register your residence and visa status at the local immigration office and obtain an Alien Registration Card (ARC) within 90 days. The D-2 visa can be renewed annually based on academic progress and university confirmation."
  }
];


  const sendWhatsApp = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const preferredStudy = formData.get("preferred_study");
    const message = formData.get("message");

    const whatsappMessage = `Hello Omni Global,%0A%0AI am interested in studying in Korea. Here are my details:%0A%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Preferred Study: ${preferredStudy}%0A
Message: ${message}%0A%0APlease get in touch with me.`;

    const whatsappURL = `https://wa.me/9779868566333?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");

    form.current.reset();
  };

  return (
    <>
      {/* HERO + FORM SECTION */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/Korea.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
          <div className="text-white space-y-6">
            <h4 className="text-lg font-medium bg-white/20 inline-block px-3 py-1 rounded-full">
              Your Gateway to Korean Education
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              Study in South Korea
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-gray-100">
              Unlock opportunities in a vibrant academic and cultural environment.
              From cutting-edge technology to global recognition, let Omni Global guide you.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Get Free Consultation
            </a>

            <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-200">
              <div className="flex items-center space-x-2">
                <span className="text-[#FF6B00]">✔</span>
                <span>Top Universities</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#FF6B00]">✔</span>
                <span>Global Recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#FF6B00]">✔</span>
                <span>World-Class Research</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#FF6B00]">✔</span>
                <span>Cultural Diversity</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div id="form" className="bg-white/95 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#005B99] mb-4">
              Get Expert Korea Study Guidance
            </h3>
            <form ref={form} onSubmit={sendWhatsApp} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0096FF]"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Enter Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0096FF]"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0096FF]"
              />
              <select
                name="preferred_study"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0096FF]"
              >
                <option value="">Select Preferred Study</option>
                <option>Undergraduate</option>
                <option>Postgraduate</option>
                <option>PhD</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell us about your study plans"
                rows="3"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0096FF]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 rounded-lg transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ELIGIBILITY SECTION */}
      <section className="py-20 px-4 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002244] mb-4">
            Eligibility Requirements for Studying in Korea
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Nepalese students must meet the following requirements to apply for Korean universities and obtain a student visa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <RequirementCard
              title="Academic Requirements"
              bgColor="bg-blue-50"
              items={[
                "Completed +2 with minimum 60%",
                "Bachelor's degree for master's programs (if applicable)",
                "Good academic record in relevant stream",
                "Official transcripts and certificates",
              ]}
            />
            <RequirementCard
              title="Test Requirements"
              bgColor="bg-green-50"
              items={[
                "TOPIK (Korean Language Test) - Optional but recommended",
                "IELTS/TOEFL may be required by some universities",
                "University-specific entrance exams (if any)",
                "Portfolio for design/arts-related programs",
              ]}
            />
            <RequirementCard
              title="Financial Requirements"
              bgColor="bg-yellow-50"
              items={[
                "Proof of financial support for tuition + living",
                "Recent bank statement showing sufficient funds",
                "Sponsorship letter from parents/guardians if supported",
                "Scholarship or grant documents (if available)",
              ]}
            />
            <RequirementCard
              title="Visa Requirements"
              bgColor="bg-red-50"
              items={[
                "Valid Korean D-2 student visa",
                "Admission letter/I-20 equivalent from Korean university",
                "Visa application + fee receipt",
                "Proof of return intent (strong ties to Nepal)",
              ]}
            />
          </div>

          <div className="mt-12 bg-blue-100 p-6 rounded-lg text-center text-[#1A1A1A] shadow-sm">
            <h4 className="text-lg font-bold">Omni Global Success Rate</h4>
            <p className="mt-2 text-sm">
              We have a <span className="font-semibold">high approval rate</span> for Korean student visas thanks to our personalized guidance and document support. Your success is our mission!
            </p>
          </div>
        </div>
      </section>

      {/* VOCATIONAL VISA INFO SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/Study Korea.jpg"
            alt="Study in Korea Poster"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#FF6B00]">Study in South Korea (Vocational)</h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li><strong>Visa Code:</strong> D-4-7 (Vocational)</li>
              <li>GPA Required: 2.5 minimum</li>
              <li>GAP: 3–4 years accepted</li>
              <li>TOPIK / King Sejong: Level 2 required</li>
              <li>Part-time job allowed while studying</li>
              <li>E-7 Work Visa available after course completion</li>
            </ul>
            <button className="mt-4 bg-[#FF6B00] hover:bg-[#FF8533] text-white px-6 py-3 rounded-lg text-sm font-semibold transition">
              Apply for December Intake
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002244]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-2">
            Everything you need to know before starting your Korean study journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-[#FF6B00] font-semibold text-lg sm:text-xl"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-[#FF6B00]" />
                ) : (
                  <ChevronDown size={20} className="text-[#FF6B00]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
