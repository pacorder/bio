
import React from 'react';
import { 
  ShieldCheck, 
  Settings, 
  BarChart3, 
  Search,
  ClipboardCheck,
  LayoutList,
  Target,
  Rocket
} from 'lucide-react';
import { Service, CaseStudy, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Implementación de Sistemas de Gestión',
    description: 'Diseño e integración de sistemas ISO 9001, 14001 y 45001 adaptados a la realidad operativa de su empresa.',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Optimización de Procesos QA/QC',
    description: 'Reingeniería de procesos de control de calidad para reducir mermas y tiempos de entrega significativamente.',
    icon: 'Settings'
  },
  {
    id: '3',
    title: 'Auditorías de Tercera Parte',
    description: 'Evaluaciones rigurosas de proveedores y procesos internos bajo estándares internacionales de ingeniería.',
    icon: 'Search'
  },
  {
    id: '4',
    title: 'Consultoría en Productividad y Costos',
    description: 'Análisis profundo de la cadena de valor para identificar ahorros y mejorar el margen operacional.',
    icon: 'BarChart3'
  }
];

export const METHODOLOGY = [
  { title: 'Diagnóstico', icon: <ClipboardCheck className="w-6 h-6" />, desc: 'Evaluación inicial del estado actual y brechas.' },
  { title: 'Planificación', icon: <LayoutList className="w-6 h-6" />, desc: 'Diseño de la estrategia personalizada y KPIs.' },
  { title: 'Implementación', icon: <Target className="w-6 h-6" />, desc: 'Ejecución controlada con acompañamiento técnico.' },
  { title: 'Verificación', icon: <Rocket className="w-6 h-6" />, desc: 'Aseguramiento de resultados y mejora continua.' }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Consorcio Minero Internacional',
    project: 'Optimización de Montaje Mecánico',
    challenge: 'Altos índices de retrabajo en soldaduras especiales que retrasaban el cronograma en un 15%.',
    results: ['Reducción de defectos de soldadura de 12% a menos de 2%.', 'Ahorro de $1.2M USD en costos directos de reparación.'],
    roi: 'ROI: 450% en los primeros 6 meses'
  },
  {
    id: '2',
    client: 'Planta de Celulosa Arauco',
    project: 'Estandarización SIG',
    challenge: 'Fragmentación de protocolos de calidad en diferentes frentes de mantenimiento.',
    results: ['Unificación de criterios de aceptación bajo norma ASME.', 'Cero accidentes de alto potencial durante la parada de planta.'],
    roi: 'Mejora de disponibilidad de activos: 8%'
  },
  {
    id: '3',
    client: 'Suministros de Energía Renovable',
    project: 'Gestión de Calidad en Parques Eólicos',
    challenge: 'Logística crítica y fallas prematuras en componentes importados.',
    results: ['Implementación de control de calidad en origen.', 'Reducción de reclamos a proveedores en un 60%.'],
    roi: 'Impacto directo en CAPEX: -5%'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Roberto Martínez',
    position: 'Gerente de Proyectos, Engineering Corp',
    text: 'Sady es un consultor excepcional. Su visión técnica como Ingeniero Civil Mecánico aporta una profundidad que pocos consultores tienen.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/roberto/100/100'
  },
  {
    id: '2',
    author: 'Elena Fuentes',
    position: 'Directora de Operaciones, Mining Solutions',
    text: 'Gracias a la intervención de Sady logramos certificar nuestra planta en tiempo récord y con una base sólida de mejora continua.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'El futuro de la Calidad 4.0 en la Minería',
    excerpt: 'Cómo la integración de datos y el QA/QC preventivo están transformando los costos de mantenimiento.',
    category: 'Innovación',
    date: '24 May 2024',
    imageUrl: 'https://picsum.photos/seed/mining/800/600'
  },
  {
    id: '2',
    title: 'ISO 9001:2015: Más allá del papel',
    excerpt: 'Guía práctica para que su sistema de gestión genere valor real y no solo burocracia documental.',
    category: 'Estándares',
    date: '10 Jun 2024',
    imageUrl: 'https://picsum.photos/seed/iso/800/600'
  },
  {
    id: '3',
    title: 'Gestión de costos de la NO Calidad',
    excerpt: '¿Sabe cuánto le cuesta realmente el error? Aprenda a calcular el impacto oculto en su balance anual.',
    category: 'Finanzas/QA',
    date: '02 Jul 2024',
    imageUrl: 'https://picsum.photos/seed/finance/800/600'
  }
];
