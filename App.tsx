import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin,
  Clock,
  Calendar,
  MessageSquare,
  Award,
  Users,
  Briefcase,
  Settings,
  ShieldCheck,
  Search,
  BarChart3,
  Target
} from 'lucide-react';
import { 
  SERVICES, 
  METHODOLOGY, 
  CASE_STUDIES, 
  TESTIMONIALS, 
  BLOG_POSTS 
} from './constants';
import { ContactType } from './types';

// Robust fallback image from a reliable CDN
const REMOTE_FALLBACK = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop";

const Toast = ({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 p-4 rounded-lg shadow-xl text-white flex items-center gap-3 animate-bounce-short ${type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
      <CheckCircle2 className="w-5 h-5" />
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="hover:opacity-75"><X className="w-4 h-4" /></button>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos', href: '#casos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Sady Maureria</span>
          <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? 'text-blue-700' : 'text-blue-600'}`}>Consultoría Senior QA/QC</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-700 hover:text-blue-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contacto" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all shadow-lg">
            Reservar Asesoría
          </a>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [activeTab, setActiveTab] = useState<ContactType>(ContactType.MESSAGE);
  const [imgSrc, setImgSrc] = useState('person.png');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToast({ 
      message: activeTab === ContactType.MESSAGE ? '¡Mensaje enviado con éxito!' : '¡Reserva solicitada con éxito! Nos contactaremos pronto.', 
      type: 'success' 
    });
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />
      
      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#f8f9fa]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/50 -z-10 skew-x-[-15deg] translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white text-blue-800 px-4 py-2 rounded-full text-xs font-bold border border-blue-100 shadow-sm uppercase tracking-wider">
              <Award className="w-4 h-4" /> Consultor Senior de Alta Gerencia
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-slate-900 tracking-tight">
              Ingeniería con <span className="text-blue-700">Propósito</span> y Calidad Asegurada.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-light">
              Soy <span className="font-semibold text-slate-900">Sady Enrique Maureria Ferrada</span>. Con más de tres décadas liderando el aseguramiento de calidad QA/QC, transformo desafíos operativos en procesos de alta eficiencia y rentabilidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contacto" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-200 flex items-center gap-2">
                Hablemos de su proyecto <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#sobre-mi" className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg font-bold hover:border-blue-700 hover:text-blue-700 transition-all">
                Conocer Trayectoria
              </a>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-2xl group-hover:bg-blue-200/50 transition-colors duration-500"></div>
              <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={imgSrc} 
                  onError={() => setImgSrc(REMOTE_FALLBACK)}
                  alt="Sady Enrique Maureria Ferrada - Consultor Senior" 
                  className="w-full h-full object-cover object-top brightness-105"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 lg:bottom-10 lg:-right-6 glass p-6 rounded-2xl border border-white/50 shadow-xl max-w-[200px] animate-bounce-short">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-700 p-2 rounded-lg text-white">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    Ingeniero Civil Mecánico U. de Chile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '30+', label: 'Años de Experiencia' },
              { val: '150+', label: 'Proyectos Auditados' },
              { val: '25%', label: 'Eficiencia Operativa' },
              { val: '0', label: 'Incidentes Críticos' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-extrabold text-blue-400 mb-1">{stat.val}</div>
                <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Consultoría Técnica" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-blue-900/10"></div>
             </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Liderazgo Basado en Resultados Técnicos</h2>
                <div className="w-16 h-1 bg-blue-700 rounded-full"></div>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              Mi enfoque profesional combina el rigor técnico de la <span className="font-semibold text-slate-900">Ingeniería Civil Mecánica</span> con la visión estratégica de un <span className="font-semibold text-slate-900">Máster en Sistemas Integrados</span>.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              No solo audito procesos; diseño hojas de ruta que permiten a las organizaciones industriales alcanzar certificaciones internacionales mientras protegen su balance financiero y la seguridad de sus activos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-slate-100">
              {[
                'Gestión QA/QC Corporativa',
                'Consultoría Normativa ASME/API',
                'Estandarización de Procesos',
                'Auditorías SIG (ISO/OHSAS)',
                'Gestión de Riesgos Técnicos',
                'Mentoring de Equipos'
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">Soluciones Estratégicas</h2>
            <p className="text-slate-500 font-medium italic">Consultoría Senior personalizada para desafíos industriales de alta exigencia.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-2xl transition-all group hover:-translate-y-2">
                <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-blue-700 mb-8 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                  {service.icon === 'ShieldCheck' && <ShieldCheck className="w-7 h-7" />}
                  {service.icon === 'Settings' && <Settings className="w-7 h-7" />}
                  {service.icon === 'Search' && <Search className="w-7 h-7" />}
                  {service.icon === 'BarChart3' && <BarChart3 className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight leading-snug">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {METHODOLOGY.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all">
                  <div className="text-blue-700 mb-6">{step.icon}</div>
                  <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {idx < METHODOLOGY.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 translate-x-0 text-slate-200">
                    <ChevronRight className="w-12 h-12" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="casos" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-slate-400">Impacto medible en proyectos de gran envergadura.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div key={study.id} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 hover:border-blue-500 transition-all">
                <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">{study.client}</div>
                <h3 className="text-xl font-bold mb-4">{study.project}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed italic">"{study.challenge}"</p>
                <div className="space-y-3 mb-8">
                  {study.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-1 shrink-0" />
                      <span className="text-sm text-slate-300">{res}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-slate-700 font-bold text-blue-400">{study.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4">Pensamiento Estratégico</h2>
              <p className="text-slate-500">Artículos y guías sobre ingeniería de calidad.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-700 font-bold hover:underline">
              Ver todas las publicaciones <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-700">
                    {post.category}
                  </div>
                </div>
                <div className="text-slate-400 text-xs font-medium mb-3">{post.date}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold text-slate-900">Iniciemos una Consultoría Estratégica</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                Agenda una sesión técnica para evaluar las necesidades de su organización y descubrir cómo optimizar sus protocolos QA/QC.
              </p>
            </div>
            <div className="space-y-6">
              {[
                { icon: <Mail />, label: 'Correo Corporativo', val: 'sady.maureria@u.chile.cl' },
                { icon: <Phone />, label: 'Contacto Directo', val: '+56 9 XXXX XXXX' },
                { icon: <MapPin />, label: 'Sede Central', val: 'Santiago, Chile (Alcance Regional)' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-center group">
                  <div className="bg-white p-4 rounded-xl text-slate-600 shadow-sm group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{item.label}</div>
                    <div className="text-lg font-bold text-slate-900">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 pt-6">
               <a href="#" className="p-3 bg-white rounded-full text-slate-400 hover:text-blue-700 shadow-sm hover:shadow-md transition-all">
                 <Linkedin className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
            <div className="flex bg-slate-100 p-1.5 rounded-xl mb-10">
              <button 
                onClick={() => setActiveTab(ContactType.MESSAGE)}
                className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${activeTab === ContactType.MESSAGE ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500'}`}
              >
                <MessageSquare className="w-4 h-4" /> Consulta
              </button>
              <button 
                onClick={() => setActiveTab(ContactType.BOOKING)}
                className={`flex-1 py-3 px-4 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${activeTab === ContactType.BOOKING ? 'bg-white shadow-sm text-blue-700' : 'text-slate-500'}`}
              >
                <Calendar className="w-4 h-4" /> Agenda
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre y Apellido</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Empresa / Cargo</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Mensaje Profesional</label>
                <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-4 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-700 transition-all outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-5 rounded-lg shadow-xl hover:bg-blue-800 transition-all tracking-widest uppercase text-sm">
                {activeTab === ContactType.MESSAGE ? 'Enviar Requerimiento' : 'Solicitar Reunión Técnica'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-12 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="font-bold text-xl tracking-tighter">SADY MAURERIA FERRADA</div>
          <div className="flex justify-center gap-8 text-slate-500 font-bold text-xs uppercase tracking-widest">
            <a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a>
            <a href="#blog" className="hover:text-blue-400 transition-colors">Publicaciones</a>
            <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          <div className="text-slate-600 text-[10px] font-bold tracking-[0.3em] pt-8">
            © {new Date().getFullYear()} CONSULTORÍA SENIOR DE INGENIERÍA & QA/QC.
          </div>
        </div>
      </footer>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
};

export default App;