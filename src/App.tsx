import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemsSection from './components/ProblemsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import SocialProof from './components/SocialProof';
import WorkProcess from './components/WorkProcess';
import AuthoritySection from './components/AuthoritySection';
import PortfolioSection from './components/PortfolioSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MovableWhatsApp from './components/MovableWhatsApp';
import { Phone, MessageSquare, Award, Star } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function App() {
  const [preselectedTopic, setPreselectedTopic] = useState<string>('');

  // Handle click on specific problem or service, scrolling the user seamlessly to the contact form with that pre-selected topic
  const handleSelectTopic = (topicTitle: string) => {
    setPreselectedTopic(topicTitle);
    
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClearPreselectedTopic = () => {
    setPreselectedTopic('');
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-600 selection:text-white antialiased">
      {/* Top sticky header */}
      <Header onContactClick={handleScrollToContact} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero onContactClick={handleScrollToContact} />

        {/* Problems section (prefills contact form topic) */}
        <ProblemsSection onProblemSelect={handleSelectTopic} />

        {/* Services Section (prefills contact form topic) */}
        <ServicesSection onServiceSelect={handleSelectTopic} />

        {/* Why Choose Us (Review-based trust indicators) */}
        <WhyChooseUs />

        {/* Strong Google reviews social proof */}
        <SocialProof />

        {/* Sequential 5-step work process */}
        <WorkProcess />

        {/* Professional biography and local geographic coverage */}
        <AuthoritySection />

        {/* Portfolio / Featured works with video */}
        <PortfolioSection />

        {/* Dynamic Accordion FAQ */}
        <FAQSection />

        {/* Central Closing Block with dual high-converting Tabs & Offline-First Persistence */}
        <ContactForm
          preselectedTopic={preselectedTopic}
          onClearPreselectedTopic={handleClearPreselectedTopic}
        />
      </main>

      {/* Footer detailing SEO keywords & credentials */}
      <Footer />

      {/* Persistent Sticky Mobile Action Ribbon (Extremely effective CRO feature) */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 z-40 flex items-center justify-between md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col items-start">
          <span className="text-[10px] text-slate-500 font-bold uppercase leading-none">Sebastián Jorfen</span>
          <div className="flex items-center gap-1 mt-1 text-xs">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="font-bold text-slate-900">5.0</span>
            <span className="text-slate-500 text-[10px]">(+75 reseñas)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Instant Direct Call */}
          <a
            id="mobile-sticky-call-btn"
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            Llamar
          </a>

          {/* Mobile Instant WhatsApp */}
          <a
            id="mobile-sticky-wa-btn"
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs shadow-sm shadow-green-100 animate-pulse"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Persistent floating back-to-top or quick credentials desktop trigger (Right Margin) */}
      <MovableWhatsApp />
    </div>
  );
}
