import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            Despejá tus dudas sobre los trámites y trabajos
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            Hacé clic en cada pregunta para ver la respuesta detallada. Si tenés otra consulta, escribinos por WhatsApp.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className={`bg-slate-50 border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-blue-500 bg-white shadow-md'
                    : 'border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-blue-600' : 'text-slate-500'}`} />
                    <span className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron Toggle Indicator */}
                  <div className={`p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600 border-blue-200 bg-blue-50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content (Collapsible panel) */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-600 text-sm leading-relaxed text-left font-normal bg-slate-550/40">
                    <p>{faq.answer}</p>
                    
                    {/* Tiny category label */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                        Categoría: {faq.category}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic bottom help message */}
        <div className="text-center mt-12 bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">¿Tu consulta es de extrema urgencia?</h4>
            <p className="text-xs text-slate-500 mt-1">Cortes repentinos, chispas o tableros calientes.</p>
          </div>
          <a
            id="faq-urgency-call"
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-100 hover:border-red-600 text-xs font-bold transition-all text-center"
          >
            Llamar Urgencias
          </a>
        </div>

      </div>
    </section>
  );
}
