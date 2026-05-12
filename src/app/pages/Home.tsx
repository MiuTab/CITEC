import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ChevronRight,
  Shield,
  Camera,
  Sprout,
  Cpu,
  Wrench,
  Box,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Globe,
  TrendingUp,
  MapPin,
  Clock,
  Zap,
  Building2,
  BarChart3,
} from "lucide-react";

/* ─── ANIMATED COUNTER ─────────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const update = (time: number) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(update);
            else setCount(target);
          };
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── SECTION EYEBROW ───────────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#0052CC",
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #DFE1E6" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "72px 24px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "flex-end",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div style={{ paddingBottom: "72px" }}>
          {/* Industry badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#EBF2FF",
              border: "1px solid #B3D4FF",
              borderRadius: "4px",
              padding: "5px 12px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#0052CC",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#0052CC",
                display: "inline-block",
              }}
            />
            Ingeniería Certificada con Drones — Colombia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#172B4D",
              marginBottom: "20px",
            }}
          >
            Soluciones avanzadas{" "}
            <span style={{ color: "#0052CC" }}>con drones</span>{" "}
            para empresas y gobierno
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              fontSize: "17px",
              color: "#5E6C84",
              lineHeight: "1.7",
              marginBottom: "36px",
              maxWidth: "440px",
            }}
          >
            Certificamos, asesoramos y ejecutamos proyectos con drones en Colombia. Desde inspección industrial hasta integración de inteligencia artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}
          >
            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "12px 24px",
                backgroundColor: "#0052CC",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0747A6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0052CC")}
            >
              Solicitar Cotización <ChevronRight size={15} />
            </Link>
            <Link
              to="/servicios"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "12px 24px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #DFE1E6",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#344563",
                textDecoration: "none",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#0052CC";
                (e.currentTarget as HTMLElement).style.color = "#0052CC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#DFE1E6";
                (e.currentTarget as HTMLElement).style.color = "#344563";
              }}
            >
              Ver Servicios
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              paddingTop: "24px",
              borderTop: "1px solid #F4F6F9",
            }}
          >
            {[
              "Certificados UAEAC",
              "Operadores calificados",
              "+100 proyectos ejecutados",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={14} style={{ color: "#0052CC", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "#5E6C84", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-image-col"
          style={{
            alignSelf: "stretch",
            minHeight: "460px",
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1575561828191-550d65f82591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGluZHVzdHJpYWwlMjBpbnNwZWN0aW9uJTIwcHJvZmVzc2lvbmFsJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3ODU1MTgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Drone industrial CITEC"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          {/* Blue accent bar at top */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: "#0052CC",
            }}
          />
          {/* Floating stat card */}
          <div
            style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              padding: "14px 18px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              border: "1px solid #DFE1E6",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                backgroundColor: "#EBF2FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Award size={20} style={{ color: "#0052CC" }} />
            </div>
            <div>
              <p style={{ fontSize: "16px", fontWeight: 700, color: "#172B4D", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
                Certificados
              </p>
              <p style={{ fontSize: "12px", color: "#5E6C84", marginTop: "2px" }}>UAEAC Colombia</p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding-bottom: 0 !important; }
          .hero-image-col { min-height: 260px !important; border-radius: 8px !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── STATS BAR ─────────────────────────────────────────────────────────────── */
function StatsSection() {
  const stats = [
    { value: 120, suffix: "+", label: "Proyectos completados" },
    { value: 60, suffix: "+", label: "Clientes empresariales" },
    { value: 8, suffix: "+", label: "Años de experiencia" },
    { value: 98, suffix: "%", label: "Satisfacción del cliente" },
  ];

  return (
    <section style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderLeft: "1px solid #DFE1E6",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                padding: "36px 28px",
                borderRight: "1px solid #DFE1E6",
                borderBottom: "1px solid #DFE1E6",
                borderTop: "1px solid #DFE1E6",
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#0052CC",
                  lineHeight: 1,
                  marginBottom: "6px",
                  letterSpacing: "-0.02em",
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p style={{ fontSize: "14px", color: "#5E6C84", fontWeight: 500 }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── SERVICES ──────────────────────────────────────────────────────────────── */
const SERVICES = [
  { icon: <Camera size={22} />, title: "Fotografía y Video Aéreo", desc: "Mapeo fotogramétrico, ortomosaicos, modelos 3D y video 4K profesional para construcción, topografía e inspección." },
  { icon: <Wrench size={22} />, title: "Inspección Industrial", desc: "Inspección no invasiva de torres, líneas eléctricas, tuberías y plantas. Reducción de riesgos y tiempos de parada." },
  { icon: <Shield size={22} />, title: "Seguridad y Vigilancia", desc: "Monitoreo y patrullaje aéreo para perímetros, eventos y zonas críticas con integración a centros de control." },
  { icon: <Sprout size={22} />, title: "Agricultura de Precisión", desc: "Análisis NDVI, fumigación de precisión y diagnóstico de cultivos para optimizar rendimientos y reducir insumos." },
  { icon: <Cpu size={22} />, title: "Integración de IA", desc: "Visión por computadora y análisis automatizado de datos embarcados o en la nube para decisiones inteligentes." },
  { icon: <Box size={22} />, title: "Fabricación e Impresión 3D", desc: "Diseño y fabricación de drones, rovers y estructuras a medida con impresión 3D industrial de alto rendimiento." },
];

function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "88px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "52px" }}
        >
          <Eyebrow>Nuestros Servicios</Eyebrow>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                maxWidth: "520px",
                lineHeight: 1.15,
              }}
            >
              Capacidades de ingeniería completas
            </h2>
            <Link
              to="/servicios"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#0052CC",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Ver todos los servicios <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            backgroundColor: "#DFE1E6",
            border: "1px solid #DFE1E6",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "32px",
                backgroundColor: hovered === i ? "#F4F8FF" : "#FFFFFF",
                cursor: "pointer",
                transition: "background-color 0.15s ease",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  backgroundColor: hovered === i ? "#0052CC" : "#EBF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: hovered === i ? "#FFFFFF" : "#0052CC",
                  marginBottom: "18px",
                  transition: "all 0.2s ease",
                }}
              >
                {svc.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#172B4D",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {svc.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#5E6C84", lineHeight: "1.65" }}>{svc.desc}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  marginTop: "18px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: hovered === i ? "#0052CC" : "#8993A4",
                  transition: "color 0.15s ease",
                }}
              >
                Más información <ArrowRight size={13} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CITEC ─────────────────────────────────────────────────────────────── */
