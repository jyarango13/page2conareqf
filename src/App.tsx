import React, { useState, useEffect } from 'react';
import {
  FileText,
  Award,
  Calendar,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  ExternalLink,
  Search,
  Menu,
  X,
  Play,
  CheckCircle2,
  Building2,
  BookOpen,
  ShieldCheck,
  Download,
  ArrowRight,
  UserCheck,
  Scale,
  GraduationCap,
  Microscope,
  FileCheck,
  Landmark,
  AlertCircle,
  ChevronLeft
} from 'lucide-react';

// ==========================================
// DATOS INSTITUCIONALES Y CONTENIDO (CMS MOCK)
// ==========================================

const HERO_SLIDES = [
  {
    id: 1,
    badge: 'CONVOCATORIA NACIONAL OFICIAL • LEY N° 30453',
    title: 'Comité Nacional del Residentado Químico Farmacéutico',
    subtitle:
      'Órgano rector del Sistema Nacional de Articulación de Docencia-Servicio e Investigación en Pregrado y Residentado para la formación de especialistas en Farmacia y Bioquímica en el Perú.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=85',
    caption: 'Sede Hospitalaria de Alta Complejidad - Especialidad en Farmacia Clínica y Atención Farmacéutica',
    ctaPrimary: 'Proceso de Admisión 2026',
    ctaSecondary: 'Descargar Cronograma Oficial'
  },
  {
    id: 2,
    badge: 'CALIDAD Y EXCELENCIA ACADÉMICA',
    title: 'Comité Nacional del Residentado Químico Farmacéutico',
    subtitle:
      'Evaluación y acreditación continua de sedes docentes hospitalarias a nivel nacional en articulación con el Ministerio de Salud, EsSalud y las Facultades de Farmacia y Bioquímica.',
    image:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=2000&q=85',
    caption: 'Laboratorios de Farmacotecnia, Biotecnología y Control de Calidad - Red de Sedes Acreditadas',
    ctaPrimary: 'Proceso de Admisión 2026',
    ctaSecondary: 'Ver Sedes Docentes Acreditadas'
  },
  {
    id: 3,
    badge: 'ESPECIALIZACIÓN DE POSGRADO EN SALUD',
    title: 'Comité Nacional del Residentado Químico Farmacéutico',
    subtitle:
      'Formando especialistas de alto nivel científico y ético en Farmacia Hospitalaria, Farmacia Clínica, Toxicología, Asuntos Regulatorios y Biotecnología al servicio de la salud pública.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=85',
    caption: 'Sesión Plenaria y Comité Técnico de Especialidades del Residentado Químico Farmacéutico',
    ctaPrimary: 'Proceso de Admisión 2026',
    ctaSecondary: 'Perfiles de Especialidad'
  }
];

const QUICK_CARDS = [
  {
    id: 'normativas',
    title: 'Normativas y Resoluciones',
    description:
      'Compendio oficial de la Ley del Residentado, Estatuto del CONAREQF, reglamentos de admisión y disposiciones vigentes aprobadas en sesión ordinaria.',
    icon: Scale,
    tag: 'MARCO LEGAL VIGENTE',
    stats: '48 Documentos Oficiales',
    linkText: 'Leer más'
  },
  {
    id: 'perfiles',
    title: 'Perfiles de Especialidad',
    description:
      'Estándares mínimos de formación y competencias académicas para Farmacia Clínica, Farmacia Hospitalaria, Toxicología, Biotecnología y Regulatorios.',
    icon: Microscope,
    tag: 'PROGRAMAS DE SEGUNDA ESPECIALIDAD',
    stats: '6 Especialidades Aprobadas',
    linkText: 'Leer más'
  },
  {
    id: 'cronograma',
    title: 'Cronograma de Admisión',
    description:
      'Fechas oficiales del Concurso Nacional de Admisión 2026: convocatoria, registro de postulantes, evaluación curricular, Examen Único y adjudicación.',
    icon: Calendar,
    tag: 'CONCURSO NACIONAL 2026',
    stats: 'Inscripciones Abiertas',
    linkText: 'Leer más'
  }
];

