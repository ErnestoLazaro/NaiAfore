import { useState } from "react";
import advisorImg from "@/imports/Nairovi-Afore.png";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

type FormData = {
  nombre: string;
  telefono: string;
  email: string;
  curp: string;
  nss: string;
  mensaje: string;
};

export default function App() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    telefono: "",
    email: "",
    curp: "",
    nss: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola Nai, me interesa saber más sobre la ayuda por desempleo de mi AFORE.%0A%0ANombre: ${encodeURIComponent(form.nombre)}%0ATeléfono: ${encodeURIComponent(form.telefono)}%0AEmail: ${encodeURIComponent(form.email)}%0ACURP: ${encodeURIComponent(form.curp)}%0ANúmero de Seguro Social: ${encodeURIComponent(form.nss)}%0AMensaje: ${encodeURIComponent(form.mensaje)}`;
    window.open(`https://wa.me/522463310520?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const whatsappLink = "https://wa.me/522463310520?text=Hola%20Nai%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20la%20ayuda%20por%20desempleo%20de%20mi%20AFORE";

  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(160deg, #0d2818 0%, #1a4a2a 40%, #0f3320 100%)",
        color: "#f0f4f0",
      }}
    >
      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{ background: "rgba(10,30,18,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(74,197,120,0.2)" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black"
            style={{ background: "linear-gradient(135deg,#4ac578,#f0c040)", color: "#0a1e12", fontFamily: "'Montserrat',sans-serif" }}
          >
            N
          </div>
          <span className="font-bold tracking-wide text-lg" style={{ fontFamily: "'Montserrat',sans-serif", color: "#e8f5e8" }}>
            Nai <span style={{ color: "#4ac578" }}>AFORE</span>
          </span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "#25d366", color: "#fff" }}
        >
          <span className="w-4 h-4"><WhatsAppIcon /></span>
          Contáctame
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-10 lg:py-0 grid lg:grid-cols-2 gap-8 items-center min-h-[88vh]">
          {/* Left copy */}
          <div className="z-10 relative pt-6 pb-10 lg:py-16">
            <div
              className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: "rgba(74,197,120,0.15)", color: "#4ac578", border: "1px solid rgba(74,197,120,0.35)" }}
            >
              Asesoría AFORE · México
            </div>

            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: "'Montserrat',sans-serif", color: "#ffffff" }}
            >
              ¿TIENES CUENTA{" "}
              <span style={{ color: "#4ac578" }}>AFORE</span> Y NO
              TIENES{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#f0c040,#f8a020)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                EMPLEO?
              </span>
            </h1>

            <p
              className="text-2xl sm:text-3xl font-extrabold mb-6"
              style={{ fontFamily: "'Montserrat',sans-serif", color: "#f0c040" }}
            >
              ¡¿QUÉ ESPERAS?!
            </p>

            <p className="text-lg mb-2" style={{ color: "#a8d5b5" }}>
              Hasta un monto máximo de:
            </p>
            <div
              className="text-6xl sm:text-7xl font-black mb-6"
              style={{
                fontFamily: "'Montserrat',sans-serif",
                background: "linear-gradient(90deg,#4ac578,#90ef9a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              $35,193
            </div>

            <p className="text-base mb-1" style={{ color: "#c8e6c9" }}>
              <strong>Trámite confiable y totalmente seguro.</strong>
            </p>
            <p className="text-sm mb-8" style={{ color: "#7cb88a" }}>
              ¡Pide información para una precalificación inmediata!
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-base transition-all hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg,#f0c040,#e8a010)",
                  color: "#0a1e12",
                  fontFamily: "'Montserrat',sans-serif",
                  boxShadow: "0 4px 24px rgba(240,192,64,0.35)",
                }}
              >
                SOLICITAR PRECALIFICACIÓN GRATIS
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold text-base transition-all hover:scale-105"
                style={{ background: "#25d366", color: "#fff", fontFamily: "'Montserrat',sans-serif" }}
              >
                <span className="w-5 h-5"><WhatsAppIcon /></span>
                2463310520
              </a>
            </div>
          </div>

          {/* Right: advisor photo */}
          <div className="relative flex justify-center lg:justify-end items-end">
            <div
              className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle,#4ac578 0%,transparent 70%)", transform: "translate(20%,20%)" }}
            />
            <img
              src={advisorImg}
              alt="Nai, asesora AFORE"
              className="relative z-10 w-full max-w-sm lg:max-w-md object-cover"
              style={{ filter: "drop-shadow(0 8px 32px rgba(74,197,120,0.3))" }}
            />
          </div>
        </div>
      </section>

      {/* ── REQUISITOS ── */}
      <section
        id="requisitos"
        className="py-16"
        style={{ background: "rgba(0,0,0,0.25)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-black text-center mb-3"
            style={{ fontFamily: "'Montserrat',sans-serif", color: "#4ac578" }}
          >
            REQUISITOS
          </h2>
          <p className="text-center mb-10" style={{ color: "#7cb88a" }}>
            Verifica si calificas para tu ayuda por desempleo
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Tener cuenta AFORE.",
              "No estar cotizando actualmente.",
              "Tener un mínimo de 104 semanas cotizadas.",
              "No haberlo solicitado en los últimos 5 años.",
            ].map((req) => (
              <div
                key={req}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "rgba(74,197,120,0.08)", border: "1px solid rgba(74,197,120,0.2)" }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(74,197,120,0.2)", color: "#4ac578" }}
                >
                  <CheckIcon />
                </div>
                <p className="text-base font-medium pt-1" style={{ color: "#e0f0e4" }}>
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-black text-center mb-12"
            style={{ fontFamily: "'Montserrat',sans-serif", color: "#ffffff" }}
          >
            ¿POR QUÉ ELEGIR <span style={{ color: "#f0c040" }}>NAI AFORE</span>?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔒", title: "100% Seguro", desc: "Trámite oficial y confiable. Tu información siempre protegida." },
              { icon: "⚡", title: "Proceso Rápido", desc: "Precalificación inmediata. Te acompañamos en cada paso del trámite." },
              { icon: "💰", title: "Sin Costo Inicial", desc: "No pagas nada hasta recibir tu dinero. Sin letra chica." },
            ].map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl text-center"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "'Montserrat',sans-serif", color: "#4ac578" }}
                >
                  {b.title}
                </h3>
                <p className="text-sm" style={{ color: "#90b89a" }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULARIO ── */}
      <section
        id="formulario"
        className="py-16"
        style={{ background: "rgba(0,0,0,0.3)" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl sm:text-4xl font-black text-center mb-3"
            style={{ fontFamily: "'Montserrat',sans-serif", color: "#ffffff" }}
          >
            SOLICITA TU{" "}
            <span style={{ color: "#f0c040" }}>PRECALIFICACIÓN</span>
          </h2>
          <p className="text-center mb-10" style={{ color: "#7cb88a" }}>
            Déjanos tus datos y te contactamos a la brevedad
          </p>

          {submitted ? (
            <div
              className="text-center py-14 px-8 rounded-3xl"
              style={{ background: "rgba(74,197,120,0.12)", border: "2px solid rgba(74,197,120,0.4)" }}
            >
              <div className="text-5xl mb-4">✅</div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Montserrat',sans-serif", color: "#4ac578" }}
              >
                ¡Solicitud enviada!
              </h3>
              <p style={{ color: "#a8d5b5" }}>
                Tu información fue enviada vía WhatsApp. Nai te contactará muy pronto.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 flex flex-col gap-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(74,197,120,0.2)" }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                    Nombre completo *
                  </label>
                  <input
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(74,197,120,0.25)",
                      color: "#e8f5e8",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                    Teléfono *
                  </label>
                  <input
                    name="telefono"
                    required
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="10 dígitos"
                    type="tel"
                    className="rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(74,197,120,0.25)",
                      color: "#e8f5e8",
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                  Correo electrónico
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                  type="email"
                  className="rounded-xl px-4 py-3 text-sm outline-none"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(74,197,120,0.25)",
                    color: "#e8f5e8",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                  CURP *
                </label>
                <input
                  name="curp"
                  required
                  value={form.curp}
                  onChange={handleChange}
                  placeholder="Ej. XAXX010101HNEXXXA4"
                  maxLength={18}
                  className="rounded-xl px-4 py-3 text-sm outline-none tracking-widest uppercase"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(74,197,120,0.25)",
                    color: "#e8f5e8",
                  }}
                  onInput={(e) => {
                    const t = e.target as HTMLInputElement;
                    t.value = t.value.toUpperCase();
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                  Número de Seguro Social (NSS) *
                </label>
                <input
                  name="nss"
                  required
                  value={form.nss}
                  onChange={handleChange}
                  placeholder="Ej. 12345678901"
                  maxLength={11}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className="rounded-xl px-4 py-3 text-sm outline-none tracking-widest"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(74,197,120,0.25)",
                    color: "#e8f5e8",
                  }}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold" style={{ color: "#90c8a0" }}>
                  Mensaje adicional
                </label>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  placeholder="¿Tienes alguna pregunta o comentario?"
                  rows={3}
                  className="rounded-xl px-4 py-3 text-sm outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(74,197,120,0.25)",
                    color: "#e8f5e8",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-black text-base tracking-wide transition-all hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg,#f0c040,#e8a010)",
                  color: "#0a1e12",
                  fontFamily: "'Montserrat',sans-serif",
                  boxShadow: "0 4px 24px rgba(240,192,64,0.35)",
                }}
              >
                ENVIAR POR WHATSAPP ✓
              </button>

              <p className="text-xs text-center" style={{ color: "#5a7a62" }}>
                Tu información es confidencial y solo se usará para contactarte.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── SOCIAL LINKS ── */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 lg:px-12"
            style={{
              background: "linear-gradient(145deg,rgba(20,74,42,0.88),rgba(8,38,23,0.96))",
              border: "1px solid rgba(74,197,120,0.24)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
            }}
          >
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(74,197,120,0.18),transparent 70%)" }}
            />
            <div className="relative text-center max-w-3xl mx-auto mb-9">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{
                  background: "rgba(240,192,64,0.1)",
                  border: "1px solid rgba(240,192,64,0.28)",
                  color: "#f0c040",
                }}
              >
                Actas y trámites oficiales
              </div>
              <h2
                className="text-3xl sm:text-4xl font-black leading-tight mb-3"
                style={{ fontFamily: "'Montserrat',sans-serif", color: "#ffffff" }}
              >
                Tus documentos, sin complicaciones
              </h2>
              <p className="text-base sm:text-lg" style={{ color: "#a8d5b5" }}>
                Te ayudo a gestionar trámites oficiales de forma rápida, confiable y segura.
              </p>
            </div>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: "Acta de nacimiento", number: "01" },
                { name: "Acta de matrimonio", number: "02" },
                { name: "Acta de divorcio", number: "03" },
                { name: "Acta de defunción", number: "04" },
                { name: "Constancia fiscal del SAT", number: "05" },
              ].map((service) => (
                <div
                  key={service.name}
                  className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(74,197,120,0.2)",
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg,rgba(74,197,120,0.22),rgba(74,197,120,0.08))",
                        border: "1px solid rgba(74,197,120,0.35)",
                        color: "#4ac578",
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.8}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                        aria-hidden="true"
                      >
                        <path d="M6 2.75h8l4 4V21.25H6z" />
                        <path d="M14 2.75v4h4M9 11h6M9 15h6M9 18h4" />
                      </svg>
                    </span>
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: "rgba(240,192,64,0.72)", fontFamily: "'Montserrat',sans-serif" }}
                    >
                      {service.number}
                    </span>
                  </div>
                  <p
                    className="font-bold leading-snug"
                    style={{ color: "#e8f5e8", fontFamily: "'Montserrat',sans-serif" }}
                  >
                    {service.name}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="relative mt-8 pt-8 grid sm:grid-cols-3 gap-4"
              style={{ borderTop: "1px solid rgba(74,197,120,0.16)" }}
            >
              {["Trámite rápido", "Confiable y seguro", "Atención personalizada"].map((benefit) => (
                <div key={benefit} className="flex items-center justify-center gap-3">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(74,197,120,0.14)", color: "#4ac578" }}
                  >
                    <CheckIcon />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: "#c8e6c9" }}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative mt-9 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl font-bold transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#4ac578,#25a95a)",
                  color: "#071b10",
                  boxShadow: "0 8px 28px rgba(74,197,120,0.26)",
                  fontFamily: "'Montserrat',sans-serif",
                }}
              >
                <span className="w-5 h-5"><WhatsAppIcon /></span>
                Solicitar mi trámite
              </a>
            </div>
          </div>

          <div
            className="max-w-3xl mx-auto pt-14 mt-14 text-center"
            style={{ borderTop: "1px solid rgba(74,197,120,0.14)" }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "'Montserrat',sans-serif", color: "#ffffff" }}
            >
              Sígueme en redes sociales
            </h3>
            <p className="text-sm mb-8" style={{ color: "#7cb88a" }}>
              Consejos sobre tu AFORE y noticias del sector
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com",
                  icon: <FacebookIcon />,
                  color: "#1877f2",
                  bg: "rgba(24,119,242,0.12)",
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/naiafore/",
                  icon: <InstagramIcon />,
                  color: "#e1306c",
                  bg: "rgba(225,48,108,0.12)",
                },
                {
                  label: "WhatsApp",
                  href: whatsappLink,
                  icon: <WhatsAppIcon />,
                  color: "#25d366",
                  bg: "rgba(37,211,102,0.12)",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-sm transition-all hover:scale-105"
                  style={{
                    background: s.bg,
                    border: `1px solid ${s.color}40`,
                    color: s.color,
                  }}
                >
                  <span className="w-5 h-5">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 text-center"
        style={{ borderTop: "1px solid rgba(74,197,120,0.15)", color: "#4a6a54" }}
      >
        <p className="text-sm mb-1">
          © 2026 Nai AFORE · Asesoría en retiro y desempleo
        </p>
        <p className="text-xs">
          WhatsApp:{" "}
          <a href={whatsappLink} className="underline" style={{ color: "#4ac578" }}>
            2463310520
          </a>
        </p>
        <p className="text-center text-sm mt-2" style={{ color: "#4ac578" }}>
          © {new Date().getFullYear()} Diseño por{" "}
          <a
            href="https://www.ernestolazaro.com.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:opacity-80 transition-opacity"
            style={{ color: "#A46741" }}
          >
            Ernesto Lázaro
          </a>{" "}
          🦇
        </p>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{
          background: "#25d366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          color: "#fff",
          padding: "14px",
        }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