function WhyCitecSection() {
  const points = [
    { icon: <Award size={18} />, title: "Certificados UAEAC", desc: "Operaciones reguladas y avaladas por la autoridad aeronáutica colombiana. Cumplimiento normativo total." },
    { icon: <Zap size={18} />, title: "Tecnología actualizada", desc: "Equipos de última generación con capacidades multiespectrales, LiDAR, termografía e integración de IA." },
    { icon: <Users size={18} />, title: "Equipo de ingenieros especializados", desc: "Profesionales con experiencia en proyectos para energía, minería, construcción, agroindustria y gobierno." },
    { icon: <Globe size={18} />, title: "Cobertura nacional", desc: "Capacidad de despliegue en cualquier punto del territorio colombiano, incluidas zonas de difícil acceso." },
  ];

  return (
    <section style={{ backgroundColor: "#F4F6F9", padding: "88px 0", borderTop: "1px solid #DFE1E6", borderBottom: "1px solid #DFE1E6" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          className="why-grid"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Por qué CITEC</Eyebrow>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                marginBottom: "16px",
                lineHeight: 1.15,
              }}
            >
              La empresa de ingeniería con drones más confiable de Colombia
            </h2>
            <p style={{ fontSize: "15px", color: "#5E6C84", lineHeight: "1.7", marginBottom: "36px" }}>
              Combinamos experiencia técnica certificada, equipos de vanguardia y metodología rigurosa para entregar resultados verificables que transforman las operaciones de nuestros clientes.
            </p>

            {/* Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "18px 0",
                    borderBottom: i < points.length - 1 ? "1px solid #DFE1E6" : "none",
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
                    {p.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#172B4D", marginBottom: "3px" }}>{p.title}</h4>
                    <p style={{ fontSize: "13px", color: "#5E6C84", lineHeight: "1.6" }}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image + stat card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="why-image"
            style={{ position: "relative" }}
          >
            <div
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #DFE1E6",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1733683253670-932e9da832d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmUlMjBpbnNwZWN0aW9uJTIwYWVyaWFsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3ODU1MTE0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone en operación industrial"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Stat card overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                right: "24px",
                backgroundColor: "#FFFFFF",
                borderRadius: "8px",
                padding: "18px 22px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid #DFE1E6",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  backgroundColor: "#0052CC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TrendingUp size={22} color="white" />
              </div>
              <div>
                <p style={{ fontSize: "24px", fontWeight: 700, color: "#172B4D", fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>98%</p>
                <p style={{ fontSize: "12px", color: "#5E6C84", marginTop: "3px" }}>Satisfacción del cliente</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .why-image { display: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── INDUSTRIES ─────────────────────────────────────────────────────────────── */
function IndustriesSection() {
  const industries = [
    { name: "Gobierno y Sector Público", icon: <Building2 size={16} /> },
    { name: "Petróleo y Gas", icon: <Zap size={16} /> },
    { name: "Construcción e Infraestructura", icon: <Box size={16} /> },
    { name: "Agricultura y Agroindustria", icon: <Sprout size={16} /> },
    { name: "Minería", icon: <Wrench size={16} /> },
    { name: "Telecomunicaciones", icon: <Cpu size={16} /> },
    { name: "Energía y Utilities", icon: <TrendingUp size={16} /> },
    { name: "Seguridad Corporativa", icon: <Shield size={16} /> },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "80px 0", borderTop: "1px solid #DFE1E6" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "44px" }}
        >
          <Eyebrow>Sectores que Atendemos</Eyebrow>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#172B4D",
              maxWidth: "460px",
              lineHeight: 1.15,
            }}
          >
            Presencia en las industrias más exigentes
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 18px",
                borderRadius: "6px",
                border: "1px solid #DFE1E6",
                backgroundColor: "#FFFFFF",
                cursor: "default",
                transition: "all 0.15s ease",
              }}
              whileHover={{ borderColor: "#B3D4FF", backgroundColor: "#F4F8FF" }}
            >
              <span style={{ color: "#0052CC", flexShrink: 0 }}>{ind.icon}</span>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#344563" }}>{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS ────────────────────────────────────────────────────────────────── */
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Consultoría Inicial",
      desc: "Analizamos su necesidad, entorno operativo y objetivos para diseñar la solución más adecuada a su industria.",
    },
    {
      num: "02",
      title: "Diagnóstico Técnico",
      desc: "Evaluamos factibilidad técnica, normativa y económica. Presentamos propuesta con alcance, tiempos y entregables.",
    },
    {
      num: "03",
      title: "Implementación",
      desc: "Ejecutamos con equipos certificados, protocolos de seguridad y comunicación continua del progreso del proyecto.",
    },
    {
      num: "04",
      title: "Entrega y Soporte",
      desc: "Entregamos resultados verificables y ofrecemos soporte, capacitación y mantenimiento continuo post-proyecto.",
    },
  ];

  return (
    <section style={{ backgroundColor: "#F4F6F9", padding: "88px 0", borderTop: "1px solid #DFE1E6", borderBottom: "1px solid #DFE1E6" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: "52px" }}
        >
          <Eyebrow>Proceso de Trabajo</Eyebrow>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#172B4D",
              lineHeight: 1.15,
            }}
          >
            De la consulta al resultado, con metodología probada
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", border: "1px solid #DFE1E6", borderRadius: "8px", overflow: "hidden", backgroundColor: "#DFE1E6" }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                padding: "36px 32px",
                backgroundColor: "#FFFFFF",
                borderRight: i < steps.length - 1 ? "1px solid #DFE1E6" : "none",
                position: "relative",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#0052CC",
                  marginBottom: "20px",
                }}
              >
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif" }}>
                  {step.num}
                </span>
              </div>
              {/* Blue top accent on first item */}
              {i === 0 && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", backgroundColor: "#0052CC" }} />
              )}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#172B4D",
                  marginBottom: "10px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#5E6C84", lineHeight: "1.65" }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ──────────────────────────────────────────────────────────────── */