const PUBLICATIONS = [
  {
    id: 1,
    category: 'ADMISIÓN 2026',
    title: 'Prospecto y Disposiciones del Concurso Nacional de Admisión 2026',
    subtitle: 'Requisitos, cuadro general de vacantes por modalidad libre y cautiva, y tabla de especificaciones.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    date: 'Actualizado Oct 2026',
    pages: '84 páginas • PDF Oficial'
  },
  {
    id: 2,
    category: 'OBSERVATORIO QF',
    title: 'Observatorio Técnico del Residentado Químico Farmacéutico',
    subtitle: 'Estadísticas nacionales de brechas de especialistas, distribución por regiones y rendimiento académico.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80',
    date: 'Informe Anual 2026',
    pages: 'Reporte Interactivo'
  },
  {
    id: 3,
    category: 'ACREDITACIÓN',
    title: 'Estándares de Acreditación de Sedes Docentes Hospitalarias',
    subtitle: 'Guía técnica de evaluación de infraestructura clínica, unidades de mezclas intravenosas y farmacovigilancia.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80',
    date: 'Resolución N° 018-CONAREQF',
    pages: '56 páginas • PDF Oficial'
  },
  {
    id: 4,
    category: 'CONVENIOS INTERINSTITUCIONALES',
    title: 'Acuerdos Marco MINSA, EsSalud y Universidades Licenciadas',
    subtitle: 'Lineamientos de cooperación docente-asistencial para garantizar campos clínicos de alta especialización.',
    image:
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80',
    date: 'Compendio Institucional',
    pages: '32 Convenios Activos'
  }
];

