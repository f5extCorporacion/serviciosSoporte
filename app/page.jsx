"use client";

import Inicio2 from "@/app/components/paginas/Inicio2";
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
import Servicios from "./components/paginas/servicios";
import GhostFibers from "@/app/components/GhostFibers";

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

export default function Home() {
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
    <main className="min-h-screen overflow-hidden bg-[#09090f] text-slate-100">
      {/* HERO */}
      <section className="relative isolate">
        <Inicio2 />
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="relative flex min-h-screen items-center justify-center overflow-hidden border-t border-white/5 bg-[#0b0b13]"
      >
        {/* Fondo GhostFibers */}
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          <GhostFibers
            lineColor="#140E35"
            glowColor="#3437A0"
            speed={0.2}
            scale={2}
            rotation={0}
            rotationSpeed={0.25}
            layers={4}
            waveAmplitude={0.015}
            waveFrequency={3}
            waveSpeed={0.15}
            layerSpeed={0.08}
            twist={0.1}
            twistFrequency={5}
            twistSpeed={1.2}
            lineFrequency={5}
            lineSpacing={2}
            lineSharpness={16}
            glowFalloff={10}
            glowIntensity={1.6}
            brightness={2}
            blueBoost={1.25}
            vignette={0.8}
            grain={0.05}
            dpr={1}
            lightMode={false}
            fps={60}
            paused={false}
          />
        </div>

        {/* Contenido por encima, centrado */}
        <div className="relative z-10 flex w-full items-center justify-center px-4 sm:px-6">
          <Servicios />
        </div>
      </section>

      {/* VENTA DE COMPUTADORES */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_right,_rgba(139,92,246,0.10),_transparent_55%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              Venta de equipos
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Encuentra el equipo
              <span className="block text-violet-400">que necesitas.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
              Te ayudamos a encontrar computadores y componentes según el uso
              que les darás. También puedes solicitar una cotización con
              distribuidores para buscar una solución que se ajuste a tu
              presupuesto.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={solicitarCotizacion}
                className="flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-violet-400"
              >
                <ShoppingCart size={17} />
                Cotizar computador
              </button>
              <a
                href="#contacto"
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3.5 text-sm font-semibold text-slate-300 hover:bg-white/5"
              >
                Hablar con un asesor
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <Monitor className="mb-8 text-violet-400" size={30} />
              <div>
                <h3 className="font-bold">PC de escritorio</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Equipos para trabajo y uso diario.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <Cpu className="mb-8 text-cyan-400" size={30} />
              <div>
                <h3 className="font-bold">Componentes</h3>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Memorias, almacenamiento y accesorios.
                </p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <CircleHelp size={24} />
                </div>
                <div>
                  <h3 className="font-bold">¿No sabes qué comprar?</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Te orientamos antes de realizar tu compra.
                  </p>
                </div>
              </div>
              <ChevronRight className="shrink-0 text-slate-600" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="border-t border-white/5 bg-[#0b0b13]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Sobre nosotros
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tu tecnología,
              <span className="block text-emerald-400">en buenas manos.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Brindamos soporte informático para que puedas trabajar, estudiar y
              disfrutar de tus equipos con tranquilidad. Nuestro objetivo es
              ofrecer atención clara, soluciones prácticas y acompañamiento
              durante cada servicio.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {ventajas.map((ventaja) => (
                <div
                  key={ventaja}
                  className="flex items-center gap-2 text-sm text-slate-300"
                >
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {ventaja}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                <Sparkles size={23} />
              </div>
              <div>
                <h3 className="font-bold">Soporte a tu medida</h3>
                <p className="text-xs text-slate-500">
                  Para personas y empresas
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold">
                    Diagnóstico personalizado
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Identificamos las necesidades de tu equipo o proyecto.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                <div>
                  <h4 className="text-sm font-semibold">Asesoría remota</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Orientación por WhatsApp y videollamada para resolver
                    inquietudes.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />
                <div>
                  <h4 className="text-sm font-semibold">
                    Cotizaciones transparentes
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Acordamos el alcance y el precio antes de realizar el
                    trabajo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-7 sm:p-10 lg:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                  Hablemos
                </span>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                  ¿Necesitas ayuda con tu computador?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
                  Escríbenos por WhatsApp. Cuéntanos qué necesitas y coordinamos
                  una asesoría o cotización.
                </p>
              </div>

              <button
                onClick={abrirWhatsApp}
                className="flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-6 py-4 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                <MessageCircle size={21} />
                Contactar por WhatsApp
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#07070b]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#inicio" className="text-lg font-bold tracking-tight">
              Ranger<span className="text-emerald-400">Tech</span>
            </a>
            <p className="mt-1 text-xs text-slate-600">
              Soporte informático y soluciones digitales.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <a href="#servicios" className="hover:text-emerald-400">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-emerald-400">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-emerald-400">
              Contacto
            </a>
          </div>

          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} RangerTech
          </p>
        </div>
      </footer>
    </main>
  );
}