function ProjectsSection() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1709089241011-74381cce0b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lJTIwbGFuZHNjYXBlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3ODU1MTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      sector: "Construcción e Infraestructura",
      title: "Mapeo topográfico para proyecto vial — 42 km",
      desc: "Generación de ortomosaicos y modelos digitales de terreno para vía en construcción con precisión centimétrica.",
      client: "Consorcio Vial Norte",
      metric: "42 km mapeados",
    },
    {
      img: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmFybWluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4NTUxMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      sector: "Agricultura de Precisión",
      title: "Monitoreo multiespectral de cultivos con NDVI",
      desc: "Diagnóstico de zonas de estrés hídrico y enfermedades en 800 hectáreas de caña de azúcar.",
      client: "Grupo Agroindustrial del Cauca",
      metric: "800 ha monitoreadas",
    },
    {
      img: "https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHRlY2hub2xvZ3klMjBibHVlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc4NTUxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      sector: "Integración de IA",
      title: "Detección automatizada de anomalías en subestaciones",
      desc: "Sistema de IA embarcada para identificación de fallas térmicas en infraestructura eléctrica crítica.",
      client: "Empresa de Energía de Bogotá",
      metric: "Cobertura 24/7",
    },
  ];

  return (
    <section style={{ backgroundColor: "#FFFFFF", padding: "88px 0", borderTop: "1px solid #DFE1E6" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}
        >
          <div>
            <Eyebrow>Proyectos Destacados</Eyebrow>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3vw, 38px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                lineHeight: 1.15,
              }}
            >
              Resultados verificables en campo
            </h2>
          </div>
          <Link
            to="/servicios"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#0052CC",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Ver todos <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                borderRadius: "8px",
                border: "1px solid #DFE1E6",
                overflow: "hidden",
                backgroundColor: "#FFFFFF",
                transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                cursor: "pointer",
              }}
              whileHover={{ boxShadow: "0 8px 32px rgba(0,82,204,0.1)", borderColor: "#B3D4FF" }}
            >
              {/* Image */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    backgroundColor: "#0052CC",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#fff",
                    letterSpacing: "0.04em",
                  }}
                >
                  {project.sector}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#172B4D",
                    marginBottom: "8px",
                    lineHeight: "1.4",
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: "13px", color: "#5E6C84", lineHeight: "1.6", marginBottom: "16px" }}>{project.desc}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #F4F6F9" }}>
                  <span style={{ fontSize: "12px", color: "#8993A4", fontWeight: 500 }}>{project.client}</span>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "4px",
                      backgroundColor: "#EBF2FF",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#0052CC",
                    }}
                  >
                    {project.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ────────────────────────────────────────────────────────────── */
function CtaBannerSection() {
  return (
    <section style={{ backgroundColor: "#0052CC", padding: "0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "40px",
            alignItems: "center",
            padding: "64px 0",
          }}
          className="cta-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.6)", marginBottom: "12px" }}>
              Comience su proyecto hoy
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(24px, 3.5vw, 40px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
                lineHeight: 1.15,
                maxWidth: "580px",
              }}
            >
              Transforme sus operaciones con ingeniería avanzada con drones
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.7", marginTop: "14px", maxWidth: "500px" }}>
              Cotización sin costo. Respuesta en menos de 24 horas. Nuestros ingenieros analizarán su caso y diseñarán la solución más eficiente para su industria.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", flexShrink: 0 }}
            className="cta-buttons"
          >
            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "14px 28px",
                backgroundColor: "#FFFFFF",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#0052CC",
                textDecoration: "none",
                transition: "background-color 0.15s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#EBF2FF")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF")}
            >
              Solicitar Cotización Gratuita <ChevronRight size={15} />
            </Link>
            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                padding: "14px 28px",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "border-color 0.15s ease, background-color 0.15s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.6)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
              }}
            >
              Hablar con un Especialista
            </Link>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .cta-grid { grid-template-columns: 1fr !important; }
          .cta-buttons { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}

/* ─── HOME PAGE ─────────────────────────────────────────────────────────────── */
export function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyCitecSection />
      <IndustriesSection />
      <ProcessSection />
      <ProjectsSection />
      <CtaBannerSection />
    </>
  );
}
