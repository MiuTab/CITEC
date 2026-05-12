import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Camera, Wrench, Shield, Sprout, Cpu, Box,
  Check, ArrowRight, ChevronRight, Clock, MapPin,
} from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", color: "#0052CC", marginBottom: "12px" }}>
      {children}
    </p>
  );
}

const ALL_SERVICES = [
  {
    id: "fotografia",
    icon: <Camera size={24} />,
    title: "Fotografía y Video Aéreo",
    shortDesc: "Captura de alta resolución para industria, construcción y topografía.",
    longDesc: "Ofrecemos fotografía aérea y video con drones de alta resolución para aplicaciones profesionales. Desde fotogrametría y ortomosaicos hasta video 4K estabilizado para proyectos de construcción, marketing e inspección.",
    features: [
      "Ortomosaicos y mapas topográficos de alta precisión",
      "Modelos digitales de elevación (MDE) y terreno (MDT)",
      "Video 4K estabilizado para marketing y documentación",
      "Fotogrametría para volumetrías y cálculo de inventarios",
      "Procesamiento con software Pix4D y Agisoft",
      "Entrega en formatos GeoTIFF, LAS, DWG y otros",
    ],
    img: "https://images.unsplash.com/photo-1709089241011-74381cce0b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBwaG90b2dyYXBoeSUyMGRyb25lJTIwbGFuZHNjYXBlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3ODU1MTE0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["Construcción", "Minería", "Agroindustria", "Gobierno"],
    deliveryTime: "3–7 días hábiles",
    coverage: "Todo el territorio nacional",
  },
  {
    id: "inspeccion",
    icon: <Wrench size={24} />,
    title: "Inspección Industrial",
    shortDesc: "Inspección no invasiva de infraestructura crítica con reportes técnicos.",
    longDesc: "Realizamos inspecciones técnicas de infraestructura crítica con drones equipados con termografía, RGB, multiespectrales y LiDAR. Reducimos tiempos de parada operativa y eliminamos riesgos para el personal técnico.",
    features: [
      "Inspección termográfica de líneas eléctricas y transformadores",
      "Revisión de torres de transmisión y comunicaciones",
      "Inspección de ductos, tuberías y plantas industriales",
      "Detección de fugas con sensores especializados",
      "Diagnóstico estructural de puentes y edificaciones",
      "Reportes técnicos con evidencia visual y georreferenciada",
    ],
    img: "https://images.unsplash.com/photo-1733683253670-932e9da832d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZHJvbmUlMjBpbnNwZWN0aW9uJTIwYWVyaWFsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3ODU1MTE0MXww&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["Energía", "Oil & Gas", "Telecomunicaciones", "Construcción"],
    deliveryTime: "Reporte en 48h",
    coverage: "Nacional + zonas remotas",
  },
  {
    id: "seguridad",
    icon: <Shield size={24} />,
    title: "Seguridad y Vigilancia",
    shortDesc: "Monitoreo aéreo para perímetros, eventos y zonas de interés crítico.",
    longDesc: "Proveemos sistemas de seguridad basados en drones para vigilancia de perímetros, patrullaje de zonas críticas y apoyo en grandes eventos. Integramos soluciones con centros de control existentes.",
    features: [
      "Patrullaje autónomo de perímetros y zonas industriales",
      "Monitoreo en tiempo real de eventos masivos",
      "Integración con centros de control y CCTV",
      "Sistemas de alerta temprana y respuesta rápida",
      "Captura nocturna con sensores infrarrojos",
      "Protocolos certificados UAEAC para operaciones urbanas",
    ],
    img: "https://images.unsplash.com/photo-1775739713576-cb898ecbd837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHN1cnZlaWxsYW5jZSUyMGluZnJhc3RydWN0dXJlJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3Nzg1NTExNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["Gobierno", "Seguridad Privada", "Puertos", "Eventos"],
    deliveryTime: "Despliegue en 24–48h",
    coverage: "Urbano y periurbano",
  },
  {
    id: "agricultura",
    icon: <Sprout size={24} />,
    title: "Agricultura de Precisión",
    shortDesc: "Tecnología avanzada para optimizar cultivos y reducir costos agrícolas.",
    longDesc: "Utilizamos drones multiespectrales para análisis de cultivos, fumigación de precisión y diagnóstico de enfermedades. Maximizamos el rendimiento agrícola con datos precisos y accionables.",
    features: [
      "Análisis NDVI, NDRE y otros índices de vegetación",
      "Mapas de prescripción variable para fertilización",
      "Fumigación de precisión con drones agrícolas",
      "Diagnóstico temprano de plagas y enfermedades",
      "Monitoreo de humedad y estrés hídrico",
      "Informes técnicos con recomendaciones agronómicas",
    ],
    img: "https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGRyb25lJTIwZmFybWluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc4NTUxMTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["Agroindustria", "Cultivos extensivos", "Ganadería", "Silvicultura"],
    deliveryTime: "Reporte en 72h",
    coverage: "Llanuras y zonas cafeteras",
  },
  {
    id: "ia",
    icon: <Cpu size={24} />,
    title: "Integración de Inteligencia Artificial",
    shortDesc: "IA embarcada y en la nube para análisis automatizado de datos aéreos.",
    longDesc: "Desarrollamos e integramos soluciones de IA sobre drones para visión por computadora, detección de objetos, clasificación de terrenos y análisis automatizado de datos en tiempo real.",
    features: [
      "Visión por computadora embarcada en tiempo real",
      "Detección y clasificación automatizada de objetos",
      "Análisis de anomalías térmicas con IA",
      "Integración con plataformas Cloud y Big Data",
      "Desarrollo de modelos ML específicos por industria",
      "APIs y dashboards para visualización de resultados",
    ],
    img: "https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGF0YSUyMHRlY2hub2xvZ3klMjBibHVlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc4NTUxMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["Industria 4.0", "Minería", "Energía", "Telecomunicaciones"],
    deliveryTime: "Desarrollo a medida",
    coverage: "Proyectos en todo el país",
  },
  {
    id: "fabricacion",
    icon: <Box size={24} />,
    title: "Fabricación e Impresión 3D",
    shortDesc: "Diseño y fabricación de drones, rovers y estructuras personalizadas.",
    longDesc: "Diseñamos y fabricamos plataformas aéreas y terrestres personalizadas para aplicaciones que los drones comerciales no cubren. Usamos impresión 3D industrial y materiales de alto rendimiento.",
    features: [
      "Diseño y fabricación de drones a medida",
      "Impresión 3D industrial con materiales de alto rendimiento",
      "Desarrollo de rovers y robots terrestres autónomos",
      "Diseño 3D de piezas, estructuras y prototipos",
      "Mantenimiento preventivo y correctivo de plataformas",
      "Capacitación técnica para operadores internos",
    ],
    img: "https://images.unsplash.com/photo-1772566022500-353de883e9e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHByaW50aW5nJTIwaW5kdXN0cmlhbCUyMG1hbnVmYWN0dXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3ODU1MTE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    industries: ["I+D", "Defensa", "Minería", "Sector especial"],
    deliveryTime: "Según especificaciones",
    coverage: "Fabricación en Bogotá",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);
  const service = ALL_SERVICES[activeService];

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Page header */}
      <section style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6", padding: "64px 24px 56px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Eyebrow>Portafolio Completo</Eyebrow>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(28px, 4.5vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "#172B4D",
                marginBottom: "16px",
                lineHeight: 1.1,
                maxWidth: "640px",
              }}
            >
              Soluciones con drones para cada industria
            </h1>
            <p style={{ fontSize: "16px", color: "#5E6C84", lineHeight: "1.7", maxWidth: "540px", marginBottom: "28px" }}>
              Un portafolio integral desde captura aérea hasta integración de IA y fabricación de plataformas a medida. Certificados UAEAC.
            </p>
            <Link
              to="/contacto"
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
              Solicitar Cotización <ChevronRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service selector + detail */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "40px", alignItems: "flex-start" }} className="service-layout">

          {/* Left sidebar — service list */}
          <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", overflow: "hidden", position: "sticky", top: "100px" }} className="service-sidebar">
            {ALL_SERVICES.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveService(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "16px 20px",
                  border: "none",
                  borderBottom: i < ALL_SERVICES.length - 1 ? "1px solid #DFE1E6" : "none",
                  backgroundColor: activeService === i ? "#EBF2FF" : "#FFFFFF",
                  cursor: "pointer",
                  textAlign: "left" as const,
                  transition: "background-color 0.15s ease",
                  borderLeft: activeService === i ? "3px solid #0052CC" : "3px solid transparent",
                }}
                onMouseEnter={(e) => { if (activeService !== i) (e.currentTarget as HTMLElement).style.backgroundColor = "#F4F6F9"; }}
                onMouseLeave={(e) => { if (activeService !== i) (e.currentTarget as HTMLElement).style.backgroundColor = "#FFFFFF"; }}
              >
                <span style={{ color: activeService === i ? "#0052CC" : "#8993A4", flexShrink: 0 }}>{s.icon}</span>
                <span style={{ fontSize: "13px", fontWeight: activeService === i ? 600 : 500, color: activeService === i ? "#0052CC" : "#344563", lineHeight: "1.3" }}>
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right — service detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image */}
            <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #DFE1E6", marginBottom: "36px" }}>
              <img
                src={service.img}
                alt={service.title}
                style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Meta badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 12px", borderRadius: "4px", backgroundColor: "#EBF2FF", border: "1px solid #B3D4FF" }}>
                <Clock size={12} style={{ color: "#0052CC" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#0052CC" }}>{service.deliveryTime}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 12px", borderRadius: "4px", backgroundColor: "#EBF2FF", border: "1px solid #B3D4FF" }}>
                <MapPin size={12} style={{ color: "#0052CC" }} />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#0052CC" }}>{service.coverage}</span>
              </div>
              {service.industries.map((ind) => (
                <span key={ind} style={{ padding: "5px 12px", borderRadius: "4px", backgroundColor: "#F4F6F9", border: "1px solid #DFE1E6", fontSize: "12px", fontWeight: 500, color: "#344563" }}>
                  {ind}
                </span>
              ))}
            </div>

            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#172B4D",
                marginBottom: "14px",
                lineHeight: 1.2,
              }}
            >
              {service.title}
            </h2>
            <p style={{ fontSize: "15px", color: "#5E6C84", lineHeight: "1.7", marginBottom: "28px" }}>
              {service.longDesc}
            </p>

            {/* Features */}
            <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", overflow: "hidden", marginBottom: "32px" }}>
              <div style={{ padding: "14px 20px", backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#5E6C84", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Alcance del servicio
                </p>
              </div>
              <div style={{ padding: "8px 0" }}>
                {service.features.map((feat, i) => (
                  <div
                    key={feat}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                      padding: "12px 20px",
                      borderBottom: i < service.features.length - 1 ? "1px solid #F4F6F9" : "none",
                    }}
                  >
                    <Check size={15} style={{ color: "#0052CC", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ fontSize: "14px", color: "#344563" }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "13px 28px",
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
              Consultar disponibilidad <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All services compact overview */}
      <section style={{ backgroundColor: "#F4F6F9", borderTop: "1px solid #DFE1E6", padding: "72px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "40px" }}>
            <h2
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#172B4D" }}
            >
              Resumen de capacidades
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
            {ALL_SERVICES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => {
                  setActiveService(i);
                  window.scrollTo({ top: 300, behavior: "smooth" });
                }}
                style={{
                  padding: "22px",
                  borderRadius: "6px",
                  border: `1px solid ${activeService === i ? "#B3D4FF" : "#DFE1E6"}`,
                  backgroundColor: activeService === i ? "#EBF2FF" : "#FFFFFF",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "6px",
                    backgroundColor: activeService === i ? "#0052CC" : "#EBF2FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: activeService === i ? "#FFFFFF" : "#0052CC",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#172B4D", marginBottom: "4px" }}>{s.title}</h4>
                  <p style={{ fontSize: "12px", color: "#5E6C84", lineHeight: "1.5" }}>{s.shortDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#0052CC", padding: "64px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#FFFFFF", marginBottom: "12px" }}>
            ¿No encuentra lo que necesita?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", lineHeight: "1.7", marginBottom: "28px" }}>
            Desarrollamos soluciones a medida. Cuéntenos su proyecto y nuestros ingenieros diseñarán la solución ideal para su industria.
          </p>
          <Link
            to="/contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              backgroundColor: "#FFFFFF",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 600,
              color: "#0052CC",
              textDecoration: "none",
            }}
          >
            Consultar proyecto especial <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .service-layout { grid-template-columns: 1fr !important; }
          .service-sidebar { position: static !important; }
        }
      `}</style>
    </div>
  );
}
