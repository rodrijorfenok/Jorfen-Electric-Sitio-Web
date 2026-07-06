import React from 'react';
import { DIFFERENTIALS } from '../data';
import { Award, FileCheck, Clock, DollarSign, Sparkles, Shield, CheckCircle } from 'lucide-react';

// Icon mapper
const iconMap: Record<string, React.ComponentType<any>> = {
  Award: Award,
  FileCheck: FileCheck,
  Clock: Clock,
  DollarSign: DollarSign,
  Sparkles: Sparkles,
  Shield: Shield
};

export default function WhyChooseUs() {
  return (
    <section id="porque-elegirnos" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative list */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-flex self-start">
              Diferenciales Clave
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Garantía de confianza y habilitaciones aprobadas
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              No todos los electricistas están autorizados a realizar trámites formales ante Edenor. Al contratar un profesional matriculado, asegurás que tu instalación cumpla con las normativas municipales y de seguridad vigentes, previniendo accidentes e infracciones.
            </p>

            {/* Quick bullets */}
            <div className="flex flex-col gap-3.5 mt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-550/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Trámites sin trabas administrativas</h4>
                  <p className="text-xs text-slate-500">Sabemos exactamente qué documentación presentar ante Edenor para que lo aprueben rápido.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-550/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Materiales normalizados de primera línea</h4>
                  <p className="text-xs text-slate-500">Trabajamos únicamente con cables de cobre aprobados por IRAM y térmicas de marcas certificadas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-550/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Asesoramiento sin tecnicismos difíciles</h4>
                  <p className="text-xs text-slate-500">Te explicamos de forma transparente qué se necesita readecuar y por qué, sin sorpresas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Bento Grid of differentials */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {DIFFERENTIALS.map((diff, index) => {
              const IconComp = iconMap[diff.icon] || Shield;
              return (
                <div
                  key={index}
                  id={`diff-block-${index}`}
                  className="bg-slate-550 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-500/20 hover:bg-white transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 tracking-tight">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
