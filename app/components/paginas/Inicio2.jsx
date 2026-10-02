"use client";

import ParticleText from "@/app/components/ParticleText";

import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cpu,
  Laptop,
  MessageCircle,
  Monitor,
  Network,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
  Video,
  Camera,
} from "lucide-react";

const servicios = [
  {
    icon: Wrench,
    title: "Arreglo de PC",
    description: "Mantenimiento, diagnóstico y reparación de computadores.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Laptop,
    title: "Instalación de Windows y Linux",
    description:
      "Instalación de sistemas operativos y configuración de programas.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Eliminación de virus",
    description: "Limpieza de malware y revisión de seguridad de tu equipo.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Network,
    title: "Configuración de redes",
    description:
      "Redes Wi-Fi, conexiones, routers y configuración de dispositivos.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Camera,
    title: "Instalación de cámaras",
    description: "Instalación y configuración de sistemas de videovigilancia.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Video,
    title: "Asesoría por videollamada",
    description: "Soporte remoto por WhatsApp para resolver tus dudas.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

const ventajas = [
  "Atención personalizada",
  "Soporte presencial y remoto",
  "Soluciones para hogares y negocios",
  "Cotizaciones según tus necesidades",
];

export default function Inicio2() {
  const whatsappNumber = "573022130374";

  const abrirWhatsApp = () => {
    const mensaje =
      "Hola, necesito información sobre sus servicios de soporte informático.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
  };

  const solicitarCotizacion = () => {
    const mensaje =
      "Hola, quiero solicitar una cotización para un servicio informático.";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`,
      "_blank",
    );
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(34,197,94,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(139,92,246,0.12),_transparent_50%)]" />

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
        {/* Navegación */}
        <nav className="flex items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-bold tracking-tight"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
              <Cpu size={22} />
            </span>
            <span className="text-xl">
              Bit<span className="text-emerald-400">legend</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#nosotros" className="transition hover:text-white">
              Nosotros
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>

          <button
            onClick={abrirWhatsApp}
            className="flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <MessageCircle size={17} />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>
        </nav>

        {/* Presentación */}
        <div
          id="inicio"
          className="grid items-center gap-10 pb-14 pt-14 lg:grid-cols-[1fr_1.15fr] lg:gap-8 lg:pb-24 lg:pt-20"
        >
          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Soporte informático profesional
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Servicios desde
              <span className="block text-emerald-400">
                100 mil pesos en Adelante.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Soluciones informáticas para tu hogar, negocio o empresa.
              Reparamos computadores, configuramos redes, instalamos sistemas y
              te asesoramos de forma presencial o remota.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={solicitarCotizacion}
                className="group flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-400"
              >
                Solicitar cotización
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <a
                href="#servicios"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                Ver servicios
                <ChevronRight size={17} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-400">
              {ventajas.slice(0, 2).map((ventaja) => (
                <span key={ventaja} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400" />
                  {ventaja}
                </span>
              ))}
            </div>
          </div>

          {/* Efecto ParticleText */}
          <div className="relative min-w-0">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#09090f] shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-600">
                  ranger_tech.exe
                </span>
              </div>

              <div className="relative flex min-h-[290px] items-center justify-center sm:min-h-[360px]">
                <div className="w-full">
                  <ParticleText
                    text="Soporte  BitLegend"
                    particleSize={2.2}
                    density={4}
                    color="#f8fafc"
                    highlightColor="#8b5cf6"
                    scatter={190}
                    gatherDuration={1600}
                    stagger={420}
                    pointerRepel={42}
                    repelRadius={120}
                    idleDrift={0.8}
                    trigger="mount"
                    fontSize="clamp(2rem, 9vw, 5.5rem)"
                    fontWeight={800}
                    fontFamily="inherit"
                    glow
                  />
                </div>

                <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
                  <span>Systems online</span>
                  <span className="text-emerald-500/70">● Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
