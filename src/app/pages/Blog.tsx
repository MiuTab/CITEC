import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight, BookOpen, ArrowRight, Clock } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#0052CC", marginBottom: "12px" }}>
      {children}
    </p>
  );
}

const UPCOMING_TOPICS = [
  {
    tag: "Normativa",
    title: "Regulación RPAS en Colombia: Todo lo que necesita saber para 2025",
    desc: "Guía completa sobre la normativa UAEAC para operación de drones en Colombia, permisos y certificaciones requeridas.",
    readTime: "8 min",
  },
  {
    tag: "Industria",
    title: "Cómo los drones están transformando la inspección de torres de transmisión",
    desc: "Análisis de costos, tiempos y seguridad en la inspección de infraestructura eléctrica con tecnología de drones.",
    readTime: "6 min",
  },
  {
    tag: "Agricultura",
    title: "NDVI vs NDRE: ¿Qué índice de vegetación necesita su cultivo?",
    desc: "Comparativa técnica de índices espectrales para diagnóstico agrícola con drones multiespectrales.",
    readTime: "10 min",
  },
  {
    tag: "Inteligencia Artificial",
    title: "Visión por computadora embarcada en drones: casos de uso reales",
    desc: "Aplicaciones prácticas de IA a bordo de drones en minería, construcción y seguridad industrial.",
    readTime: "7 min",
  },
  {
    tag: "Fabricación",
    title: "Impresión 3D para fabricación de drones: materiales y proceso",
    desc: "Los materiales más usados en fabricación de drones y cómo la impresión 3D cambia el diseño de plataformas.",
    readTime: "9 min",
  },
  {
    tag: "Caso de éxito",
    title: "Mapeo topográfico de 42 km: el proyecto que cambió nuestra metodología",
    desc: "El proceso, desafíos y resultados de uno de nuestros proyectos de mayor escala en infraestructura vial.",
    readTime: "5 min",
  },
];

export function Blog() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Page header */}
      <section
        style={{
          borderBottom: "1px solid #DFE1E6",
          padding: "64px 24px 56px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('https://images.unsplash.com/photo-1570979872219-9fadc2383792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMGluZHVzdHJpYWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc4NTUyNjg5fDA&ixlib=rb-4.1.0&q=80&w=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(240, 244, 248, 0.90)",
            backdropFilter: "blur(1px)",
          }}
        />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <Eyebrow>Blog Técnico</Eyebrow>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF3CD",
                  border: "1px solid #FFCA2C",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#856404",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Próximamente
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 4.5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                marginBottom: "16px",
                lineHeight: 1.1,
                maxWidth: "580px",
              }}
            >
              Conocimiento técnico sobre ingeniería con drones
            </h1>
            <p style={{ fontSize: "16px", color: "#5E6C84", lineHeight: "1.7", maxWidth: "520px", marginBottom: "28px" }}>
              Próximamente publicaremos guías técnicas, normativa actualizada, casos de éxito y análisis de tecnología de drones para el mercado colombiano.
            </p>

            {/* Status bar */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "6px",
                border: "1px solid #DFE1E6",
                backgroundColor: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#FFCA2C",
                  animation: "pulse 2s ease infinite",
                }}
              />
              <span style={{ fontSize: "13px", color: "#5E6C84", fontWeight: 500 }}>
                Blog en desarrollo — Publicación estimada: Q3 2025
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming articles */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "36px", display: "flex", alignItems: "center", gap: "12px" }}
        >
          <BookOpen size={18} style={{ color: "#0052CC" }} />
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#172B4D",
            }}
          >
            Artículos en preparación
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "16px" }}>
          {UPCOMING_TOPICS.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              style={{
                padding: "28px",
                borderRadius: "8px",
                border: "1px solid #DFE1E6",
                backgroundColor: "#FFFFFF",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "4px",
                    backgroundColor: "#EBF2FF",
                    border: "1px solid #B3D4FF",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#0052CC",
                  }}
                >
                  {topic.tag}
                </span>
                <span
                  style={{
                    padding: "3px 8px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF3CD",
                    border: "1px solid #FFCA2C",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#856404",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  Pronto
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#172B4D",
                  marginBottom: "10px",
                  lineHeight: "1.4",
                }}
              >
                {topic.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#5E6C84", lineHeight: "1.65", marginBottom: "16px" }}>{topic.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", paddingTop: "14px", borderTop: "1px solid #F4F6F9" }}>
                <Clock size={12} style={{ color: "#8993A4" }} />
                <span style={{ fontSize: "12px", color: "#8993A4", fontWeight: 500 }}>Lectura: {topic.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#F4F6F9", borderTop: "1px solid #DFE1E6", padding: "72px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "8px",
                backgroundColor: "#EBF2FF",
                border: "1px solid #B3D4FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <BookOpen size={22} style={{ color: "#0052CC" }} />
            </div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#172B4D",
                marginBottom: "12px",
              }}
            >
              Mientras tanto, conozca nuestros servicios
            </h2>
            <p style={{ fontSize: "15px", color: "#5E6C84", lineHeight: "1.7", marginBottom: "28px" }}>
              Descubra cómo CITEC puede transformar las operaciones de su empresa con tecnología avanzada de drones, certificaciones y soluciones a medida.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                to="/servicios"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "12px 24px",
                  backgroundColor: "#0052CC",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                Ver servicios <ArrowRight size={14} />
              </Link>
              <Link
                to="/contacto"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "12px 24px",
                  border: "1px solid #DFE1E6",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#344563",
                  textDecoration: "none",
                  backgroundColor: "#FFFFFF",
                }}
              >
                Contactar <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}