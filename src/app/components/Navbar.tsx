import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/servicios" },
  { label: "Blog", path: "/blog" },
  { label: "Contacto", path: "/contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar — contact strip */}
      <div
        style={{
          backgroundColor: "#0052CC",
          padding: "7px 24px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            <Phone size={12} />
            +57 (601) 000-0000
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>|</span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
            Certificados UAEAC — Operadores Calificados
          </span>
        </div>
      </div>

      {/* Main nav */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "#FFFFFF",
          borderBottom: scrolled ? "1px solid #DFE1E6" : "1px solid #DFE1E6",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
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
            <div>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#172B4D",
                  letterSpacing: "-0.02em",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                CITEC
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#6B7A99",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Ingeniería con Drones
              </span>
            </div>
          </Link>

          {/* Desktop Nav links */}
          <nav
            className="hidden-mobile"
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{
                    textDecoration: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: active ? "#0052CC" : "#344563",
                    backgroundColor: active ? "#EBF2FF" : "transparent",
                    transition: "all 0.15s ease",
                    letterSpacing: "-0.01em",
                    borderBottom: active ? "2px solid #0052CC" : "2px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = "#0052CC";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#F4F6F9";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.color = "#344563";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Link
              to="/contacto"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 20px",
                backgroundColor: "#0052CC",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                transition: "background-color 0.15s ease",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0747A6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#0052CC")}
            >
              Solicitar Cotización
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "1px solid #DFE1E6",
              borderRadius: "6px",
              padding: "8px",
              color: "#344563",
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed",
              top: "107px",
              left: 0,
              right: 0,
              zIndex: 999,
              backgroundColor: "#FFFFFF",
              borderBottom: "1px solid #DFE1E6",
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              padding: "8px 24px 20px",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: "block",
                  padding: "13px 0",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: location.pathname === link.path ? "#0052CC" : "#344563",
                  textDecoration: "none",
                  borderBottom: "1px solid #F4F6F9",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginTop: "14px",
                padding: "13px",
                backgroundColor: "#0052CC",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
              }}
            >
              Solicitar Cotización <ChevronRight size={14} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
