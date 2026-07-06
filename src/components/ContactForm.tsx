import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, CheckCircle2, MapPin, Award, ArrowRight, Zap, Shield, FileCheck } from 'lucide-react';
import { BUSINESS_INFO, WORKING_ZONES } from '../data';

interface ContactFormProps {
  preselectedTopic: string;
  onClearPreselectedTopic: () => void;
}

export default function ContactForm({ preselectedTopic, onClearPreselectedTopic }: ContactFormProps) {
  const [selectedLocality, setSelectedLocality] = useState('San Miguel');
  const [selectedTopic, setSelectedTopic] = useState('Alta de Medidor / Edenor');

  // Update topic if preselected from another section
  useEffect(() => {
    if (preselectedTopic) {
      setSelectedTopic(preselectedTopic);
    }
  }, [preselectedTopic]);

  // Generate WA url dynamically
  const generateWhatsAppUrl = () => {
    const text = `Hola Sebastián, me contacto desde la web.\n\n📍 *Ubicación:* ${selectedLocality}\n⚡ *Consulta:* ${selectedTopic}\n\nNecesito asesoramiento y un presupuesto rápido. ¡Gracias!`;
    return `https://wa.me/5491123154389?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contacto" className="py-20 bg-white relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Call conversion pitch */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center gap-6">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-flex self-start">
              Contacto Inmediato
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              ¿Listo para solucionar tu problema eléctrico hoy?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              No dejes pasar el tiempo con trámites trabados o instalaciones inseguras. Sebastián Jorfen responde al instante y ofrece presupuestos honestos sin compromiso.
            </p>

            {/* Direct Phone Block */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl relative overflow-hidden group shadow-sm">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-blue-600/5 group-hover:scale-110 transition-transform duration-300" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg animate-bounce">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Llamar directo al celular</span>
                  <h3 className="text-xl sm:text-2xl font-mono font-bold text-slate-900 mt-1">
                    {BUSINESS_INFO.phone}
                  </h3>
                </div>
              </div>

              <a
                id="contact-call-btn"
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="mt-5 w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-100"
              >
                📞 LLAMAR AHORA AL {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Verification highlights */}
            <div className="flex flex-col gap-3 mt-2 text-sm text-slate-600">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Atención prioritaria para urgencias eléctricas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Presupuestos y asesoramiento técnico sin cargo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic WhatsApp Builder */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div id="contact-widget" className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl p-6 sm:p-8 text-left">
              <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Armá tu Consulta WhatsApp</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Elegí tu zona y servicio para un contacto 100% rápido</p>
                </div>
              </div>

              {/* Preselected Topic Alert Banner */}
              {preselectedTopic && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-blue-700">
                    <Zap className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Tema preseleccionado: <strong>{preselectedTopic}</strong></span>
                  </div>
                  <button
                    onClick={onClearPreselectedTopic}
                    className="text-[10px] text-slate-500 hover:text-slate-800 font-semibold underline cursor-pointer"
                  >
                    Quitar
                  </button>
                </div>
              )}

              <div className="space-y-5">
                {/* Locality selector */}
                <div className="space-y-1.5">
                  <label htmlFor="form-locality" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Tu Localidad
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      id="form-locality"
                      value={selectedLocality}
                      onChange={(e) => setSelectedLocality(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 appearance-none transition-colors"
                    >
                      {WORKING_ZONES.map((zone) => (
                        <option key={zone.name} value={zone.name}>
                          {zone.name}
                        </option>
                      ))}
                      <option value="Otra localidad de Zona Oeste">Otra zona de GBA</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Topic/Problem dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="form-topic" className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    Servicio o problema a resolver
                  </label>
                  <div className="relative">
                    <Zap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      id="form-topic"
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 appearance-none transition-colors"
                    >
                      <option value="Alta de Medidor / Edenor">Alta de Medidor Edenor</option>
                      <option value="Pilar Reglamentario Edenor">Adecuación / Pilar Edenor</option>
                      <option value="Certificado Eléctrico (DCI)">Certificado Eléctrico (DCI)</option>
                      <option value="Detección de Fallas / Cortos">Búsqueda de Cortos / Fugas</option>
                      <option value="Instalaciones Domiciliarias">Instalación Domiciliaria</option>
                      <option value="Instalación Comercial / Municipal">Instalación Comercial</option>
                      <option value="Tableros / Térmicas / Puesta a Tierra">Tableros / Jabalina</option>
                      <option value="Mantenimiento preventivo">Mantenimiento preventivo</option>
                      <option value="Otra consulta eléctrica">Otra consulta o problema</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Preview of the dynamically built WhatsApp message */}
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl text-left">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Vista previa de tu mensaje:</span>
                  <p className="text-xs text-slate-600 mt-2 italic leading-relaxed border-l-2 border-emerald-500 pl-3">
                    "Hola Sebastián, me contacto desde la web. Mi ubicación es <strong>{selectedLocality}</strong> y mi consulta es por <strong>{selectedTopic}</strong>..."
                  </p>
                </div>

                {/* Submit button immediately routing to WhatsApp */}
                <a
                  id="form-wa-submit-btn"
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-emerald-100 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  Iniciar Consulta por WhatsApp
                </a>
              </div>

              {/* Form Footer Status bar */}
              <div className="bg-slate-50 -mx-6 -mb-6 mt-6 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 rounded-b-3xl">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Atención hoy en GBA
                </span>
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  Mat. COPIME Cat. III
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
