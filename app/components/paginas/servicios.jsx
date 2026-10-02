import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle2,
  Laptop,
  Network,
  ShieldCheck,
  Wrench,
  Video,
  Camera,
  MonitorSmartphone,
} from "lucide-react";

const WHATSAPP_NUMBER = "573022130374";

const servicios = [
  {
    icon: MonitorSmartphone,
    title: "Venta de computadores",
    description:
      "Cotizamos tu computador nuevo de escritorio o portátil y te informamos cómo pagar.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    ring: "ring-teal-400/30",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Te asesoramos para elegir el computador ideal según tu presupuesto y necesidades, ya sea de escritorio o portátil. Te enviamos la cotización con las especificaciones y te explicamos detalladamente las formas de pago disponibles para que puedas adquirirlo fácilmente.",
    features: [
      "Cotización personalizada sin compromiso",
      "Equipos de escritorio y portátiles",
      "Asesoría según tu presupuesto",
      "Información clara sobre métodos de pago",
    ],
  },
  {
    icon: Wrench,
    title: "Arreglo de PC",
    description: "Mantenimiento, diagnóstico y reparación de computadores.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    ring: "ring-cyan-400/30",
    img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Realizamos diagnóstico completo, limpieza interna, cambio de pasta térmica, reemplazo de componentes y reparación de hardware o software. Trabajamos con equipos de escritorio y portátiles de cualquier marca.",
    features: [
      "Diagnóstico sin costo inicial",
      "Limpieza física y cambio de pasta térmica",
      "Reemplazo de discos, memorias y fuentes",
      "Optimización de rendimiento",
    ],
  },
  {
    icon: Laptop,
    title: "Instalación de Windows y Linux",
    description:
      "Instalación de sistemas operativos y configuración de programas.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    ring: "ring-violet-400/30",
    img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Instalamos Windows 10/11 o distribuciones Linux (Ubuntu, Mint, Debian) con todos los drivers, programas esenciales y respaldo previo de tu información.",
    features: [
      "Respaldo de tus archivos",
      "Instalación de drivers y programas",
      "Configuración de cuentas y correo",
      "Sistema listo para usar",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Eliminación de virus",
    description: "Limpieza de malware y revisión de seguridad de tu equipo.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    ring: "ring-emerald-400/30",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Detectamos y eliminamos virus, troyanos, spyware, ransomware y adware. Además reforzamos la seguridad del sistema para prevenir infecciones futuras.",
    features: [
      "Análisis completo del sistema",
      "Eliminación de software malicioso",
      "Configuración de antivirus",
      "Consejos de prevención",
    ],
  },
  {
    icon: Network,
    title: "Configuración de redes",
    description:
      "Redes Wi-Fi, conexiones, routers y configuración de dispositivos.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    ring: "ring-blue-400/30",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Instalamos y configuramos routers, repetidores, switches y puntos de acceso. Optimizamos la señal Wi-Fi y conectamos todos tus dispositivos de forma segura.",
    features: [
      "Configuración de router y Wi-Fi",
      "Optimización de cobertura",
      "Redes seguras con contraseña",
      "Conexión de impresoras y Smart TV",
    ],
  },
  {
    icon: Camera,
    title: "Instalación de cámaras",
    description: "Instalación y configuración de sistemas de videovigilancia.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    ring: "ring-amber-400/30",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Diseñamos e instalamos sistemas de videovigilancia para hogares y negocios. Configuramos acceso remoto desde tu celular y grabación continua.",
    features: [
      "Cámaras IP o análogas",
      "Acceso remoto desde el celular",
      "Grabación y almacenamiento",
      "Mantenimiento y soporte",
    ],
  },
  {
    icon: Video,
    title: "Asesoría por videollamada",
    description: "Soporte remoto por WhatsApp para resolver tus dudas.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    ring: "ring-pink-400/30",
    img: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&q=60&auto=format&fit=crop",
    fullDescription:
      "Te ayudamos en tiempo real por videollamada o WhatsApp para resolver problemas de software, configuración o dudas técnicas sin que tengas que salir de casa.",
    features: [
      "Atención personalizada",
      "Soporte por WhatsApp o videollamada",
      "Resolución de dudas técnicas",
      "Horarios flexibles",
    ],
  },
];

// Hook para saber cuántas cards mostrar según viewport
function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

export default function Servicios() {
  const visible = useVisibleCount();
  const total = servicios.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selected, setSelected] = useState(null);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };
  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const items = Array.from({ length: visible }, (_, k) => {
    const i = (index + k) % total;
    return { ...servicios[i], _i: i };
  });

  // Genera el link de WhatsApp con mensaje dinámico
  const getWhatsAppLink = (title) => {
    const text = `Deseo saber sobre ${title}, dame más información`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Cerrar modal con Escape + bloquear scroll del body
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 py-16 text-center sm:px-8 lg:py-24">
      {/* Header centrado */}
      <div className="mb-10 flex w-full flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
            Nuestros servicios Soluciones para tecnología
          </span>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            Servicios desde 100 mil pesos en adelante.
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400"></p>
        </div>
        <a
          href={getWhatsAppLink("tus servicios en general")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          Solicitar servicio <ArrowRight size={16} />
        </a>
      </div>

      {/* Carrusel */}
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        {/* Flechas laterales */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 -translate-x-4 items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:border-emerald-400/40 hover:text-emerald-400 sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur transition hover:border-emerald-400/40 hover:text-emerald-400 sm:flex"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pista del carrusel */}
        <motion.div
          className="flex w-full cursor-grab justify-center gap-4 active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) next();
            else if (info.offset.x > 60) prev();
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((servicio, k) => {
              const Icon = servicio.icon;
              return (
                <motion.article
                  key={`${servicio._i}-${k}`}
                  layout
                  initial={{ opacity: 0, x: direction * 60, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 60, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                    mass: 0.7,
                  }}
                  onClick={() => setSelected(servicio)}
                  className="group relative shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] text-left backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(52,211,153,0.35)] sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.667rem)]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                  {/* Imagen */}
                  <div className="relative h-40 w-full overflow-hidden rounded-t-3xl">
                    <img
                      src={servicio.img}
                      alt={servicio.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b13] via-[#0b0b13]/40 to-transparent" />
                  </div>

                  {/* Contenido */}
                  <div className="relative p-6 pt-4">
                    <div
                      className={`-mt-12 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ring-1 backdrop-blur-md ${servicio.bg} ${servicio.color} ${servicio.ring}`}
                    >
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <h3 className="text-lg font-bold">{servicio.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {servicio.description}
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(servicio);
                      }}
                      className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-slate-500 transition group-hover:text-emerald-400"
                    >
                      Más información <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Controles inferiores */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-emerald-400/40 hover:text-emerald-400 sm:hidden"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {servicios.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Ir al servicio ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-emerald-400/40 hover:text-emerald-400 sm:hidden"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* MODAL reutilizable */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Contenido del modal */}
            <motion.div
              key="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b13] text-left shadow-[0_0_60px_-15px_rgba(52,211,153,0.5)]"
            >
              {/* Brillo superior */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

              {/* Botón cerrar */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition hover:border-emerald-400/40 hover:text-emerald-400"
              >
                <X size={18} />
              </button>

              {/* Scroll interno */}
              <div className="max-h-[90vh] overflow-y-auto">
                {/* Imagen cabecera */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={selected.img}
                    alt={selected.title}
                    className="h-full w-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b13] via-[#0b0b13]/50 to-transparent" />
                </div>

                {/* Contenido */}
                <div className="relative -mt-10 px-6 pb-8 sm:px-8">
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 backdrop-blur-md ${selected.bg} ${selected.color} ${selected.ring}`}
                  >
                    {(() => {
                      const Icon = selected.icon;
                      return <Icon size={26} strokeWidth={1.7} />;
                    })()}
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {selected.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {selected.description}
                  </p>

                  <div className="my-6 h-px w-full bg-gradient-to-r from-emerald-400/30 via-white/5 to-transparent" />

                  <p className="text-sm leading-7 text-slate-300">
                    {selected.fullDescription}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {selected.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-emerald-400"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppLink(selected.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-[#0b0b13] transition hover:bg-emerald-300"
                    >
                      Solicitar este servicio <ArrowRight size={16} />
                    </a>
                    <button
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-emerald-400/40 hover:text-emerald-400"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
