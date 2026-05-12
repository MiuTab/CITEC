import { motion } from "motion/react";
import { Link } from "react-router";
import { Shield, ChevronRight, Mail, Phone, FileText } from "lucide-react";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "12px",
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.12em",
        color: "#0052CC",
        marginBottom: "12px",
      }}
    >
      {children}
    </p>
  );
}

const SECTIONS = [
  {
    id: "responsable",
    title: "1. Responsable del Tratamiento",
    content: (
      <>
        <p>
          <strong>CITEC — Centro de Ingeniería Tecnológica Especializada</strong> (en adelante "CITEC", "nosotros" o "la empresa"), con domicilio en Bogotá D.C., Colombia, es el responsable del tratamiento de los datos personales recolectados a través del sitio web <strong>citecd.com</strong> y de sus canales de comunicación.
        </p>
        <p>Para consultas relacionadas con el tratamiento de datos personales, puede contactarnos en:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> privacidad@citecd.com</li>
          <li><strong>Teléfono:</strong> +57 (601) 000-0000</li>
          <li><strong>Dirección:</strong> Bogotá D.C., Colombia</li>
        </ul>
      </>
    ),
  },
  {
    id: "fundamento",
    title: "2. Fundamento Legal",
    content: (
      <>
        <p>
          Esta política se rige por la <strong>Ley 1581 de 2012</strong> (Ley de Protección de Datos Personales de Colombia), el <strong>Decreto 1377 de 2013</strong> y demás normas complementarias expedidas por la Superintendencia de Industria y Comercio (SIC), entidad que actúa como autoridad de protección de datos personales en Colombia.
        </p>
        <p>
          El tratamiento de sus datos personales se realiza únicamente con su consentimiento previo, expreso e informado, o bajo alguna de las causales legales establecidas en la Ley 1581 de 2012.
        </p>
      </>
    ),
  },
  {
    id: "datos-recolectados",
    title: "3. Datos Personales que Recolectamos",
    content: (
      <>
        <p>De acuerdo con las interacciones que usted establezca con CITEC, podemos recolectar los siguientes datos:</p>
        <table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Datos recolectados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Datos de contacto</strong></td>
              <td>Nombre completo, correo electrónico, número de teléfono, cargo y empresa</td>
            </tr>
            <tr>
              <td><strong>Datos de navegación</strong></td>
              <td>Dirección IP, tipo de navegador, páginas visitadas, tiempo de sesión (anonimizados)</td>
            </tr>
            <tr>
              <td><strong>Datos del proyecto</strong></td>
              <td>Descripción del servicio requerido, sector de la empresa, zona de operación</td>
            </tr>
            <tr>
              <td><strong>Datos comerciales</strong></td>
              <td>Historial de cotizaciones, comunicaciones y contratos suscritos</td>
            </tr>
          </tbody>
        </table>
        <p>
          CITEC <strong>no recolecta</strong> datos sensibles (datos de salud, filiación política, origen étnico, orientación sexual, creencias religiosas) a través de este sitio web.
        </p>
      </>
    ),
  },
  {
    id: "finalidades",
    title: "4. Finalidades del Tratamiento",
    content: (
      <>
        <p>Los datos personales recolectados son utilizados para las siguientes finalidades:</p>
        <ul>
          <li>Responder solicitudes de cotización, consultas e información sobre nuestros servicios.</li>
          <li>Elaborar y enviar propuestas técnicas y comerciales personalizadas.</li>
          <li>Gestionar la relación contractual y la prestación de los servicios contratados.</li>
          <li>Enviar comunicaciones relacionadas con actualizaciones de servicios, normativa RPAS en Colombia y contenido técnico relevante (previa autorización).</li>
          <li>Cumplir con obligaciones legales, contables y tributarias.</li>
          <li>Mejorar la experiencia de usuario y el funcionamiento del sitio web mediante análisis estadísticos anónimos.</li>
          <li>Atender requerimientos de autoridades competentes cuando así lo exija la ley.</li>
        </ul>
      </>
    ),
  },
  {
    id: "derechos",
    title: "5. Derechos del Titular",
    content: (
      <>
        <p>
          Conforme a la Ley 1581 de 2012, usted como titular de los datos personales tiene los siguientes derechos, los cuales puede ejercer de forma gratuita:
        </p>
        <ul>
          <li><strong>Conocer:</strong> Saber qué datos personales suyos están siendo tratados por CITEC.</li>
          <li><strong>Actualizar y rectificar:</strong> Solicitar la corrección de datos inexactos, incompletos o desactualizados.</li>
          <li><strong>Suprimir:</strong> Solicitar la eliminación de sus datos cuando no sea necesario mantenerlos conforme a las finalidades declaradas o la ley.</li>
          <li><strong>Revocar la autorización:</strong> Retirar el consentimiento otorgado para el tratamiento, cuando no exista una obligación legal o contractual que lo impida.</li>
          <li><strong>Acceder:</strong> Obtener información sobre el uso dado a sus datos personales.</li>
          <li><strong>Presentar quejas:</strong> Radicar reclamos ante CITEC o ante la Superintendencia de Industria y Comercio (SIC).</li>
        </ul>
        <p>
          Para ejercer estos derechos, envíe una comunicación escrita a <strong>privacidad@citecd.com</strong> indicando su nombre, documento de identidad, la solicitud concreta y los datos de contacto para respuesta. Atenderemos su solicitud en los términos establecidos por la ley.
        </p>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "6. Transferencia y Transmisión de Datos",
    content: (
      <>
        <p>
          CITEC no vende, alquila ni comercializa sus datos personales a terceros. Los datos únicamente podrán ser compartidos en los siguientes casos:
        </p>
        <ul>
          <li>Con proveedores y aliados tecnológicos que actúan como encargados del tratamiento (p.ej., plataformas de correo, hosting, CRM), bajo contratos que garantizan la misma protección que esta política.</li>
          <li>Con entidades del Estado o autoridades competentes cuando exista requerimiento legal o judicial.</li>
          <li>Con aliados de negocios para la ejecución conjunta de proyectos, únicamente con su autorización previa.</li>
        </ul>
        <p>
          En caso de transferencia internacional de datos, CITEC garantizará que el país destinatario cuente con niveles adecuados de protección o implementará las salvaguardas contractuales necesarias conforme a la normativa colombiana.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "7. Seguridad de los Datos",
    content: (
      <>
        <p>
          CITEC implementa medidas técnicas, administrativas y físicas razonables para proteger sus datos personales contra acceso no autorizado, pérdida, alteración, divulgación o destrucción, entre las que se incluyen:
        </p>
        <ul>
          <li>Cifrado de datos en tránsito mediante protocolo HTTPS (TLS).</li>
          <li>Acceso restringido a los datos únicamente al personal autorizado bajo acuerdos de confidencialidad.</li>
          <li>Revisiones periódicas de seguridad de sistemas y aplicaciones.</li>
          <li>Procedimientos de respuesta ante incidentes de seguridad.</li>
        </ul>
      </>
    ),
  },
  {
    id: "conservacion",
    title: "8. Tiempo de Conservación",
    content: (
      <>
        <p>
          Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recolectados, y en todo caso:
        </p>
        <ul>
          <li>Datos de cotizaciones no concretadas: máximo <strong>2 años</strong> desde la última interacción.</li>
          <li>Datos de contratos y relaciones comerciales: durante la vigencia del contrato y por el período de prescripción de las obligaciones legales (hasta <strong>5 años</strong> adicionales).</li>
          <li>Datos de comunicaciones de marketing: hasta que revoque su autorización.</li>
        </ul>
        <p>
          Transcurridos estos plazos, los datos serán eliminados o anonimizados de forma segura.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookies y Tecnologías de Seguimiento",
    content: (
      <>
        <p>
          Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación y realizar análisis estadísticos anónimos del uso del sitio. Las cookies empleadas son:
        </p>
        <ul>
          <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.</li>
          <li><strong>Cookies analíticas:</strong> Recopilan información anónima sobre cómo los visitantes usan el sitio (p.ej., páginas visitadas, tiempo de sesión).</li>
          <li><strong>Cookies de preferencias:</strong> Recuerdan sus configuraciones y preferencias de navegación.</li>
        </ul>
        <p>
          Puede gestionar o deshabilitar las cookies desde la configuración de su navegador. La desactivación de cookies esenciales puede afectar el funcionamiento del sitio.
        </p>
      </>
    ),
  },
  {
    id: "menores",
    title: "10. Menores de Edad",
    content: (
      <>
        <p>
          Los servicios de CITEC están dirigidos exclusivamente a personas mayores de 18 años y a entidades jurídicas. No recolectamos de manera intencional datos personales de menores de edad. Si usted es padre, madre o tutor y cree que su hijo ha proporcionado datos personales a CITEC, por favor contáctenos para proceder a su eliminación.
        </p>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "11. Modificaciones a esta Política",
    content: (
      <>
        <p>
          CITEC se reserva el derecho de actualizar esta Política de Privacidad en cualquier momento. Cuando se realicen cambios sustanciales, notificaremos a los titulares a través del sitio web o por correo electrónico con al menos <strong>15 días de anticipación</strong> a la entrada en vigencia de los cambios.
        </p>
        <p>
          Le recomendamos revisar periódicamente esta política. El uso continuado del sitio web después de la publicación de cambios implica la aceptación de los mismos.
        </p>
        <p><strong>Fecha de última actualización:</strong> Mayo de 2025.</p>
      </>
    ),
  },
];

export function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>

      {/* Page Header */}
      <section style={{ backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6", padding: "64px 24px 52px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Eyebrow>Documentos Legales</Eyebrow>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#EBF2FF",
                  border: "1px solid #B3D4FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              >
                <Shield size={22} style={{ color: "#0052CC" }} />
              </div>
              <div>
                <h1
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(26px, 4vw, 44px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    color: "#172B4D",
                    marginBottom: "12px",
                    lineHeight: 1.1,
                  }}
                >
                  Política de Privacidad
                </h1>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {[
                    { label: "Vigente desde", value: "Mayo 2025" },
                    { label: "Rige bajo", value: "Ley 1581 de 2012 — Colombia" },
                    { label: "Responsable", value: "CITEC — citecd.com" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "4px",
                        border: "1px solid #DFE1E6",
                        backgroundColor: "#FFFFFF",
                        display: "flex",
                        gap: "6px",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontSize: "11px", color: "#8993A4", fontWeight: 600 }}>{item.label}:</span>
                      <span style={{ fontSize: "11px", color: "#344563", fontWeight: 600 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "48px", alignItems: "flex-start" }} className="legal-layout">

          {/* Sidebar — Table of contents */}
          <div style={{ position: "sticky", top: "100px" }} className="legal-toc">
            <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "14px 18px", backgroundColor: "#F4F6F9", borderBottom: "1px solid #DFE1E6" }}>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#5E6C84", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Tabla de contenido
                </p>
              </div>
              <nav>
                {SECTIONS.map((sec, i) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    style={{
                      display: "block",
                      padding: "10px 18px",
                      fontSize: "13px",
                      color: "#344563",
                      textDecoration: "none",
                      borderBottom: i < SECTIONS.length - 1 ? "1px solid #F4F6F9" : "none",
                      transition: "all 0.15s ease",
                      borderLeft: "3px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#0052CC";
                      (e.currentTarget as HTMLElement).style.borderLeftColor = "#0052CC";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#F4F8FF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#344563";
                      (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact card */}
            <div style={{ border: "1px solid #B3D4FF", borderRadius: "8px", backgroundColor: "#EBF2FF", padding: "18px", marginTop: "16px" }}>
              <p style={{ fontSize: "12px", fontWeight: 700, color: "#0052CC", marginBottom: "10px" }}>¿Tiene preguntas?</p>
              <p style={{ fontSize: "12px", color: "#344563", lineHeight: "1.6", marginBottom: "12px" }}>
                Para ejercer sus derechos o resolver dudas sobre el tratamiento de sus datos:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="mailto:privacidad@citecd.com" style={{ display: "flex", gap: "7px", alignItems: "center", fontSize: "12px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}>
                  <Mail size={13} /> privacidad@citecd.com
                </a>
                <a href="tel:+576010000000" style={{ display: "flex", gap: "7px", alignItems: "center", fontSize: "12px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}>
                  <Phone size={13} /> +57 (601) 000-0000
                </a>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div>
            {/* Intro box */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: "20px 24px",
                borderRadius: "8px",
                border: "1px solid #B3D4FF",
                backgroundColor: "#EBF2FF",
                marginBottom: "40px",
              }}
            >
              <p style={{ fontSize: "14px", color: "#172B4D", lineHeight: "1.7" }}>
                En <strong>CITEC</strong> respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política describe qué información recolectamos, con qué finalidades la usamos y qué derechos tiene usted como titular, de conformidad con la legislación colombiana vigente. Le recomendamos leerla detenidamente antes de facilitar sus datos.
              </p>
            </motion.div>

            {/* Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {SECTIONS.map((sec, i) => (
                <motion.div
                  key={sec.id}
                  id={sec.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  style={{
                    padding: "36px 0",
                    borderBottom: i < SECTIONS.length - 1 ? "1px solid #DFE1E6" : "none",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#172B4D",
                      marginBottom: "16px",
                      letterSpacing: "-0.01em",
                      paddingTop: "4px",
                    }}
                  >
                    {sec.title}
                  </h2>
                  <div className="legal-prose" style={contentStyles}>{sec.content}</div>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <div
              style={{
                marginTop: "48px",
                padding: "20px 24px",
                borderRadius: "8px",
                border: "1px solid #DFE1E6",
                backgroundColor: "#F4F6F9",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}
            >
              <FileText size={18} style={{ color: "#0052CC", flexShrink: 0, marginTop: "1px" }} />
              <div>
                <p style={{ fontSize: "13px", color: "#172B4D", fontWeight: 600, marginBottom: "4px" }}>
                  Documentos relacionados
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    to="/terminos-de-uso"
                    style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}
                  >
                    Términos de Uso <ChevronRight size={13} />
                  </Link>
                  <Link
                    to="/contacto"
                    style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}
                  >
                    Formulario de contacto <ChevronRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .legal-layout { grid-template-columns: 1fr !important; }
          .legal-toc { position: static !important; }
        }
      `}</style>
    </div>
  );
}

const contentStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

// Inject global prose styles via a style tag approach via inline component styles
// Tables and lists are handled via inline styles cascading from contentStyles