import React, { useRef, useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

const RequirementCard = ({ title, items, bgColor }) => (
  <div className={`rounded-lg p-6 shadow-md ${bgColor}`}>
    <h3 className="text-xl font-semibold mb-4 text-[#005B99]">{title}</h3>
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

export default function StudyCyprus() {
  const form = useRef();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "Is IELTS required to study in Cyprus?",
    answer:
      "In most cases, IELTS is not mandatory to study in Cyprus, which makes it a popular destination for students from non-English-speaking countries. Many universities offer English-taught programs and accept students based on previous education in English medium schools or colleges. If you have completed your high school or undergraduate degree in English, a certificate from your institution stating this may be enough. However, certain programs, especially in fields like Medicine or Law, or institutions with higher academic standards, might still ask for proof of English proficiency through IELTS, TOEFL, or a university-specific English test. Always check the exact language requirements with your desired university. Additionally, some institutions may conduct a short online interview or an English placement test as part of the admission process."
  },
  {
    question: "Can I work while studying in Cyprus?",
    answer:
      "Yes, international students in Cyprus are allowed to work under specific conditions. After six months of continuous study, students can apply for a work permit that allows them to work up to 20 hours per week during academic semesters. During official university breaks and holidays, students are allowed to work full-time. Work opportunities are typically available in sectors such as hospitality (hotels, cafes, restaurants), food delivery, supermarkets, cleaning services, and customer support centers. However, students must coordinate with the university and local authorities to ensure they comply with labor laws. The income from part-time jobs can help with personal expenses, but it's important to note that it may not fully cover tuition or all living costs. Institutions often assist students with finding suitable part-time roles or provide access to job boards and employer networks."
  },
  {
    question: "Are scholarships available in Cyprus?",
    answer:
      "Yes, several universities in Cyprus offer scholarships and tuition discounts to international students. These scholarships are mainly merit-based and awarded to students with strong academic records. For example, students who achieve excellent grades in their previous studies may receive a 25% to 50% reduction in tuition fees. Some universities also offer scholarships for sports, arts, or leadership achievements. A few institutions provide need-based financial aid, especially if you can demonstrate financial hardship. In some cases, early applicants or students from specific countries may also be eligible for additional benefits or discounts. While Cyprus does not have as many large government-funded scholarships as other countries, the affordable cost of education combined with partial scholarships makes it an accessible study destination. Make sure to apply early and submit all required documents such as transcripts, recommendation letters, and a motivation letter."
  },
  {
    question: "What is the cost of studying in Cyprus?",
    answer:
      "Cyprus is considered one of the most affordable study destinations in Europe. Tuition fees for undergraduate programs range from €3,000 to €8,000 per year depending on the course and institution. Courses like Business, IT, Tourism, and Engineering are generally on the lower end, while specialized programs such as Medicine or Dentistry may cost more. Postgraduate (Master's) programs usually range from €4,000 to €10,000 annually. Living expenses are also quite reasonable. On average, students spend between €300 and €600 per month on housing, food, transportation, mobile and internet, and personal expenses. Shared accommodations and university hostels offer cheaper alternatives to private apartments. The cost of living may vary depending on the city, with places like Nicosia and Limassol being slightly more expensive. Many students also manage to reduce their expenses by working part-time jobs. Overall, Cyprus offers a great balance between quality education and cost-effectiveness."
  },
  {
    question: "What visa do I need for Cyprus?",
    answer:
      "To study in Cyprus, you will need to apply for a Cyprus Student Visa, which is specifically issued to international students enrolling in academic programs. The visa process generally begins after receiving an official offer letter or confirmation of admission from a recognized Cypriot university. Required documents include a valid passport, passport-size photographs, academic transcripts, proof of sufficient financial means to cover tuition and living expenses, a medical clearance certificate, police clearance report, and valid health insurance. The student visa is usually issued for one academic year and must be renewed annually. After arriving in Cyprus, students must also register with the Civil Registry and Migration Department within 7 days and undergo a medical check-up. It's important to apply for your visa well in advance, as processing times can take several weeks. Many universities assist with the visa application process and provide guidance on gathering and submitting the required documents. Keep in mind that attending classes regularly and maintaining good academic standing are essential to keeping your student visa valid."
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



    const sendWhatsApp = (e)  =>{
      e.preventDefault();
      const formData = new FormData (form.current);
      const name = formData.get("user_name");
      const email = formData.grt("user_phonr");
      const preferredStudy = formData.get("preferred_study");
      const message = formData.get("message")
    }

    const msg = `
*Cyprus Study Inquiry - Omni Global*
*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Preferred Study:* ${preferredStudy}
*Message:* ${message}

Please contact me as soon as possible.
    `;

    const encodedMsg = encodeURIComponent(msg.trim());
    const whatsappURL = `https://wa.me/9779868566333?text=${encodedMsg}`;
    window.open(whatsappURL, "_blank");
    form.current.reset();
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/cyprus.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
          <div className="text-white space-y-6">
            <h4 className="text-md font-medium bg-white/20 inline-block px-3 py-1 rounded-full">
              Study in Cyprus
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg text-white">
              Affordable Education in Europe
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-white/90">
              Explore top universities with globally recognized programs in a
              safe and welcoming environment.
            </p>
            <a
              href="#form"
              className="inline-block bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Get Free Consultation
            </a>
          </div>

          {/* FORM */}
          <div id="form" className="bg-white/95 rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#005B99] mb-4">
              Apply for Cyprus Now
            </h3>
            <form ref={form} onSubmit={sendWhatsApp} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
              <select
                name="preferred_study"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
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

      {/* POSTER IMAGE SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/Study Cyprus.jpg"
            alt="Study in Cyprus Poster"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#FF6B00]">
              Cyprus Study Overview
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Affordable tuition and living</li>
              <li>English-taught programs widely available</li>
              <li>No IELTS required in most universities</li>
              <li>Visa support and fast processing</li>
              <li>Post-study pathways in Europe</li>
            </ul>
            <button className="mt-4 bg-[#005B99] hover:bg-[#0078CC] text-white px-6 py-3 rounded-lg text-sm font-semibold transition">
              Apply for Upcoming Intake
            </button>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 px-4 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#005B99] mb-4">
            Cyprus Study Requirements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Basic academic, language, and visa guidelines for Nepalese students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RequirementCard
              title="Academic Requirements"
              bgColor="bg-blue-50"
              items={[
                "Passed +2 with at least 50%",
                "Bachelor's degree for master's programs",
                "Academic transcripts and certificates",
              ]}
            />
            <RequirementCard
              title="Language Requirements"
              bgColor="bg-green-50"
              items={[
                "IELTS not always mandatory",
                "English-medium background may be sufficient",
                "Some universities require an interview or test",
              ]}
            />
            <RequirementCard
              title="Financial Requirements"
              bgColor="bg-yellow-50"
              items={[
                "Proof of funds for 1-year expenses",
                "Bank statement of sponsor or self",
                "Sponsorship letter if applicable",
              ]}
            />
            <RequirementCard
              title="Visa Requirements"
              bgColor="bg-red-50"
              items={[
                "University admission letter",
                "Medical clearance certificate",
                "Passport & passport-size photos",
                "Visa fee and completed application form",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#005B99]">
            Frequently Asked Questions 
          </h2>
          <p className="text-gray-600 mt-2">
            Need answers before applying? Explore the most common queries.
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
