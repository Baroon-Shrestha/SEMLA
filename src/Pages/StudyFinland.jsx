import React, { useRef, useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

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

export default function StudyFinland() {
  const form = useRef();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "Do I need IELTS to study in Finland?",
    answer:
      "Yes, in most cases, Finnish universities require proof of English language proficiency such as IELTS or TOEFL, especially for programs taught in English. However, some universities may offer alternatives such as an internal English test, online interview, or proof of previous education in English (like an English-medium bachelor's degree). The required IELTS band usually ranges from 6.0 to 6.5 depending on the course and university. If you're applying through a pathway program or via a partner institution, exceptions may apply. Always check directly with the university you're applying to."
  },
  {
    question: "Can I work part-time while studying?",
    answer:
      "Yes, international students in Finland with a residence permit for studies are allowed to work up to 30 hours per week during the academic term. During official holidays, semester breaks, or summer, students may work full-time. Jobs are available in restaurants, retail stores, courier services, and even at university campuses. Some students also take internships or research assistant roles. Being able to speak Finnish increases your chances of employment, although many service jobs accept English-speaking workers, especially in bigger cities."
  },
  {
    question: "Is education free in Finland?",
    answer:
      "Education in Finland is free for EU/EEA students, but non-EU/EEA students must pay tuition fees for most English-taught bachelor's and master's programs. These fees range from €4,000 to €18,000 per year. Fortunately, many Finnish universities offer scholarships that can cover between 50% and 100% of tuition fees, and in some cases include a living cost allowance. Doctoral (PhD) programs are usually tuition-free and may include a monthly stipend or salary if tied to research or teaching."
  },
  {
    question: "What visa is needed for studying?",
    answer:
      "Students from outside the EU/EEA must apply for a **residence permit for studies** before arriving in Finland. This is not the same as a tourist visa. To apply, you need a letter of admission from a Finnish university, proof of financial means (about €560 per month or €6,720 per year), valid health insurance, a passport, and other supporting documents. The application process is handled online through the Enter Finland portal and requires a biometric appointment at a VFS center or Finnish Embassy. The permit is typically issued for one academic year and must be renewed before expiry."
  },
  {
    question: "Can I stay in Finland after completing my studies?",
    answer:
      "Yes, after graduation, students can apply for a residence permit to look for a job or start a business in Finland. This is known as a 'job-seeking permit' and is typically valid for up to one year. If you find a job related to your field, you can then apply for a work-based residence permit. Finland encourages skilled graduates to stay and contribute to the local economy, and the process of transitioning from a student permit to a work permit is relatively smooth if all documentation is in order."
  },
  {
    question: "What are the most popular courses for international students in Finland?",
    answer:
      "Finland is well known for its excellence in education and offers a variety of popular programs in English. These include Information Technology, Computer Science, Engineering (especially Electrical, Mechanical, and Environmental), Business Administration, International Business, Health Sciences, Nursing, and Education. Universities of Applied Sciences (UAS) focus more on practical and career-based training, which attracts students seeking job-ready skills."
  },
  {
    question: "What is the average cost of living for students in Finland?",
    answer:
      "The monthly living expenses for international students in Finland usually range between €600 to €900 depending on the city and lifestyle. This includes rent, food, transport, internet, study materials, and personal costs. Cities like Helsinki, Tampere, and Espoo tend to be more expensive, while smaller cities are more affordable. Students can use public transportation with discounted student fares, and many save on meals by cooking at home or eating in subsidized university cafeterias."
  },
  {
    question: "Is student accommodation available in Finland?",
    answer:
      "Yes, most universities in Finland help international students arrange student housing through local student housing foundations or associations. These accommodations are generally affordable and located near campuses. Students can choose between shared apartments, studio flats, or dormitory-style rooms. Rent can range from €250 to €500 per month, depending on location and facilities. Early application for housing is recommended, as student flats are in high demand during peak intake periods."
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

    const whatsappMessage = `Hello Omni Global,%0A%0AI am interested in studying in Finland. Here are my details:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0APreferred Study: ${preferredStudy}%0AMessage: ${message}%0A%0APlease get in touch with me.`;

    const whatsappURL = `https://wa.me/9779868566333?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
    form.current.reset();
  };

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/finland.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20">
          <div className="text-white space-y-6">
            <h4 className="text-lg font-medium bg-white/20 inline-block px-3 py-1 rounded-full">
              Study in Finland
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg">
              World-Class Education in a Safe Nordic Country
            </h1>
            <p className="text-lg md:text-xl max-w-lg text-gray-100">
              Get globally recognized degrees with affordable tuition, scholarships, and work opportunities.
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
              Apply for Finland Studies
            </h3>
            <form ref={form} onSubmit={sendWhatsApp} className="space-y-4">
              <input type="text" name="user_name" placeholder="Your Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input type="email" name="user_email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <input type="tel" name="user_phone" placeholder="Phone Number" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <select name="preferred_study" required className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <option value="">Select Preferred Study</option>
                <option>Undergraduate</option>
                <option>Master's</option>
                <option>Vocational</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="3" required className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
              <button type="submit" className="w-full bg-[#FF6B00] hover:bg-[#FF8533] text-white font-semibold py-3 rounded-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* POSTER IMAGE */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/StudyFinland.jpg"
            alt="Study in Finland Poster"
            className="rounded-xl shadow-md w-full object-cover"
          />
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#FF6B00]">
              Study in Finland – Apply Now
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>IELTS 6.0 or equivalent</li>
              <li>GAP accepted up to 5 years</li>
              <li>Affordable tuition & living</li>
              <li>30 hrs/week part-time jobs</li>
              <li>Residence permit support</li>
            </ul>
            <button className="mt-4 bg-[#FF6B00] hover:bg-[#FF8533] text-white px-6 py-3 rounded-lg text-sm font-semibold transition">
              Apply for 2025 Intake
            </button>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 px-4 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#002244] mb-4">
            Finland Study Requirements
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Check all academic, financial, and visa eligibility before applying.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RequirementCard
              title="Academic"
              bgColor="bg-blue-50"
              items={[
                "Minimum +2 or Bachelor’s completion",
                "Marksheets & certificates required",
                "IELTS/TOEFL for English programs",
              ]}
            />
            <RequirementCard
              title="Visa & Finance"
              bgColor="bg-green-50"
              items={[
                "Residence permit application",
                "Proof of funds €6720/year",
                "Acceptance letter from Finnish institution",
              ]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#002244]">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-2">
            Common queries about studying in Finland for Nepalese students.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
