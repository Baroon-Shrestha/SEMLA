import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export default function HomeIntro() {
  const faqs = [
    {
      question: "What services does SEMLA offer for studying in Japan?",
      answer:
        "SEMLA Educational Consultancy Pvt. Ltd. provides complete guidance for studying in Japan—from selecting the right language school or university, assisting with course selection, preparing documentation and SOPs, to applying for your student visa. We also help with accommodation, part-time job advice, and ongoing support after you arrive in Japan.",
    },
    {
      question: "How does SEMLA help with the Japanese student visa process?",
      answer:
        "We guide you step-by-step—from preparing financial statements and completing visa forms to training for interviews and ensuring timely submission. Our experienced counselors make sure you meet embassy requirements and improve your approval chances.",
    },
    {
      question:
        "Can SEMLA help me choose the right college or language school?",
      answer:
        "Yes! Our expert counselors evaluate your background, goals, and preferences to match you with the best-fit Japanese institutions. We have trusted partner schools in Tokyo, Osaka, Kyoto, and more—covering both academic and vocational pathways.",
    },
    {
      question: "Does SEMLA provide support after reaching Japan?",
      answer:
        "Absolutely. SEMLA stays with you throughout your journey. From airport pickup assistance to helping you register for health insurance or part-time work guidance—we ensure you’re not alone even after you land in Japan.",
    },
    {
      question: "Is Japanese language proficiency required to apply?",
      answer:
        "For most language schools, no prior Japanese knowledge is needed. However, for colleges and universities, a basic understanding or JLPT certification might be required. SEMLA will guide you to suitable programs based on your current level.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9FAFB] py-16 px-6 sm:px-8 lg:px-20 xl:px-32 text-[#0D1B2A]">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#475569] text-base sm:text-lg max-w-3xl mx-auto">
          Have questions about studying in Japan? We’ve answered the most common
          ones students ask us at SEMLA.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b border-gray-200 ${
              index === faqs.length - 1 ? "border-b-0" : ""
            } hover:bg-[#F4F7FB] transition-colors duration-300`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none"
            >
              <span className="font-semibold text-lg sm:text-xl pr-4">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <Minus size={22} className="text-[#0D1B2A]" />
                ) : (
                  <Plus size={22} className="text-[#0D1B2A]" />
                )}
              </div>
            </button>
            {openIndex === index && (
              <div className="px-8 pb-6 text-[#334155] text-base sm:text-lg leading-relaxed transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14">
        <p className="text-[#334155] text-base sm:text-lg mb-2">
          Still have questions or need a personalized consultation?
        </p>
        <a
          href="/contact"
          className="inline-flex items-center text-[#89CFF0] font-medium hover:underline"
        >
          Talk to a SEMLA counselor now
          <ArrowRight size={18} className="ml-1" />
        </a>
      </div>
    </section>
  );
}
