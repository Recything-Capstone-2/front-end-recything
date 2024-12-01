import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { faqData } from "../constant/faqData";
import bgimg from "../../../assets/images/bg-faq.png";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const FAQSection = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Overlay Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75 z-0"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      ></div>

      <main className="faq-section py-12 relative z-10">
        {/* Main Title */}
        <div className="container mx-auto px-6 lg:px-16">
          <h2 className="text-3xl font-bold text-center text-black-neutral08 my-20">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 lg:px-16 flex gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-2/5">
            <div>
              <h2 className="text-2xl font-bold text-black-neutral08 mb-4 text-center md:text-left">
                Temukan Jawaban, Dapatkan Solusi
              </h2>
              <p className="text-black-neutral08 text-base leading-relaxed">
                Kami menyediakan jawaban atas pertanyaan umum tentang aplikasi,
                fitur-fitur utama, dan cara melaporkan atau mendaur ulang
                sampah. Temukan informasi yang Anda butuhkan untuk pengalaman
                yang lebih mudah dan efektif dalam menjaga lingkungan bersama
                kami. <br /> <br />
                Jika anda memiliki pertanyaan lain, silahkan ajukan kepada
                Greenly Assistant dengan menekan tombol dibawah ini!
              </p>
              <div className="mt-8 flex justify-center">
                <button className="w-full lg:w-auto flex items-center justify-center gap-2 bg-primary-05 text-white font-semibold py-3 px-5 rounded-md hover:bg-green-600 transition-all duration-300">
                  <HiChatBubbleLeftRight className="w-5 h-5" />
                  Tanya Greenly Assistant
                </button>
              </div>
            </div>
          </div>

          {/* Right Section: Accordion */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-5">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openAccordion === index}
                  onToggle={handleAccordionToggle}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQSection;
