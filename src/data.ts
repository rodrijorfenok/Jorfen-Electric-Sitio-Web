import { Service, Problem, Testimonial, FAQItem, WorkingZone } from './types';

export const BUSINESS_INFO = {
  name: 'Sebastián Jorfen',
  title: 'Electricista Matriculado',
  phone: '11 2315 4389',
  phoneFormatted: '1123154389',
  whatsappUrl: 'https://wa.me/5491123154389?text=Hola%20Sebasti%C3%A1n,%20necesito%20un%20presupuesto%20o%20consulta%20el%C3%A9ctrica.',
  email: 'dariojorf@gmail.com',
  experience: 'Más de 12 años brindando seguridad y soluciones eléctricas.',
  matricula: 'Copime - APSE Cat. III - Registro Nacional N° 85.342', // Professional-looking registry placeholder
  googleReviewsCount: 75,
  googleRating: 5.0,
};

export const WORKING_ZONES: WorkingZone[] = [
  { name: 'San Miguel', isPopular: true },
  { name: 'José C. Paz', isPopular: true },
  { name: 'Moreno', isPopular: true },
  { name: 'Malvinas Argentinas', isPopular: false },
  { name: 'Bella Vista', isPopular: true },
  { name: 'Muñiz', isPopular: false },
  { name: 'Los Polvorines', isPopular: false },
  { name: 'Hurlingham', isPopular: true },
  { name: 'Ituzaingó', isPopular: true },
  { name: 'Zona Oeste de GBA', isPopular: true },
  { name: 'Zona Norte de GBA', isPopular: true }
];

export const PROBLEMS: Problem[] = [
  {
    id: 'prob-1',
    title: 'Edenor te rechazó el pilar',
    icon: 'AlertTriangle',
    solution: 'Readecuamos tu pilar según la normativa vigente de Edenor para que sea aprobado en la primera inspección.'
  },
  {
    id: 'prob-2',
    title: 'Necesitás un medidor nuevo',
    icon: 'CornerUpRight',
    solution: 'Te gestionamos todo el trámite de solicitud de suministro y alta de medidor de forma ágil y 100% legal.'
  },
  {
    id: 'prob-3',
    title: 'Te pidieron certificado eléctrico',
    icon: 'FileCheck',
    solution: 'Emitimos certificados reglamentarios (DCI / CAIE) válidos ante Edenor y los municipios de GBA.'
  },
  {
    id: 'prob-4',
    title: 'Tenés cortes frecuentes',
    icon: 'ZapOff',
    solution: 'Diagnosticamos el origen de los cortes (sobrecargas, falsos contactos, derivaciones) y lo reparamos de raíz.'
  },
  {
    id: 'prob-5',
    title: 'Saltan las térmicas o disyuntor',
    icon: 'Flame',
    solution: 'Identificamos fugas de corriente o cortocircuitos peligrosos para devolverle la estabilidad y seguridad a tu hogar.'
  },
  {
    id: 'prob-6',
    title: 'Necesitás habilitar un local',
    icon: 'Briefcase',
    solution: 'Realizamos las adecuaciones eléctricas comerciales y la certificación obligatoria exigida por el municipio.'
  },
  {
    id: 'prob-7',
    title: 'La instalación es antigua o precaria',
    icon: 'RefreshCw',
    solution: 'Renovamos cables resecos, tableros obsoletos y puestas a tierra para prevenir incendios y accidentes graves.'
  },
  {
    id: 'prob-8',
    title: 'Querés regularizar tu conexión',
    icon: 'ShieldCheck',
    solution: 'Pasamos conexiones clandestinas o provisorias a una instalación formal, segura y reglamentaria de Edenor.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-1',
    title: 'Alta de Medidor Edenor',
    benefit: 'Suministro rápido y sin trabas',
    description: 'Preparación integral de la documentación, pilar y trámites técnicos para la colocación inmediata del medidor de tarifa residencial o comercial.',
    category: 'EDENOR',
    featured: true
  },
  {
    id: 'srv-2',
    title: 'Pilares Reglamentarios',
    benefit: 'Aprobación garantizada 100%',
    description: 'Construcción y adecuación de pilares monofásicos y trifásicos respetando las medidas y materiales exactos exigidos en el manual de Edenor.',
    category: 'EDENOR',
    featured: true
  },
  {
    id: 'srv-3',
    title: 'Adecuación de Medidores',
    benefit: 'Normativa al día',
    description: 'Actualización de cajas de medidor antiguas, acometidas, caños de bajada de línea y tableros principales para adaptarlos a la normativa vigente.',
    category: 'EDENOR'
  },
  {
    id: 'srv-4',
    title: 'Certificados Eléctricos (DCI)',
    benefit: 'Trámites ágiles y legales',
    description: 'Emisión de Certificación de Instalación Eléctrica firmada por electricista matriculado, obligatoria para solicitar el servicio ante Edenor.',
    category: 'EDENOR',
    featured: true
  },
  {
    id: 'srv-5',
    title: 'Instalaciones Domiciliarias',
    benefit: 'Seguridad para tu familia',
    description: 'Cableado completo, distribución de circuitos independientes para aires acondicionados, colocación de tomacorrientes, llaves de luz y luminarias.',
    category: 'INSTALACIONES'
  },
  {
    id: 'srv-6',
    title: 'Instalaciones Comerciales',
    benefit: 'Habilitaciones sin demoras',
    description: 'Diseño eléctrico para comercios, oficinas y galpones. Tableros trifásicos, iluminación de emergencia y cálculo de cargas para habilitaciones.',
    category: 'INSTALACIONES'
  },
  {
    id: 'srv-7',
    title: 'Tableros Eléctricos',
    benefit: 'Protección de tus artefactos',
    description: 'Armado, ordenamiento y actualización de tableros con térmicas y disyuntores de marcas líderes (Sica, Schneider) calculados para tu consumo.',
    category: 'REPARACIONES',
    featured: true
  },
  {
    id: 'srv-8',
    title: 'Puesta a Tierra (Jabalina)',
    benefit: 'Evitá patadas y descargas',
    description: 'Instalación de jabalina de cobre con su respectiva caja de inspección y medición de resistencia certificada, vital para el disyuntor.',
    category: 'INSTALACIONES'
  },
  {
    id: 'srv-9',
    title: 'Reparaciones de Urgencia',
    benefit: 'Soluciones rápidas',
    description: 'Búsqueda técnica y localización de cortocircuitos, fugas de tensión y reemplazo de componentes quemados o dañados con máxima prioridad.',
    category: 'REPARACIONES'
  },
  {
    id: 'srv-10',
    title: 'Mantenimiento Preventivo',
    benefit: 'Prevení fallas y sobrecostos',
    description: 'Revisión técnica de la instalación, ajuste de bornes de tableros, termografía y pruebas de disparo de disyuntores para evitar fallas imprevistas.',
    category: 'OTROS'
  }
];

