import React from 'react';
import { Award, FileText, Check, ShieldCheck, MapPin, Map, Star } from 'lucide-react';
import { BUSINESS_INFO, WORKING_ZONES } from '../data';

export default function AuthoritySection() {
  return (
    <section id="cobertura" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Sebastián's Photo + Trust Stats */}
          <div className="lg:col-span-5 relative">
            <div className="max-w-[360px] mx-auto lg:max-w-none">
              {/* Decorative behind border glow */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 blur-md" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                {/* Photo */}
                <img
                  src="/src/assets/images/sebastian_jorfen_portrait_1783372806613.jpg"
                  alt="Sebastián Jorfen - Electricista Matriculado"
                  className="w-full h-auto object-cover aspect-square sm:aspect-[4/3] lg:aspect-square"
                  referrerPolicy="no-referrer"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40" />

                {/* Matricula overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-slate-200 p-3.5 rounded-xl text-left shadow-lg">
                  <div className="flex items-center gap-1.5 text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" /> Matrícula Activa Oficial
                  </div>
                  <p className="text-slate-800 text-xs font-bold font-mono mt-1">
                    {BUSINESS_INFO.matricula}
                  </p>
                </div>
              </div>

              {/* Floating review badge */}
              <div className="absolute -top-4 -left-4 bg-white border border-slate-200 p-3 rounded-2xl shadow-lg text-left flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 text-amber-500 flex items-center justify-center font-bold text-xs">
                  ★
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-none">Calificación 5.0</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">+75 Vecinos Felices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Pitch & Municipal Coverage list */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
                Soporte de Autoridad
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight leading-tight">
                Tu instalación en manos de un profesional matriculado
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Hola, soy <strong>Sebastián Jorfen</strong>. Mi objetivo es que no pierdas tiempo dando vueltas con inspecciones rechazadas o trámites interminables. Realizo planos, cableados y adecuaciones bajo las más estrictas directrices de la <strong>Asociación Electrotécnica Argentina (AEA)</strong> y de <strong>Edenor</strong>, asegurando que obtengas tu suministro de forma 100% legal y segura.
            </p>

            {/* Specialties bullet grid */}
            <div className="grid sm:grid-cols-2 gap-4 my-2">
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Especialista Edenor:</strong> Altas de medidores, solicitudes, y carpetas técnicas DCI.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Regularizaciones:</strong> Conversión de conexiones provisorias o deficientes.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Obras Nuevas:</strong> Diseño y ejecución de instalaciones residenciales y comerciales.</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Tableros Eléctricos:</strong> Armado y cálculo de protecciones termo-magnéticas.</span>
              </div>
            </div>

            {/* Local Municipal Coverage area cards */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-center gap-2 mb-4 text-slate-800">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-bold text-lg">Zona de Atención Cobertura GBA</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {WORKING_ZONES.map((zone) => (
                  <span
                    key={zone.name}
                    className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold border ${
                      zone.isPopular
                        ? 'bg-blue-50 text-blue-600 border-blue-250'
                        : 'bg-white text-slate-600 border-slate-200 shadow-sm'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${zone.isPopular ? 'bg-blue-600' : 'bg-slate-400'}`} />
                    {zone.name}
                  </span>
                ))}
              </div>
              
              <p className="text-xs text-slate-500 mt-4 italic leading-relaxed">
                ¿Estás cerca de estas localidades? Consultanos igual. Hacemos trabajos en Zona Oeste y Zona Norte del Gran Buenos Aires de manera programada.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
