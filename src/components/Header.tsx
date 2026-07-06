import React, { useState, useEffect } from 'react';
import { Phone, Award, Star, Menu, X, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header-section"
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Matriculado status */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center gap-2.5">
              <img
                src="/src/assets/images/logo_electric_jorfen_1783375645456.jpg"
                alt="Electric Jorfen Logo"
                className="h-10 w-auto rounded border border-slate-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-bold text-lg md:text-xl text-slate-900 tracking-tight">
                SEBASTIÁN<span className="text-blue-600">JORFEN</span>
              </span>
            </a>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                <Award className="w-3 h-3 mr-1" /> ELECTRICISTA MATRICULADO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#problemas" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Problemas Comunes
            </a>
            <a href="#servicios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Servicios
            </a>
            <a href="#testimonios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Reseñas
            </a>
            <a href="#cobertura" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Zona de Cobertura
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Contact Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Google Rating Badge */}
            <div className="flex items-center gap-1 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-800">5.0</span>
              <span className="text-[10px] text-slate-500">(+75 reseñas)</span>
            </div>

            {/* Direct Phone Call Button */}
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-all border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Llamar: {BUSINESS_INFO.phone}
            </a>

            {/* WhatsApp CTA */}
            <a
              id="header-wa-btn"
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-md shadow-blue-100"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="p-2 rounded-xl bg-slate-50 text-blue-600 border border-slate-200 md:hidden"
              aria-label="Llamar por teléfono"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-50 text-slate-700 border border-slate-200"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-drawer" className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl py-6 px-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Navegación</span>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="text-xs font-semibold text-slate-800">5.0 en Google</span>
              </div>
            </div>
            <a
              href="#problemas"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              ¿Qué problemas resolvemos?
            </a>
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              Nuestros Servicios
            </a>
            <a
              href="#testimonios"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              Opiniones Reales
            </a>
            <a
              href="#cobertura"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              Zonas de Atención
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-700 hover:text-blue-600 py-1"
            >
              Preguntas Frecuentes
            </a>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                Llamar
              </a>
              <a
                id="mobile-drawer-wa-btn"
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm"
              >
                WhatsApp
              </a>
            </div>
            <div className="text-center text-[11px] text-slate-400 mt-2">
              Matrícula habilitada • Trámites Edenor garantizados
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
