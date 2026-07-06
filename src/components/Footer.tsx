import React from 'react';
import { Award, Phone, Mail, Clock, Heart, Star, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SEO_KEYWORDS } from '../data';

export default function Footer() {
  return (
    <footer id="footer-section" className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer columns */}
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/logo_electric_jorfen_1783375645456.jpg"
                alt="Electric Jorfen Logo"
                className="h-9 w-auto rounded border border-slate-200"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-base text-slate-900">
                SEBASTIÁN<span className="text-blue-600">JORFEN</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Electricista Matriculado habilitado por COPIME-APSE. Especializado en altas de medidores Edenor, pilares reglamentarios e instalaciones residenciales y comerciales de alta seguridad.
            </p>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 p-2 rounded-lg inline-flex shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-700">MATRÍCULA HABILITADA</span>
            </div>
          </div>

          {/* Col 2: Shortcuts */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-700">Atajos Rápidos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#problemas" className="text-slate-500 hover:text-blue-600 transition-colors">Problemas Eléctricos</a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-500 hover:text-blue-600 transition-colors">Nuestros Servicios</a>
              </li>
              <li>
                <a href="#porque-elegirnos" className="text-slate-500 hover:text-blue-600 transition-colors">¿Por Qué Elegirnos?</a>
              </li>
              <li>
                <a href="#testimonios" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">Testimonios Reales</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-500 hover:text-blue-600 transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-700">Canales Oficiales</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneFormatted}`} className="hover:text-blue-600 transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-blue-600 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Atención: Lun a Sáb 8:00 a 20:00</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>San Miguel, Buenos Aires, Arg</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust Score badge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-slate-700">Calificación Google</h4>
            <div className="bg-white border border-slate-200 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow-sm">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-slate-800 mt-1.5">5.0 Estrellas</span>
              <p className="text-[10px] text-slate-500 mt-1">Satisfechos en Zona Oeste y Norte</p>
            </div>
          </div>

        </div>

        {/* Lower SEO Keyword tag block for Local Search Optimization */}
        <div className="py-10">
          <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-4">SEO Local Optimizado (Localidades de Cobertura)</h4>
          <div className="flex flex-wrap gap-2">
            {SEO_KEYWORDS.map((k) => (
              <span
                key={k}
                className="text-[10px] text-slate-500 bg-white border border-slate-200 hover:text-blue-600 hover:border-blue-300 px-2.5 py-1 rounded transition-colors shadow-sm"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* Legal copyrights */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Sebastián Jorfen - Electricista Matriculado. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado con pasión para generación de leads locales <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