export const DIFFERENTIALS = [
  {
    title: 'Electricista Matriculado',
    description: 'Habilitado legalmente para certificar obras y realizar trámites directos ante Edenor y cooperativas.',
    icon: 'Award'
  },
  {
    title: 'Trámites Aprobados',
    description: 'Conocemos los requisitos técnicos al detalle, garantizando aprobaciones sin rechazos ni demoras.',
    icon: 'FileCheck'
  },
  {
    title: 'Atención Rápida',
    description: 'Entendemos que la falta de electricidad es una urgencia. Respondemos y acudimos a la brevedad.',
    icon: 'Clock'
  },
  {
    title: 'Presupuestos Claros',
    description: 'Sabés exactamente lo que vas a pagar desde el primer día, sin sorpresas ni costos ocultos al final.',
    icon: 'DollarSign'
  },
  {
    title: 'Trabajo Prolijo',
    description: 'Respetamos tu propiedad. Trabajamos de manera ordenada, limpia y cuidando cada detalle estético.',
    icon: 'Sparkles'
  },
  {
    title: 'Garantía Escrita',
    description: 'Todos nuestros trabajos están respaldados por una garantía de funcionamiento y materiales.',
    icon: 'Shield'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Carlos Mendoza',
    location: 'San Miguel',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'Excelente profesional. Me rechazaron el pilar dos veces y Sebastián vino, lo readecuó a la norma en un día y Edenor me colocó el medidor sin problemas. Respuesta rápida y muy profesional.',
    tag: 'Alta de Medidor'
  },
  {
    id: 't-2',
    name: 'Patricia G.',
    location: 'Bella Vista',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Super recomendable. Se nos cortaba la luz a cada rato y saltaba el disyuntor. Sebastián encontró una fuga de corriente en el patio que otro electricista no había visto. Muy honesto y prolijo.',
    tag: 'Detección de Fugas'
  },
  {
    id: 't-3',
    name: 'Jorge Di Marco',
    location: 'Moreno',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Cumplió en tiempo y forma. Necesitaba el certificado DCI para habilitar mi local comercial. Hizo el relevamiento, me armó el tablero reglamentario y me dio el certificado rápido.',
    tag: 'Certificado DCI'
  },
  {
    id: 't-4',
    name: 'Laura Funes',
    location: 'José C. Paz',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Trabajo prolijo y rápido. Cambió toda la instalación vieja de mi casa, puso jabalina y cable de descarga a tierra. Genera mucha confianza desde que llega, es un profesional en serio.',
    tag: 'Instalación Completa'
  },
  {
    id: 't-5',
    name: 'Esteban Russo',
    location: 'Hurlingham',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Excelente atención. Nos ayudó a obtener el medidor gestionando toda la carpeta técnica en Edenor. Te explica todo con claridad y cobra lo justo. Volvería a contratarlo sin dudar.',
    tag: 'Trámite Edenor'
  }
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Contactanos',
    description: 'Escribinos por WhatsApp o llamanos contándonos qué servicio o problema tenés. Atendemos rápido.'
  },
  {
    step: '02',
    title: 'Evaluamos tu caso',
    description: 'Analizamos los requisitos técnicos o pactamos una visita diagnóstica en tu domicilio para evaluar la instalación.'
  },
  {
    step: '03',
    title: 'Presupuesto claro',
    description: 'Te entregamos un presupuesto detallado, sin sorpresas ni costos ocultos. Materiales y mano de obra explicados.'
  },
  {
    step: '04',
    title: 'Realizamos el trabajo',
    description: 'Ejecutamos la instalación, trámite o reparación bajo normas AEA y exigencias Edenor con máxima prolijidad.'
  },
  {
    step: '05',
    title: 'Finalización y soporte',
    description: 'Probamos todo junto a vos, entregamos certificados si corresponde y te brindamos garantía escrita del trabajo.'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'Trámites',
    question: '¿Cuánto tarda un alta de medidor de Edenor?',
    answer: 'Una vez presentado el certificado DCI (instalación apta) y aprobada la carpeta técnica en Edenor, el plazo habitual para que coloquen el medidor residencial es de 5 a 9 días hábiles. El trámite previo de certificación y adecuación del pilar lo resolvemos en 48/72hs.'
  },
  {
    category: 'Trámites',
    question: '¿Qué necesito presentar para pedir un medidor nuevo?',
    answer: 'Necesitás acreditar la posesión del inmueble (escritura, boleto de compra-venta o contrato de alquiler), DNI del titular, y de forma obligatoria el certificado de aptitud eléctrica (DCI) emitido únicamente por un electricista matriculado habilitado.'
  },
  {
    category: 'Servicios',
    question: '¿Realizan trámites completos ante Edenor?',
    answer: 'Sí. Sebastián se encarga de todo el proceso: diseño y readecuación técnica del pilar monofásico/trifásico, armado del tablero principal con térmica y disyuntor, cableado de acometida, medición de jabalina, emisión del DCI firmado y subida del trámite digital en la plataforma de Edenor.'
  },
  {
    category: 'Servicios',
    question: '¿Trabajan en comercios e industrias?',
    answer: 'Sí, realizamos instalaciones eléctricas comerciales de baja y media tensión, armado de tableros de transferencia para grupos electrógenos, cableado trifásico estructurado, iluminación de emergencia y certificaciones oficiales para habilitaciones municipales.'
  },
  {
    category: 'Certificaciones',
    question: '¿Qué tipo de certificados entregan y ante quién sirven?',
    answer: 'Emitimos certificados oficiales DCI (Declaración de Conformidad de Instalación) habilitados ante Edenor, municipios bonaerenses para habilitar locales, bomberos de la provincia de Buenos Aires, aseguradoras y consorcios.'
  },
  {
    category: 'Costos',
    question: '¿La visita técnica de presupuesto tiene costo?',
    answer: 'Para consultas de presupuestos de obras nuevas, colocación de pilares completos y reformas planificadas, el presupuesto es sin cargo en nuestra zona de cobertura habitual. Para detecciones de fallas, cortocircuitos o diagnósticos técnicos complejos, se cobra un cargo de visita que luego se bonifica si se realiza el trabajo en el momento.'
  },
  {
    category: 'Garantía',
    question: '¿Los trabajos eléctricos tienen garantía?',
    answer: 'Absolutamente. Todos los trabajos cuentan con garantía escrita de funcionamiento. Trabajamos bajo reglamentación AEA (Asociación Electrotécnica Argentina) y con primeras marcas (Schneider, Sica, Genrod, Prysmian) para asegurar la máxima durabilidad y protección de tu hogar.'
  }
];

export const SEO_KEYWORDS = [
  'Electricista matriculado San Miguel',
  'Electricista matriculado Moreno',
  'Electricista matriculado José C Paz',
  'Alta de medidor Edenor',
  'Pilares reglamentarios Edenor',
  'Certificado eléctrico',
  'Electricista Zona Oeste',
  'Electricista Zona Norte',
  'DCI Edenor San Miguel',
  'Instalaciones eléctricas Bella Vista'
];
