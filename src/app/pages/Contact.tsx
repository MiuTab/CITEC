import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Clock, ChevronRight, Linkedin, Instagram, MessageSquare,
} from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#0052CC", marginBottom: "12px" }}>
      {children}
    </p>
  );
}

const CONTACT_INFO = [
  { icon: <Phone size={18} />, label: "Teléfono / WhatsApp", value: "+57 (601) 000-0000", sub: "Lunes a Viernes, 8am – 6pm" },
  { icon: <Mail size={18} />, label: "Correo electrónico", value: "info@citecd.com", sub: "Respondemos en menos de 24h" },
  { icon: <MapPin size={18} />, label: "Ubicación principal", value: "Bogotá D.C., Colombia", sub: "Cobertura nacional" },
  { icon: <Clock size={18} />, label: "Horario de atención", value: "Lun – Vie: 8:00 – 18:00", sub: "Urgencias operativas 24/7" },
];

const SERVICES_OPTIONS = [
  "Fotografía y Video Aéreo",
  "Inspección Industrial",
  "Seguridad y Vigilancia",
  "Agricultura de Precisión",
  "Integración de IA",
  "Fabricación e Impresión 3D",
  "Certificaciones y Asesoría",
  "Otro",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #DFE1E6",
    backgroundColor: "#FFFFFF",
    color: "#172B4D",
    fontSize: "14px",
    fontFamily: "'Inter', sans-serif",
    outline: "none",
    transition: "border-color 0.15s ease, box-shadow 0.15s ease",
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Page header */}
      <section style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Eyebrow>Hablemos</Eyebrow>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 4.5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                marginBottom: "16px",
                lineHeight: 1.1,
                maxWidth: "520px",
              }}
            >
              Solicite su cotización gratuita
            </h1>
            <p style={{ fontSize: "16px", color: "#5E6C84", lineHeight: "1.7", maxWidth: "480px" }}>
              Cuéntenos sobre su proyecto. Nuestros ingenieros le responderán con una propuesta personalizada en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "48px", alignItems: "flex-start" }}
          className="contact-grid"
        >
          {/* Left — info sidebar */}
          <div>
            {/* Contact info cards */}
            <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", overflow: "hidden", marginBottom: "20px" }}>
              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    borderBottom: i < CONTACT_INFO.length - 1 ? "1px solid #DFE1E6" : "none",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      backgroundColor: "#EBF2FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0052CC",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "11px", color: "#8993A4", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2px" }}>
                      {info.label}
                    </p>
                    <p style={{ fontSize: "14px", color: "#172B4D", fontWeight: 600 }}>{info.value}</p>
                    <p style={{ fontSize: "12px", color: "#8993A4", marginTop: "1px" }}>{info.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Commitments */}
            <div style={{ border: "1px solid #B3D4FF", borderRadius: "8px", backgroundColor: "#EBF2FF", padding: "20px", marginBottom: "20px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#0052CC", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} /> Compromisos CITEC
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Respuesta en menos de 24 horas", "Cotización sin costo ni compromiso", "Asesoría técnica incluida", "Propuesta detallada y personalizada"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <CheckCircle2 size={13} style={{ color: "#0052CC", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ fontSize: "13px", color: "#344563" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", padding: "18px 20px", backgroundColor: "#FFFFFF" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#8993A4", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
                Redes Sociales
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { icon: <Linkedin size={15} />, label: "LinkedIn — CITEC Colombia" },
                  { icon: <Instagram size={15} />, label: "Instagram — @citec_drones" },
                  { icon: <MessageSquare size={15} />, label: "WhatsApp Business" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#344563",
                      textDecoration: "none",
                      transition: "all 0.15s ease",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#F4F6F9";
                      (e.currentTarget as HTMLElement).style.color = "#0052CC";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#344563";
                    }}
                  >
                    <span style={{ color: "#0052CC" }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              border: "1px solid #DFE1E6",
              borderRadius: "8px",
              backgroundColor: "#FFFFFF",
              overflow: "hidden",
            }}
          >
            {/* Form header */}
            <div style={{ padding: "24px 28px", borderBottom: "1px solid #DFE1E6", backgroundColor: "#F4F6F9" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 700, color: "#172B4D", marginBottom: "4px" }}>
                Formulario de contacto
              </h2>
              <p style={{ fontSize: "13px", color: "#5E6C84" }}>Complete los datos y le contactaremos a la brevedad.</p>
            </div>

            <div style={{ padding: "28px" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: "center", padding: "48px 20px" }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#EBF2FF",
                      border: "2px solid #0052CC",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <CheckCircle2 size={28} style={{ color: "#0052CC" }} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", fontWeight: 700, color: "#172B4D", marginBottom: "10px" }}>
                    Solicitud enviada
                  </h3>
                  <p style={{ fontSize: "14px", color: "#5E6C84", lineHeight: "1.7", marginBottom: "28px" }}>
                    Gracias por contactarnos. Un ingeniero de CITEC revisará su solicitud y le responderá en menos de 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" }); }}
                    style={{
                      padding: "10px 20px",
                      border: "1px solid #DFE1E6",
                      borderRadius: "6px",
                      backgroundColor: "#FFFFFF",
                      color: "#344563",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    Enviar otra consulta
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                        Nombre completo <span style={{ color: "#C9372C" }}>*</span>
                      </label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Juan Pérez" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                        Empresa / Institución
                      </label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Mi Empresa S.A.S." style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                        Correo electrónico <span style={{ color: "#C9372C" }}>*</span>
                      </label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="correo@empresa.com" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+57 300 000 0000" style={inputStyle}
                        onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                        onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                      Servicio de interés <span style={{ color: "#C9372C" }}>*</span>
                    </label>
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    >
                      <option value="">Seleccione un servicio</option>
                      {SERVICES_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "24px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#344563", marginBottom: "6px" }}>
                      Descripción del proyecto <span style={{ color: "#C9372C" }}>*</span>
                    </label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange}
                      placeholder="Descríbanos su proyecto, objetivos, zona de operación, plazos y cualquier detalle relevante..."
                      rows={5}
                      style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "#0052CC"; (e.target as HTMLElement).style.boxShadow = "0 0 0 2px #EBF2FF"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "#DFE1E6"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      padding: "13px 24px",
                      backgroundColor: loading ? "#6B9AD2" : "#0052CC",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#fff",
                      cursor: loading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      transition: "background-color 0.15s ease",
                      fontFamily: "'Inter', sans-serif",
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = "#0747A6"; }}
                    onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = "#0052CC"; }}
                  >
                    {loading ? (
                      <>
                        <span style={{ display: "inline-block", animation: "spin 1s linear infinite", width: "16px", height: "16px", border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "white", borderRadius: "50%" }} />
                        Enviando solicitud...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud <Send size={15} />
                      </>
                    )}
                  </button>

                  <p style={{ fontSize: "12px", color: "#8993A4", textAlign: "center", marginTop: "14px" }}>
                    Sus datos están protegidos. No enviamos spam ni compartimos información.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
