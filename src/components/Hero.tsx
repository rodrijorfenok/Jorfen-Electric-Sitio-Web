import React from 'react';
import { Phone, MessageSquare, Star, CheckCircle, Shield, Clock, FileCheck, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section
      id="hero-section"
      className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 bg-slate-950 overflow-hidden"
    >
      {/* Decorative ambient glow background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct response content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Top Badge: Matriculado credentials */}
            <div className="inline-flex">
              <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <Award className="w-4 h-4" />
                Matrícula Habilitada COPIEME-APSE • Edenor Oficial
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              ELECTRICISTA MATRICULADO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                EN ZONA OESTE Y NORTE
              </span>
            </h1>

            {/* Subheadline / Direct Benefit */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Altas de medidor, trámites Edenor, pilares reglamentarios e instalaciones eléctricas. 
              <strong> Atención rápida</strong> y trabajos con <strong>garantía escrita</strong>.
            </p>

            {/* Google Social Proof Mini-badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-1 border-y border-slate-800/60 max-w-lg">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-mono text-base font-bold text-white">5.0 / 5.0</span>
              </div>
              <span className="text-slate-400 text-sm hidden sm:inline">•</span>
              <span className="text-slate-300 text-sm font-medium">
                ⭐⭐⭐⭐⭐ Más de <strong>75 clientes satisfechos</strong> en Google Maps
              </span>
            </div>

            {/* Primary conversion CTA buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-2">
              {/* WhatsApp direct CTA */}
              <a
                id="hero-wa-cta"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-blue-600/30 glow-btn"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                Iniciar Consulta WhatsApp
              </a>

              {/* Direct call CTA */}
              <a
                id="hero-call-cta"
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-white font-bold text-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-5 h-5 text-blue-400 animate-pulse" />
                Llamar Ahora: {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Core Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span>✓ Matriculado Oficial</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span>✓ Trámites Edenor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span>✓ Presupuesto sin Cargo</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                <span>✓ Atención Veloz</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Hero Image with layered badges */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Decorative accent board */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20 blur-md" />
              
              {/* Premium electrical background image */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <img
                  src="/src/assets/images/electrical_work_hero_1783372819655.jpg"
                  alt="Instalaciones Eléctricas Sebastián Jorfen"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-video lg:aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                
                {/* Floating trust badge (Edenor Certified) */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-xs leading-none">Aprobación Asegurada</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">Pilares reglamentarios y DCI válidos ante Edenor</p>
                  </div>
                </div>
              </div>

              {/* Decorative floating circular badge (Speed of response) */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg border-2 border-slate-950 flex flex-col items-center justify-center w-16 h-16 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <Clock className="w-4 h-4" />
                <span className="text-[9px] font-bold uppercase mt-0.5">RÁPIDO</span>
              </div>

              {/* Decorative floating badge (Local Service Area) */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-xl shadow-lg text-[11px] font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Atendiendo Hoy en GBA Oeste/Norte
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
