'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import MotionWrapper from './MotionWrapper';

export interface FAQItem {
  question: string;
  answer: string;
  link?: {
    url: string;
    text: string;
  };
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
}

const FAQSection = ({ 
  faqs, 
  title = "Perguntas Frequentes",
  subtitle = "Tire suas dúvidas sobre a emissão de NFS-e em Goiânia"
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Schema FAQPage - Gerado dinamicamente baseado nas FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Schema FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <MotionWrapper className="text-center mb-12 max-w-3xl mx-auto" direction="up">
          <div className="inline-flex items-center gap-2 bg-slate-800 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm border border-slate-700">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {subtitle}
          </p>
        </MotionWrapper>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <MotionWrapper key={index} direction="up" delay={index * 0.05}>
              <div 
                className={`bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-primary shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index 
                        ? 'rotate-180 text-primary' 
                        : 'text-slate-400 group-hover:text-primary'
                    }`}
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-0">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </p>
                      {faq.link && (
                        <a 
                          href={faq.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline"
                        >
                          {faq.link.text}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

