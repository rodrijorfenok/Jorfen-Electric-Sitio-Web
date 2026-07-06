import React from 'react';
import { AlertTriangle, CornerUpRight, FileCheck, ZapOff, Flame, Briefcase, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';
import { PROBLEMS } from '../data';

interface ProblemsSectionProps {
  onProblemSelect: (problemTitle: string) => void;
}

// Map icon string names to Lucide icon components
const iconMap: Record<string, React.ComponentType<any>> = {
  AlertTriangle: AlertTriangle,
  CornerUpRight: CornerUpRight,
  FileCheck: FileCheck,
  ZapOff: ZapOff,
  Flame: Flame,
  Briefcase: Briefcase,
  RefreshCw: RefreshCw,
  ShieldCheck: ShieldCheck,
};

export default function ProblemsSection({ onProblemSelect }: ProblemsSectionProps) {
  return (
    <section id="problemas" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
            Diagnóstico Rápido
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
            ¿Necesitás resolver alguno de estos problemas?
          </h2>
          <p className="text-slate-600 mt-4 text-base">
            Hacé clic sobre tu problema para recibir asesoramiento personalizado inmediato y solucionarlo de forma definitiva.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((prob) => {
            const IconComponent = iconMap[prob.icon] || AlertTriangle;
            return (
              <div
                key={prob.id}
                id={`problem-card-${prob.id}`}
                onClick={() => onProblemSelect(prob.title)}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-500/30 p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Icon wrap with pulsing animation or colors */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-red-500 group-hover:text-blue-600 group-hover:border-blue-500/20 flex items-center justify-center mb-5 transition-colors shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {prob.title}
                  </h3>
                  
                  {/* Solution Preview */}
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {prob.solution}
                  </p>
                </div>

                {/* Card footer CTA arrow */}
                <div className="flex items-center gap-1.5 text-xs text-blue-600 group-hover:text-blue-700 font-bold mt-5 pt-3 border-t border-slate-100">
                  <span>Solucionar ahora</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Footer Banner */}
        <div className="mt-16 bg-slate-50 rounded-2xl border border-slate-100 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-display font-bold text-xl text-slate-900">
              ¿No encontrás tu problema específico en la lista?
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              No te preocupes. Sebastián Jorfen cubre cualquier necesidad eléctrica residencial o comercial.
            </p>
          </div>
          <button
            id="problems-custom-cta"
            onClick={() => onProblemSelect('Otra consulta eléctrica')}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors cursor-pointer shrink-0 shadow-md shadow-blue-100"
          >
            Consultar por Otro Problema
          </button>
        </div>

        {/* Highlight Quote */}
        <div className="text-center mt-12">
          <p className="text-slate-600 italic text-base">
            "Nos ocupamos de todo el proceso para que no tengas que preocuparte."
          </p>
        </div>

      </div>
    </section>
  );
}
