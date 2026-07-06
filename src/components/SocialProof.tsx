import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function SocialProof() {
  const [selectedReviewTag, setSelectedReviewTag] = useState<string>('Todos');

  const reviewTags = ['Todos', 'Alta de Medidor', 'Certificado DCI', 'Detección de Fugas', 'Instalación Completa', 'Trámite Edenor'];

  const filteredReviews = selectedReviewTag === 'Todos'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.tag === selectedReviewTag);

  return (
    <section id="testimonios" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Big Trust Indicator */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-blue-600 text-xs font-bold uppercase tracking-widest bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              Prueba Social Real
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mt-4 tracking-tight">
              Lo que dicen nuestros clientes en GBA
            </h2>
            <p className="text-slate-600 mt-2 text-base leading-relaxed max-w-xl">
              Nuestra mejor publicidad es un trabajo bien hecho. Mirá las calificaciones y opiniones reales de vecinos de San Miguel, Moreno, José C. Paz y más.
            </p>
          </div>
          
          {/* Big Google Trust Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-2xl flex items-center justify-between gap-6 shadow-sm">
            <div className="text-left">
              <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">Reseñas en Google Maps</span>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-4xl font-display font-bold text-slate-900">5.0</span>
                <span className="text-sm text-slate-500 font-mono">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2 font-medium">⭐⭐⭐⭐⭐ +75 calificaciones positivas</p>
            </div>
            
            <div className="h-16 w-px bg-slate-200 hidden sm:block" />
 
            <div className="text-center bg-slate-50 px-4 py-3 rounded-xl border border-slate-200 hidden sm:block">
              <div className="text-emerald-600 font-bold text-lg">100%</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mt-0.5">Aprobado</div>
            </div>
          </div>
        </div>

        {/* Tags Selector */}
        <div className="flex flex-wrap gap-1.5 mb-10 overflow-x-auto pb-1.5">
          {reviewTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedReviewTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                selectedReviewTag === tag
                  ? 'bg-blue-50 text-blue-600 border border-blue-250 shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((t) => (
            <div
              key={t.id}
              id={`review-card-${t.id}`}
              className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Review Header (Name, Rating, Verification) */}
                <div className="flex items-start justify-between">
                  <div className="text-left">
                    <h3 className="font-display font-bold text-sm text-slate-900">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] text-slate-500 font-medium">{t.location}</span>
                      <span className="text-slate-300 text-xs">•</span>
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-emerald-600 uppercase">
                        <ShieldCheck className="w-3 h-3" /> Cliente Verificado
                      </span>
                    </div>
                  </div>
                  
                  {/* Google Logo / Icon */}
                  <div className="text-[10px] font-mono font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded uppercase">
                    Google
                  </div>
                </div>

                {/* Stars and date */}
                <div className="flex items-center gap-2 mt-3.5">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">{t.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal text-left italic">
                  "{t.text}"
                </p>
              </div>

              {/* Service Tag Footer */}
              <div className="flex items-center justify-between mt-6 pt-3.5 border-t border-slate-100 text-xs text-slate-500">
                <span className="text-[11px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded border border-blue-100">
                  {t.tag}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-slate-500">
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" /> Recomienda
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action bar */}
        <div className="mt-14 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-slate-600">
              ¿Querés tener una experiencia igual de rápida y segura? Escribinos hoy mismo.
            </p>
          </div>
          <a
            id="social-proof-wa-btn"
            href="https://wa.me/5491136397582?text=Hola%20Sebasti%C3%A1n,%20vi%20las%20rese%C3%B1as%20de%20tus%20clientes%20y%20necesito%20consultarte."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs text-center transition-colors shadow-md shadow-blue-100"
          >
            Preguntar por WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
