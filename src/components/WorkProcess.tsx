import React from 'react';
import { WORK_PROCESS } from '../data';
import { ArrowRight, ChevronRight, PhoneCall, HelpCircle, FileSpreadsheet, Zap, BadgeCheck } from 'lucide-react';

export default function WorkProcess() {
  const stepsIcons = [
    <PhoneCall className="w-5 h-5 text-blue-600" />,
    <HelpCircle className="w-5 h-5 text-blue-600" />,
    <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
    <Zap className="w-5 h-5 text-blue-600 animate-pulse" />,
    <BadgeCheck className="w-5 h-5 text-emerald-600" />
  ];

  return (
    <section id="proceso" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
            Pasos Transparentes
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-slate-600 mt-2 text-base">
            De principio a fin, cuidamos cada paso técnico y documental para brindarte absoluta tranquilidad.
          </p>
        </div>

        {/* Steps Cards Loop */}
        <div className="grid md:grid-cols-5 gap-6 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-emerald-500/10 z-0" />

          {WORK_PROCESS.map((p, idx) => (
            <div
              key={p.step}
              id={`step-card-${p.step}`}
              className="relative bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/20 hover:bg-white transition-all duration-300 z-10 shadow-sm hover:shadow-md group text-left"
            >
              {/* Top Row: step counter and icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors">
                  Paso {p.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  {stepsIcons[idx]}
                </div>
              </div>

              {/* Title & Description */}
              <div className="mt-6">
                <h3 className="font-display font-bold text-base text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {p.description}
                </p>
              </div>

              {/* Little detail badge */}
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                <span>Paso {idx + 1} de 5</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Highlight */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
            ✓ Trámites aprobados ante Edenor • Normas de seguridad de la AEA vigentes.
          </p>
        </div>

      </div>
    </section>
  );
}
