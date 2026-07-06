import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Check, ShieldCheck, GripHorizontal, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function MovableWhatsApp() {
  const [isOpen, setIsOpen] = useState(true);

  // Dynamic message template based on current local hours
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours >= 5 && hours < 13) return '¡Buen día!';
    if (hours >= 13 && hours < 20) return '¡Buenas tardes!';
    return '¡Buenas noches!';
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-6 z-50 pointer-events-none select-none font-sans">
      <AnimatePresence mode="wait">
        {isOpen ? (
          /* EXPANDED LIVE CHAT CARD */
          <motion.div
            key="chat-card"
            drag
            dragConstraints={{
              left: -window.innerWidth + 340,
              right: 0,
              top: -window.innerHeight + 240,
              bottom: 0
            }}
            dragElastic={0.1}
            dragMomentum={false}
            whileDrag={{ scale: 1.02, shadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)' }}
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-2xl rounded-2xl w-[310px] sm:w-[330px] overflow-hidden text-left cursor-grab active:cursor-grabbing"
            style={{ touchAction: 'none' }}
          >
            {/* Grab Drag Bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-3 py-1.5 flex items-center justify-between text-slate-400">
              <div className="flex items-center gap-1">
                <GripHorizontal className="w-4 h-4 text-slate-300" />
                <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">Pulsá y arrastrá para mover</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="p-1 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer text-slate-400 hover:text-slate-600"
                title="Minimizar"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Support Header */}
            <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 relative z-10">
                {/* Avatar with live pulse status */}
                <div className="relative">
                  <img
                    src="/src/assets/images/sebastian_jorfen_portrait_1783372806613.jpg"
                    alt="Sebastián Jorfen"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-75" />
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                    Sebastián Jorfen
                  </h3>
                  <p className="text-[10px] text-blue-100 font-semibold tracking-wider uppercase">
                    Electricista Matriculado
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Body Message */}
            <div className="p-4 bg-white/50 space-y-3.5">
              <div className="bg-slate-100/80 border border-slate-200/50 rounded-xl p-3 text-slate-700 relative">
                <div className="absolute -top-1.5 left-5 w-3 h-3 bg-slate-100 rotate-45 border-l border-t border-slate-200/50" />
                <p className="text-xs font-medium leading-relaxed">
                  {getGreeting()} Soy Sebastián. ¿Necesitás un <strong>alta de medidor</strong>, readecuar un <strong>pilar</strong> o tenés una <strong>urgencia eléctrica</strong>?
                </p>
                <span className="text-[9px] text-slate-400 font-mono mt-1 block text-right">✓✓ En línea hoy</span>
              </div>

              {/* Verified Badge info */}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1.5 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Presupuestos y asesoramiento técnico 100% sin cargo.</span>
              </div>
            </div>

            {/* WhatsApp CTA Action */}
            <div className="p-4 pt-0 bg-white">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/15 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                Escribir por WhatsApp
                <ArrowUpRight className="w-4 h-4 opacity-70 ml-0.5" />
              </a>
            </div>
          </motion.div>
        ) : (
          /* COLLAPSED BEAUTIFUL PULSING BUBBLE */
          <motion.div
            key="chat-bubble"
            drag
            dragConstraints={{
              left: -window.innerWidth + 80,
              right: 0,
              top: -window.innerHeight + 120,
              bottom: 0
            }}
            dragElastic={0.1}
            dragMomentum={false}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto cursor-grab active:cursor-grabbing flex items-center gap-2 relative group"
            style={{ touchAction: 'none' }}
            title="Arrastrame o haceme click para consultar"
          >
            {/* Elegant Tooltip that appears on hover */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-800 flex flex-col">
              <span className="font-bold text-emerald-400">💬 Consultar a Sebastián</span>
              <span className="text-[9px] text-slate-400 mt-0.5 font-normal">Podes arrastrar este botón si molesta</span>
            </span>

            {/* Pulse Glow Effect */}
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25 pointer-events-none" />

            {/* Bubble Button Container */}
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl relative border-2 border-white/85">
              {/* WhatsApp Icon */}
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.023-5.102-2.884-6.964C16.593 1.904 14.124.872 11.49.872 6.053.872 1.629 5.293 1.626 10.74c-.001 1.745.456 3.447 1.321 4.962l-.982 3.595 3.682-.966zM17.52 14.3c-.324-.162-1.92-.949-2.219-1.058-.299-.11-.517-.162-.734.162-.217.324-.84.1-.057-.1.217.162-.163.324-.324-.162-1.488-.744-2.518-1.547-3.23-2.783-.162-.28-.018-.43.12-.569.125-.125.28-.324.42-.486.139-.162.186-.28.28-.466.09-.186.045-.353-.02-.486-.067-.132-.517-1.246-.708-1.707-.186-.449-.374-.39-.517-.397-.13-.007-.28-.008-.43-.008-.15 0-.395.056-.6.28-.206.225-.785.767-.785 1.871s.8 2.171.91 2.322c.11.15 1.577 2.409 3.82 3.38.533.23 1.051.4 1.41.514.535.17 1.02.146 1.402.089.427-.064 1.92-.785 2.19-1.503.27-.718.27-1.332.19-1.461-.08-.128-.299-.206-.624-.368z" />
              </svg>

              {/* Overlapping small head of Sebastian to make it incredibly personal */}
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full border border-white overflow-hidden shadow-md">
                <img
                  src="/src/assets/images/sebastian_jorfen_portrait_1783372806613.jpg"
                  alt="S.J"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Small live active status indicator */}
              <span className="absolute bottom-0 right-1 w-3 h-3 bg-emerald-500 border border-white rounded-full animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
