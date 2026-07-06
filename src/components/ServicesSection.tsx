import React, { useState } from 'react';
import { SERVICES, BUSINESS_INFO } from '../data';
import { FileCheck, Sparkles, Home, Shield, Flame, Hammer, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onServiceSelect: (serviceTitle: string) => void;
}

export default function ServicesSection({ onServiceSelect }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'EDENOR' | 'INSTALACIONES' | 'REPARACIONES'>('ALL');

  const categories = [
    { id: 'ALL', label: 'Todos los Servicios' },
    { id: 'EDENOR', label: 'Trámites Edenor y Medidores' },
    { id: 'INSTALACIONES', label: 'Instalaciones y Obras' },
    { id: 'REPARACIONES', label: 'Reparaciones y Tableros' }
  ] as const;

  const filteredServices = SERVICES.filter((srv) => {
    if (activeCategory === 'ALL') return true;
    return srv.category === activeCategory;
  });

  return (
    <section id="servicios" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left max-w-2xl">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              Catálogo Completo de Soluciones
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
              Especialistas en Trámites y Seguridad Eléctrica
            </h2>
            <p className="text-slate-600 mt-2 text-base">
              Trabajos residenciales y comerciales homologados bajo reglamentaciones vigentes.
            </p>
          </div>
          
          {/* Quick Stats Banner */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 p-3.5 rounded-2xl shrink-0 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">Garantía Escrita</div>
              <div className="text-sm font-bold text-slate-900">Trabajos 100% Seguros</div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4.5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className={`flex flex-col justify-between bg-white rounded-2xl border transition-all duration-300 p-6 ${
                srv.featured
                  ? 'border-blue-500 shadow-lg shadow-blue-500/[0.04] relative overflow-hidden'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Featured Badge */}
              {srv.featured && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white font-semibold text-[10px] tracking-wider uppercase px-3 py-1 rounded-bl-xl">
                  Más Solicitado
                </div>
              )}

              <div>
                {/* Benefit Highlight (CRO) */}
                <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-md">
                  {srv.benefit}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-slate-900 mt-4 tracking-tight">
                  {srv.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  {srv.description}
                </p>

                {/* Built-in compliance tags depending on service */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  <span className="inline-flex items-center text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    <Check className="w-3 h-3 text-blue-600 mr-1" /> Normativa AEA
                  </span>
                  {srv.category === 'EDENOR' && (
                    <span className="inline-flex items-center text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <Check className="w-3 h-3 text-blue-600 mr-1" /> Apto Edenor
                    </span>
                  )}
                  {srv.featured && (
                    <span className="inline-flex items-center text-[10px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                      <Check className="w-3 h-3 text-blue-600 mr-1" /> Trámite Llave en Mano
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="flex items-center gap-3 mt-8 pt-4 border-t border-slate-100">
                <button
                  id={`srv-cta-custom-${srv.id}`}
                  onClick={() => onServiceSelect(srv.title)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 text-xs font-bold transition-all border border-slate-200"
                >
                  Consultar Presupuesto
                </button>
                <a
                  id={`srv-cta-wa-${srv.id}`}
                  href={`https://wa.me/5491136397582?text=Hola%20Sebasti%C3%A1n,%20te%20consulto%20por%20el%20servicio%20de%20*${encodeURIComponent(srv.title)}*.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-100 hover:border-blue-600 transition-all flex items-center justify-center shrink-0"
                  title="Consultar por WhatsApp"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Local SEO Text Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto border-t border-slate-200 pt-10">
          <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">
            Servicio integral de electricidad • Certificación DCI en San Miguel, José C. Paz, Moreno, Malvinas Argentinas, Bella Vista, Muñiz, Los Polvorines, Hurlingham, Ituzaingó y aledaños.
          </p>
        </div>

      </div>
    </section>
  );
}
