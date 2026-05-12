import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#172B4D", color: "#FFFFFF" }}>
      {/* Main footer content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 24px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "52px",
          }}
        >
          {/* Brand column */}
          <div style={{ maxWidth: "280px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "#0052CC",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 7v5c0 5.25 3.4 10.15 8 11.5C17.6 22.15 21 17.25 21 12V7L12 2z" fill="white"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                CITEC
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7", marginBottom: "24px" }}>
              Centro de Ingeniería Tecnológica Especializada. Soluciones con drones para empresas y gobierno en Colombia.
            </p>
            {/* Certifications */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              {["UAEAC", "ISO 9001", "AUVSI"].map((cert) => (
                <span
                  key={cert}
                  style={{
                    padding: "3px 10px",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {cert}
                </span>
              ))}
            </div>
            {/* Social */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <Linkedin size={15} />, href: "#" },
                { icon: <Instagram size={15} />, href: "#" },
                { icon: <Twitter size={15} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "18px" }}>
              Servicios
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {["Fotografía Aérea", "Inspección Industrial", "Seguridad y Vigilancia", "Agricultura de Precisión", "Integración de IA", "Fabricación de Drones"].map((item) => (
                <li key={item}>
                  <Link
                    to="/servicios"
                    style={{
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "18px" }}>
              Empresa
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Inicio", path: "/" },
                { label: "Servicios", path: "/servicios" },
                { label: "Blog", path: "/blog" },
                { label: "Contacto", path: "/contacto" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "18px" }}>
              Contacto
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: <MapPin size={14} />, text: "Bogotá D.C., Colombia" },
                { icon: <Phone size={14} />, text: "+57 (601) 000-0000" },
                { icon: <Mail size={14} />, text: "info@citecd.com" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "24px",
                padding: "10px 18px",
                backgroundColor: "#0052CC",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0747A6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0052CC")}
            >
              Solicitar Cotización <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} CITEC — Centro de Ingeniería Tecnológica. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "Política de Privacidad", path: "/politica-de-privacidad" },
              { label: "Términos de Uso", path: "/terminos-de-uso" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}