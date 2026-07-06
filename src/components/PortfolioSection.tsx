import React, { useState } from 'react';
import { Award, Play, Pause, RotateCw, CheckCircle, Info, ShieldCheck, Zap } from 'lucide-react';

export default function PortfolioSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-flex">
            Galería de Trabajos Reales
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 tracking-tight leading-tight">
            Casos de Éxito & Trabajos Certificados
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Ejecutamos cada instalación bajo el estricto cumplimiento de la normativa AEA y las especificaciones técnicas de Edenor, priorizando la seguridad y la prolijidad técnica.
          </p>
        </div>

        {/* Highlight Work: Real Electrician Video & Board Readecuación */}
        <div className="grid lg:grid-cols-12 gap-12 items-center bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
          
          {/* Left Column: Elegant Interactive Video Player */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white text-left tracking-tight flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400 shrink-0" />
              Readecuación Integral de Tablero Seccional y Suministro
            </h3>
            <p className="text-slate-300 text-sm text-left leading-relaxed">
              Desmontaje de fusibles antiguos obsoletos, colocación de disyuntores diferenciales de alta sensibilidad y llaves termo-magnéticas bipolares Schneider. Cableado estructurado y certificado bajo normativa AEA.
            </p>

            {/* Video Player Box */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group aspect-video shadow-2xl mt-2">
              
              {/* Cover Poster Image if not playing */}
              {!isPlaying ? (
                <>
                  <img
                    src="/src/assets/images/tablero_electrico_original_1783375657479.jpg"
                    alt="Adecuación de Tableros Eléctricos Sebastián Jorfen"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-slate-950/45 group-hover:bg-slate-950/30 transition-colors flex items-center justify-center cursor-pointer" onClick={handlePlayToggle}>
                    <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-115 active:scale-95 transition-all duration-300">
                      <Play className="w-7 h-7 fill-current translate-x-0.5 text-white" />
                    </div>
                  </div>
                </>
              ) : (
                /* Video Player with high quality real electrician video */
                <div className="relative w-full h-full bg-slate-950 flex flex-col items-center justify-center">
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-electrician-screwing-a-cable-to-a-switchboard-41983-large.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  {/* Tech HUD overlay */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-[9px] text-emerald-400 pointer-events-none select-none text-left bg-gradient-to-t from-slate-950/50 to-transparent">
                    <div className="flex justify-between items-start">
                      <span>MATRICULADO: S. JORFEN</span>
                      <span>NORMA: AEA 90364</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span>REGISTRO COPIME N° 85.342</span>
                      <span>ESTADO: TRABAJO ACTIVO</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 z-10">
                    <button
                      onClick={handlePlayToggle}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/95 hover:bg-slate-850 text-white text-xs font-semibold cursor-pointer transition-colors border border-slate-700 shadow-md"
                    >
                      <Pause className="w-3.5 h-3.5 fill-current text-emerald-400" /> Pausar Video
                    </button>
                  </div>
                </div>
              )}

              {/* Top Banner on video Player */}
              <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-800 text-[10px] font-bold text-emerald-400 tracking-wider uppercase">
                Video Real del Trabajo
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Specs */}
          <div className="lg:col-span-5 text-left flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-2 text-blue-400">
              <Award className="w-6 h-6 shrink-0 text-yellow-400" />
              <span className="text-xs uppercase font-bold tracking-widest">Especificaciones Técnicas</span>
            </div>
            
            <h4 className="font-display font-bold text-xl text-white">
              Suministro de Máxima Seguridad
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase">Calibración de Protecciones</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Disyuntor general y térmicas Sica/Schneider dimensionadas estrictamente según la sección de cables.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase">Peines de Conexión de Cobre</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Uso de barras colectoras aisladas tipo peine para evitar puentes de cables flojos que recalientan.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800/80 p-3.5 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase">Medición y Certificación DCI</h5>
                  <p className="text-xs text-slate-400 mt-0.5">Relevamiento de puesta a tierra con telurímetro calibrado para la emisión rápida de la carpeta técnica.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600/10 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-2.5">
              <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Este trabajo superó con éxito las inspecciones de Edenor para el alta definitiva del suministro.
              </p>
            </div>
          </div>

        </div>

        {/* Gallery Grid: Other Original/Added Images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Pilar con Medidores Múltiples */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300 text-left flex flex-col group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/src/assets/images/pilar_multiple_meters_original_1783375694059.jpg"
                alt="Instalación de medidores múltiples"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-bold text-emerald-400 uppercase tracking-wide">
                Medidores Múltiples
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-lg text-white">Líneas de Medidores Múltiples</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Adecuación y tendido reglamentario para pilar de luz de múltiples medidores Edenor, ideal para consorcios, complejos de departamentos o locales comerciales.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase mt-4">
                <ShieldCheck className="w-4 h-4" /> Aprobación Homologada
              </div>
            </div>
          </div>

          {/* Card 2: Pilar Construcción Detalle */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300 text-left flex flex-col group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/src/assets/images/pilar_construccion_original_1783375671469.jpg"
                alt="Construcción de pilar reglamentario"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-bold text-emerald-400 uppercase tracking-wide">
                Pilar Reglamentario
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-lg text-white">Pilares Reglamentarios Completo</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Pilares monofásicos y trifásicos construidos con las medidas exactas, caños de bajada doble aislación y cajas reglamentarias homologadas por Edenor.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase mt-4">
                <ShieldCheck className="w-4 h-4" /> 100% aprobado por Edenor
              </div>
            </div>
          </div>

          {/* Card 3: Real Electrical Work */}
          <div className="bg-slate-950/60 border border-slate-850 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1 transition-transform duration-300 text-left flex flex-col group">
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/src/assets/images/electrical_work_hero_1783372819655.jpg"
                alt="Trabajo eléctrico prolijo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-800 text-[9px] font-bold text-emerald-400 uppercase tracking-wide">
                Instalación General
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-lg text-white">Instalaciones & Cableado Prolijo</h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  Tendido de cables antiflama de marcas homologadas, distribución de circuitos especiales e iluminación LED general para máxima seguridad y confort.
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold uppercase mt-4">
                <ShieldCheck className="w-4 h-4" /> Normas AEA Cumplidas
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