const NEWS_DATA = [
  {
    id: 1,
    featured: true,
    category: 'Admisión',
    date: '02 NOV 2026',
    code: 'COMUNICADO OFICIAL N° 024-2026-CONAREQF',
    title:
      'Aprobación del Cuadro General de Plazas Vacantes y Sedes Docentes Habilitadas para el Proceso de Admisión 2026',
    excerpt:
      'El Comité Nacional del Residentado Químico Farmacéutico pone en conocimiento de la comunidad profesional y de las facultades de Farmacia y Bioquímica del país la distribución oficial de plazas en las modalidades Libre y Cautiva en establecimientos del MINSA, EsSalud y Sanidades.',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1400&q=85',
    author: 'Secretaría Técnica del CONAREQF'
  },
  {
    id: 2,
    featured: false,
    category: 'Resoluciones',
    date: '28 OCT 2026',
    code: 'RESOLUCIÓN N° 042-2026',
    title:
      'Designación del Jurado Calificador y Comité de Elaboración del Examen Único Nacional 2026',
    excerpt: 'Protocolos de seguridad, transparencia y reserva académica para la evaluación nacional.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    featured: false,
    category: 'Comunicados',
    date: '19 OCT 2026',
    code: 'COMUNICADO N° 021-2026',
    title:
      'Acreditación de 8 nuevas sedes hospitalarias de nivel III-1 para Farmacia Clínica y Oncológica',
    excerpt: 'Institutos especializados se incorporan a la oferta formativa del presente año académico.',
    image:
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    featured: false,
    category: 'Normativa',
    date: '10 OCT 2026',
    code: 'DIRECTIVA N° 009-2026',
    title:
      'Lineamientos para las rotaciones externas nacionales e internacionales de residentes de 2do y 3er año',
    excerpt: 'Requisitos académicos y convenios vigentes para estancias formativas en el extranjero.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  }
];

const MEMBER_INSTITUTIONS = [
  {
    acronym: 'MINSA',
    name: 'Ministerio de Salud del Perú',
    role: 'Presidencia / Ente Rector de Salud'
  },
  {
    acronym: 'CQFP',
    name: 'Colegio Químico Farmacéutico del Perú',
    role: 'Representación Gremial Nacional'
  },
  {
    acronym: 'ASPEFEFB',
    name: 'Asociación Peruana de Facultades y Escuelas de Farmacia y Bioquímica',
    role: 'Entidades Formadoras Universitarias'
  },
  {
    acronym: 'ESSALUD',
    name: 'Seguro Social de Salud del Perú',
    role: 'Institución Prestadora de Servicios de Salud'
  },
  {
    acronym: 'SANIDADES',
    name: 'Sanidades de las Fuerzas Armadas y Policía Nacional',
    role: 'Sedes Docentes y Plazas Cautivas'
  }
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsFilter, setNewsFilter] = useState('Todos');
  const [activeModal, setActiveModal] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const filteredSideNews = NEWS_DATA.filter((item) => {
    if (item.featured) return false;
    if (newsFilter === 'Todos') return true;
    return item.category.toLowerCase() === newsFilter.toLowerCase();
  });

  const featuredNews = NEWS_DATA.find((item) => item.featured);

  return (
    <div className="min-h-screen bg-white text-[#334155] font-sans antialiased selection:bg-[#003D73] selection:text-white">
      {/* 1. TOPBAR INSTITUCIONAL */}
      <div className="bg-[#003D73] text-white border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-6 text-slate-200">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Central: (01) 422-8910 / Anexo 104</span>
            </span>
            <span className="hidden sm:inline text-white/25">|</span>
            <a
              href="mailto:informes@conareqf.org.pe"
              className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>informes@conareqf.org.pe</span>
            </a>
            <span className="hidden lg:inline text-white/25">|</span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Atención: Lun - Vie 08:30 a.m. - 05:00 p.m.</span>
            </span>
          </div>

          <div className="flex items-center gap-4 lg:gap-5 font-medium">
            <button
              onClick={() => setActiveModal('mesapartes')}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Mesa de Partes Virtual</span>
            </button>
            <span className="text-white/25">|</span>
            <button
              onClick={() => setActiveModal('constancias')}
              className="hover:text-[#C5A059] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Verificar Constancia</span>
            </button>
            <span className="hidden sm:inline text-white/25">|</span>
            <button
              onClick={() => setActiveModal('aulavirtual')}
              className="hidden sm:flex hover:text-[#C5A059] transition-colors items-center gap-1"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Aula Virtual</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. HEADER PRINCIPAL */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#003D73] rounded-sm flex flex-col items-center justify-center border-2 border-[#C5A059] shadow-sm shrink-0">
                <Landmark className="w-6 h-6 lg:w-7 lg:h-7 text-[#C5A059]" />
                <span className="text-[8px] font-bold tracking-widest text-white mt-0.5">
                  PERÚ
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-[#003D73]">
                    CONAREQF
                  </span>
                  <span className="hidden sm:inline-block bg-[#F8FAFC] border border-slate-200 text-[#003D73] text-[10px] font-bold px-2 py-0.5 rounded-sm">
                    OFICIAL
                  </span>
                </div>
                <span className="text-[11px] lg:text-xs text-[#334155] font-medium leading-tight max-w-[260px] sm:max-w-[320px]">
                  Comité Nacional del Residentado Químico Farmacéutico
                </span>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-7">
              {[
                { name: 'Inicio', href: '#inicio' },
                { name: 'Normas', href: '#normas' },
                { name: 'Comité Nacional', href: '#quienes-somos' },
                { name: 'Documentos', href: '#publicaciones' },
                { name: 'Admisión', href: '#admision' },
                { name: 'Contacto', href: '#contacto' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative py-2 text-sm font-semibold text-[#334155] hover:text-[#003D73] transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <div className="h-6 w-px bg-slate-200 mx-1" />

              <button
                onClick={() => setActiveModal('intranet')}
                className="bg-[#003D73] hover:bg-[#002b52] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm shadow-sm transition-all flex items-center gap-2 border-b-2 border-[#C5A059]"
              >
                <UserCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Sistema SIGERQF</span>
              </button>
            </nav>

            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setActiveModal('intranet')}
                className="bg-[#003D73] text-white text-xs font-semibold px-3 py-2 rounded-sm"
              >
                SIGERQF
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-sm text-[#003D73] hover:bg-slate-100 border border-slate-200"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
            {[
              { name: 'Inicio', href: '#inicio' },
              { name: 'Normas', href: '#normas' },
              { name: 'Comité Nacional', href: '#quienes-somos' },
              { name: 'Documentos', href: '#publicaciones' },
              { name: 'Admisión', href: '#admision' },
              { name: 'Contacto', href: '#contacto' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#334155] hover:bg-[#F8FAFC] hover:text-[#003D73] border-l-2 border-transparent hover:border-[#C5A059]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section
        id="inicio"
        className="relative w-full min-h-[620px] lg:min-h-[680px] flex items-center bg-[#003D73] overflow-hidden"
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0, 61, 115, 0.90) 0%, rgba(0, 61, 115, 0.76) 55%, rgba(0, 42, 82, 0.72) 100%)'
              }}
            />
          </div>
        ))}

        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 xl:col-span-8 text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-l-4 border-[#C5A059] px-3.5 py-1.5 mb-6 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                  {HERO_SLIDES[activeSlide].badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-6 text-white">
                {HERO_SLIDES[activeSlide].title}
              </h1>

              <div className="w-24 h-1 bg-[#C5A059] mb-6" />

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-8 max-w-2xl font-normal">
                {HERO_SLIDES[activeSlide].subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setActiveModal('admision2026')}
                  className="bg-[#C5A059] hover:bg-[#b38e47] text-[#0F172A] font-bold text-sm sm:text-base px-7 py-4 rounded-sm shadow-md transition-all flex items-center gap-3 group"
                >
                  <span>Proceso de Admisión 2026</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setActiveModal('cronograma')}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-sm sm:text-base px-6 py-4 rounded-sm backdrop-blur-sm transition-all flex items-center gap-2.5"
                >
                  <Download className="w-4 h-4 text-[#C5A059]" />
                  <span>{HERO_SLIDES[activeSlide].ctaSecondary}</span>
                </button>
              </div>

              <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#C5A059]" />
                  <span>Fotografía: {HERO_SLIDES[activeSlide].caption}</span>
                </p>

                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2.5 transition-all rounded-sm ${idx === activeSlide
                          ? 'w-9 bg-[#C5A059]'
                          : 'w-2.5 bg-white/40 hover:bg-white/70'
                        }`}
                      aria-label={`Ver imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4">
              <div className="bg-white/95 backdrop-blur-md text-[#334155] p-6 sm:p-7 rounded-sm shadow-xl border-t-4 border-[#C5A059]">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] block">
                      CONVOCATORIA NACIONAL
                    </span>
                    <h2 className="text-lg font-extrabold text-[#003D73]">
                      Hitos de Admisión 2026
                    </h2>
                  </div>
                  <span className="bg-[#003D73] text-white text-xs font-bold px-2.5 py-1 rounded-sm">
                    EN CURSO
                  </span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3.5 p-2.5 bg-[#F8FAFC] border-l-2 border-[#003D73] rounded-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#003D73] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between font-bold text-[#0F172A]">
                        <span>Publicación de Plazas</span>
                        <span className="text-[#003D73]">02 NOV</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Cuadro general por universidades y sedes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-2.5 bg-[#F8FAFC] border-l-2 border-[#C5A059] rounded-sm">
                    <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between font-bold text-[#0F172A]">
                        <span>Inscripción de Postulantes</span>
                        <span className="text-[#b38e47]">05 - 22 NOV</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Registro digital en plataforma SIGERQF
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-2.5 bg-[#F8FAFC] border-l-2 border-slate-300 rounded-sm">
                    <Award className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between font-bold text-[#0F172A]">
                        <span>Examen Único Nacional</span>
                        <span className="text-slate-700">29 NOV 2026</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Evaluación presencial descentralizada
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Total Plazas Habilitadas: <strong className="text-[#003D73]">245</strong>
                  </span>
                  <button
                    onClick={() => setActiveModal('admision2026')}
                    className="text-xs font-bold text-[#003D73] hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                  >
                    <span>Ver cuadro de vacantes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TARJETAS DE ACCESO RÁPIDO */}
      <section id="normas" className="relative z-20 bg-[#F8FAFC] pb-16 pt-10 lg:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:-mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {QUICK_CARDS.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-sm shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200/80 border-t-4 border-t-[#C5A059] p-7 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 bg-[#003D73]/5 group-hover:bg-[#003D73] text-[#003D73] group-hover:text-white rounded-sm flex items-center justify-center transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-[#003D73] bg-[#F8FAFC] border border-slate-200 px-2.5 py-1 rounded-sm">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#003D73] mb-3 group-hover:text-[#0F172A] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#334155] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      {card.stats}
                    </span>
                    <button
                      onClick={() => setActiveModal(card.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#003D73] group-hover:text-[#C5A059] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-white border border-slate-200 rounded-sm shadow-sm p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              {[
                {
                  title: 'Padrones de Postulantes',
                  subtitle: 'Consulta de aptos y sedes de evaluación',
                  icon: FileCheck,
                  modal: 'padrones'
                },
                {
                  title: 'Registro de Especialistas',
                  subtitle: 'Directorio nacional de egresados RQF',
                  icon: Award,
                  modal: 'registro'
                },
                {
                  title: 'Sedes Docentes Acreditadas',
                  subtitle: 'Hospitales e Institutos MINSA / EsSalud',
                  icon: Building2,
                  modal: 'sedes'
                },
                {
                  title: 'Repositorio de Actas',
                  subtitle: 'Sesiones del Comité Nacional y Directivo',
                  icon: BookOpen,
                  modal: 'actas'
                }
              ].map((service, idx) => {
                const SIcon = service.icon;
                return (
                  <button
                    key={service.title}
                    onClick={() => setActiveModal(service.modal)}
                    className={`flex items-center gap-3.5 text-left group pt-3 sm:pt-0 ${idx > 0 ? 'sm:pl-5' : ''
                      }`}
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#003D73] group-hover:bg-[#003D73] group-hover:text-[#C5A059] transition-colors shrink-0">
                      <SIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#003D73] group-hover:text-[#C5A059] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500">{service.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
              INSTITUCIONALIDAD Y RECTORÍA ACADÉMICA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003D73] tracking-tight">
              Quiénes Somos
            </h2>
            <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-4 mb-6" />
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-normal">
              El Comité Nacional del Residentado Químico Farmacéutico (CONAREQF) es el máximo
              órgano colegiado del Estado peruano encargado de normar, planificar, conducir y
              supervisar la formación académica de posgrado bajo la modalidad de residentado en las
              ciencias farmacéuticas, garantizando estándares de excelencia clínica, científica y
              ética al servicio del Sistema Nacional de Salud.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-sm overflow-hidden shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=85"
                  alt="Especialistas del Residentado Químico Farmacéutico en entorno clínico hospitalario"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003D73]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#003D73]/95 backdrop-blur-sm text-white p-5 rounded-sm border-l-4 border-[#C5A059] max-w-md shadow-lg">
                  <p className="text-xs uppercase tracking-widest text-[#C5A059] font-bold mb-1">
                    ARTICULACIÓN DOCENCIA - SERVICIO
                  </p>
                  <p className="text-sm font-medium leading-snug">
                    Formación presencial intensiva e integral en institutos especializados y
                    hospitales nacionales nivel III-1 y III-2.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block bg-[#F8FAFC] border border-slate-200 px-3 py-1 rounded-sm text-xs font-bold text-[#003D73]">
                MISIÓN REGULADORA Y ACADÉMICA
              </div>

              <h3 className="text-2xl font-bold text-[#003D73] leading-snug">
                Fortaleciendo la presencia del Químico Farmacéutico Especialista en la alta
                complejidad hospitalaria
              </h3>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                En cumplimiento de su marco normativo, el CONAREQF coordina de manera permanente con
                el Ministerio de Salud, EsSalud, las Sanidades de las Fuerzas Armadas y Policiales,
                el Colegio Químico Farmacéutico del Perú y las universidades licenciadas para
                acreditar programas y campos clínicos de segunda especialidad.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Acreditación periódica de sedes docentes hospitalarias e institutos especializados.',
                  'Conducción transparente del Concurso Nacional de Admisión y Examen Único.',
                  'Definición de estándares curriculares y perfiles de competencias por especialidad.'
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#334155]">{point}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                <div className="bg-[#F8FAFC] p-4 rounded-sm border-t-2 border-[#003D73]">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#003D73]">
                    +18
                  </span>
                  <span className="text-xs text-[#334155] font-medium">
                    Universidades Integrantes
                  </span>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded-sm border-t-2 border-[#C5A059]">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#003D73]">
                    +45
                  </span>
                  <span className="text-xs text-[#334155] font-medium">
                    Sedes Hospitalarias
                  </span>
                </div>
                <div className="bg-[#F8FAFC] p-4 rounded-sm border-t-2 border-[#003D73]">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#003D73]">
                    06
                  </span>
                  <span className="text-xs text-[#334155] font-medium">
                    Áreas de Especialidad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PUBLICACIONES Y DOCUMENTOS DESTACADOS */}
      <section id="publicaciones" className="py-20 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                BIBLIOTECA Y REPOSITORIO TÉCNICO
              </span>
              <h2 className="text-3xl font-extrabold text-[#003D73] tracking-tight">
                Publicaciones y Documentos Destacados
              </h2>
              <div className="w-20 h-1 bg-[#C5A059] mt-3" />
            </div>
            <p className="text-sm text-[#334155] max-w-md">
              Acceda a los documentos normativos, guías de acreditación y reportes estadísticos de
              distribución nacional con formato visual editorial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                onClick={() => setActiveModal('publicacion')}
                className="group relative h-[410px] rounded-sm overflow-hidden shadow-md cursor-pointer border border-slate-200 bg-[#003D73]"
              >
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0, 61, 115, 0.25) 0%, rgba(0, 42, 82, 0.85) 60%, rgba(0, 29, 56, 0.98) 100%)'
                  }}
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <span className="bg-[#C5A059] text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-sm">
                      {pub.category}
                    </span>
                    <span className="text-[11px] text-slate-200 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-sm">
                      {pub.date}
                    </span>
                  </div>

                  <div>
                    <div className="w-10 h-0.5 bg-[#C5A059] mb-3 transition-all duration-300 group-hover:w-20" />
                    <h3 className="text-lg font-bold leading-snug mb-2 text-white group-hover:text-[#C5A059] transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed mb-4">
                      {pub.subtitle}
                    </p>
                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-300">{pub.pages}</span>
                      <span className="text-[#C5A059] flex items-center gap-1">
                        Descargar <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PALABRAS DE LA PRESIDENCIA */}
      <section className="bg-[#003D73] text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-[#C5A059]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 border border-[#C5A059]/50 bg-white/5 px-3 py-1 rounded-sm">
                <span className="text-xs font-bold tracking-widest uppercase text-[#C5A059]">
                  PRONUNCIAMIENTO INSTITUCIONAL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Palabras de la Presidencia del CONAREQF
              </h2>
              <div className="w-16 h-1 bg-[#C5A059]" />

              <blockquote className="text-base sm:text-lg text-slate-100 leading-relaxed border-l-4 border-[#C5A059] pl-5 py-1 italic">
                “Nuestro compromiso ineludible con la salud pública del país se refleja en un
                Proceso de Admisión riguroso, meritocrático y transparente, asegurando que cada
                profesional Químico Farmacéutico residente acceda a una formación clínica y
                científica del más alto estándar internacional en beneficio directo del paciente.”
              </blockquote>

              <div className="pt-2 flex items-center justify-between border-t border-white/15">
                <div>
                  <p className="text-base font-bold text-white">
                    Dr. Q.F. Carlos Alberto Mendoza Valdivia
                  </p>
                  <p className="text-xs text-[#C5A059] font-medium uppercase tracking-wider mt-0.5">
                    Presidente del Comité Nacional del Residentado Químico Farmacéutico
                  </p>
                </div>
                <button
                  onClick={() => setActiveModal('video')}
                  className="text-xs font-bold text-[#C5A059] hover:underline flex items-center gap-1"
                >
                  <span>Leer mensaje íntegro</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                onClick={() => setActiveModal('video')}
                className="relative h-[320px] sm:h-[380px] w-full rounded-sm overflow-hidden shadow-2xl border-2 border-white/15 group cursor-pointer"
              >
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=85"
                  alt="Ceremonia Oficial del Comité Nacional del Residentado Químico Farmacéutico"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#003D73]/45 group-hover:bg-[#003D73]/30 transition-colors flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm bg-[#C5A059] text-[#0F172A] flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                  <span className="mt-4 bg-[#003D73]/90 border border-white/20 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm">
                    Ver Ceremonia de Apertura del Año Académico 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NOTICIAS Y COMUNICADOS */}
      <section id="admision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                ACTUALIDAD Y TRANSPARENCIA OFICIAL
              </span>
              <h2 className="text-3xl font-extrabold text-[#003D73] tracking-tight">
                Noticias y Comunicados Destacados
              </h2>
              <div className="w-20 h-1 bg-[#C5A059] mt-3" />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['Todos', 'Admisión', 'Resoluciones', 'Comunicados', 'Normativa'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setNewsFilter(tab)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm border transition-all ${newsFilter === tab
                      ? 'bg-[#003D73] text-white border-[#003D73]'
                      : 'bg-[#F8FAFC] text-[#334155] border-slate-200 hover:border-[#C5A059]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {featuredNews && (
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-sm shadow-sm overflow-hidden flex flex-col justify-between group">
                <div>
                  <div className="relative h-[300px] sm:h-[360px] w-full overflow-hidden bg-[#003D73]">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-[#003D73] text-white text-xs font-bold px-3 py-1.5 rounded-sm border-l-4 border-[#C5A059]">
                        {featuredNews.code}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-[#C5A059] text-[#0F172A] text-xs font-extrabold px-3 py-1 rounded-sm">
                      {featuredNews.date}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#003D73] block mb-2">
                      • {featuredNews.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#003D73] leading-snug mb-3 group-hover:text-[#0F172A]">
                      {featuredNews.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-8 py-4 bg-white border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    Publicado por: {featuredNews.author}
                  </span>
                  <button
                    onClick={() => setActiveModal('comunicado')}
                    className="text-xs sm:text-sm font-bold text-[#003D73] hover:text-[#C5A059] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Leer comunicado completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
              <div className="space-y-5">
                {filteredSideNews.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveModal('comunicado')}
                    className="bg-white border border-slate-200 hover:border-[#C5A059] rounded-sm shadow-sm p-4 flex flex-col sm:flex-row gap-4 cursor-pointer transition-all group"
                  >
                    <div className="w-full sm:w-36 h-36 sm:h-28 rounded-sm overflow-hidden shrink-0 bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#F8FAFC] text-[#003D73] border border-slate-200 rounded-sm">
                            {item.code}
                          </span>
                          <span className="text-[11px] font-semibold text-[#C5A059]">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-[#003D73] group-hover:text-[#0F172A] leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.excerpt}</p>
                      </div>
                      <span className="text-xs font-bold text-[#003D73] group-hover:text-[#C5A059] inline-flex items-center gap-1 mt-2">
                        Ver documento <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 border-l-4 border-l-[#003D73] p-5 rounded-sm">
                <h4 className="text-sm font-bold text-[#003D73] mb-1">
                  Archivo Histórico de Resoluciones
                </h4>
                <p className="text-xs text-[#334155] mb-3">
                  Consulte todas las resoluciones emitidas por el Comité Nacional desde su
                  instalación.
                </p>
                <button
                  onClick={() => setActiveModal('normativas')}
                  className="w-full bg-[#003D73] hover:bg-[#002b52] text-white text-xs font-bold py-2.5 px-4 rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Acceder al Buscador Normativo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MIEMBROS */}
      <section className="py-14 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#334155]">
              ENTIDADES QUE INTEGRAN EL COMITÉ NACIONAL
            </span>
            <div className="w-12 h-0.5 bg-[#C5A059] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {MEMBER_INSTITUTIONS.map((inst) => (
              <div
                key={inst.acronym}
                className="bg-white border border-slate-200 rounded-sm p-5 text-center shadow-sm hover:border-[#C5A059] transition-colors flex flex-col justify-center"
              >
                <span className="text-lg font-extrabold text-[#003D73] tracking-wider block">
                  {inst.acronym}
                </span>
                <span className="text-xs font-semibold text-[#334155] mt-1 block">
                  {inst.name}
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">{inst.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="contacto" className="bg-[#003D73] text-white border-t-4 border-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center border border-[#C5A059]">
                  <Landmark className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-white block">
                    CONAREQF
                  </span>
                  <span className="text-xs text-[#C5A059] font-semibold">
                    República del Perú • Sector Salud
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pr-4">
                Comité Nacional del Residentado Químico Farmacéutico. Entidad encargada de regular
                y articular los programas de formación de segunda especialidad profesional en
                Farmacia y Bioquímica a nivel nacional.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setActiveModal('reclamaciones')}
                  className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2.5 rounded-sm text-xs font-semibold text-white transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-[#C5A059]" />
                  <span>Libro de Reclamaciones Digital</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] border-b border-white/15 pb-2">
                Institucional
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li><a href="#quienes-somos" className="hover:text-[#C5A059] transition-colors">Quiénes Somos</a></li>
                <li><a href="#normas" className="hover:text-[#C5A059] transition-colors">Marco Legal y Estatuto</a></li>
                <li><a href="#publicaciones" className="hover:text-[#C5A059] transition-colors">Actas de Sesión</a></li>
                <li><a href="#publicaciones" className="hover:text-[#C5A059] transition-colors">Sedes Acreditadas</a></li>
                <li><a href="#admision" className="hover:text-[#C5A059] transition-colors">Comunicados Oficiales</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] border-b border-white/15 pb-2">
                Proceso de Admisión 2026
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                <li>
                  <button onClick={() => setActiveModal('cronograma')} className="hover:text-[#C5A059] transition-colors text-left">
                    Cronograma Oficial 2026
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('admision2026')} className="hover:text-[#C5A059] transition-colors text-left">
                    Cuadro General de Plazas Vacantes
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('perfiles')} className="hover:text-[#C5A059] transition-colors text-left">
                    Perfiles de Especialidades RQF
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('intranet')} className="hover:text-[#C5A059] transition-colors text-left">
                    Inscripción en Línea (SIGERQF)
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('constancias')} className="hover:text-[#C5A059] transition-colors text-left">
                    Verificación de Constancias
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C5A059] border-b border-white/15 pb-2">
                Contacto Institucional
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Av. Andrés Aramburú N° 818, San Isidro / Jesús María - Lima, Perú</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>Central Telefónica: (01) 422-8910</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href="mailto:informes@conareqf.org.pe" className="hover:text-[#C5A059] transition-colors underline">
                    informes@conareqf.org.pe
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <a href="mailto:admision@conareqf.org.pe" className="hover:text-[#C5A059] transition-colors underline">
                    admision@conareqf.org.pe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#002d56] border-t border-white/10 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-3">
            <p>
              © {new Date().getFullYear()} Comité Nacional del Residentado Químico Farmacéutico (CONAREQF). Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <span>Política de Privacidad y Datos Personales</span>
              <span>•</span>
              <span>Portal de Transparencia Estándar</span>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-[#0F172A]/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-sm max-w-xl w-full shadow-2xl border-t-4 border-[#C5A059] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-[#003D73] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Landmark className="w-5 h-5 text-[#C5A059]" />
                <h3 className="text-base font-bold tracking-tight">
                  Plataforma Digital CONAREQF • Información Oficial
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="text-white/80 hover:text-white p-1"
                aria-label="Cerrar ventana"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm text-[#334155]">
              <div className="bg-[#F8FAFC] border-l-4 border-[#003D73] p-4 rounded-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#003D73] mb-1">
                  MÓDULO SELECCIONADO: {activeModal.toUpperCase()}
                </p>
                <p className="text-sm text-[#334155]">
                  Este módulo forma parte de la arquitectura institucional del portal CONAREQF.
                </p>
              </div>

              <div className="space-y-2 text-xs sm:text-sm">
                <p className="font-semibold text-[#0F172A]">
                  Detalles del servicio habilitado:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#334155]">
                  <li>Acceso seguro mediante validación de DNI / Colegiatura CQFP.</li>
                  <li>Descarga de resoluciones y anexos en formato PDF con firma digital.</li>
                  <li>Soporte técnico en línea de lunes a viernes (08:30 a.m. - 05:00 p.m.).</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F8FAFC] px-6 py-4 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#334155] border border-slate-300 rounded-sm hover:bg-slate-100"
              >
                Cerrar
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#003D73] text-white rounded-sm hover:bg-[#002b52]"
              >
                Continuar al Documento
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}