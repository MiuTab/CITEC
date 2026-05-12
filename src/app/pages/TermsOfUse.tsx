import { motion } from "motion/react";
import { Link } from "react-router";
import { FileText, ChevronRight, Mail, Phone, AlertCircle } from "lucide-react";

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
    id: "objeto",
    title: "1. Objeto y Aceptación",
    content: (
      <>
        <p>
          Los presentes Términos de Uso regulan el acceso y la utilización del sitio web <strong>citecd.com</strong> (en adelante "el Sitio"), propiedad de <strong>CITEC — Centro de Ingeniería Tecnológica Especializada</strong> (en adelante "CITEC"), con domicilio en Bogotá D.C., Colombia.
        </p>
        <p>
          Al acceder y navegar por el Sitio, usted acepta íntegramente y sin reservas los presentes Términos de Uso. Si no está de acuerdo con alguno de ellos, le solicitamos que se abstenga de usar el Sitio. CITEC se reserva el derecho de modificar estos términos en cualquier momento, siendo responsabilidad del usuario consultarlos periódicamente.
        </p>
        <p>
          Estos términos se aplican exclusivamente al sitio web informativo y al formulario de contacto. Los contratos de prestación de servicios profesionales se rigen por sus propios acuerdos contractuales suscritos entre las partes.
        </p>
      </>
    ),
  },
  {
    id: "servicios-sitio",
    title: "2. Servicios del Sitio Web",
    content: (
      <>
        <p>A través del Sitio, CITEC ofrece los siguientes servicios de carácter informativo y de contacto:</p>
        <ul>
          <li>Información sobre los servicios de ingeniería con drones ofrecidos por CITEC.</li>
          <li>Formulario de contacto y solicitud de cotización.</li>
          <li>Blog técnico con artículos y publicaciones del sector.</li>
          <li>Información corporativa, certificaciones y alcances operacionales.</li>
        </ul>
        <p>
          El acceso al Sitio es gratuito y no requiere registro previo. La solicitud de cotización o consulta a través del formulario no implica la celebración de ningún contrato ni genera obligaciones contractuales para ninguna de las partes hasta la firma de un acuerdo formal por escrito.
        </p>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "3. Propiedad Intelectual",
    content: (
      <>
        <p>
          Todos los contenidos del Sitio — incluyendo, sin limitarse a, textos, imágenes, fotografías, videos, gráficos, logotipos, iconos, diseño de interfaz, código fuente y arquitectura de información — son propiedad exclusiva de CITEC o de sus proveedores de contenido, y están protegidos por las leyes colombianas e internacionales de derechos de autor, marcas registradas y propiedad intelectual.
        </p>
        <p>Se prohíbe expresamente, sin autorización escrita previa de CITEC:</p>
        <ul>
          <li>Reproducir, copiar, distribuir, comunicar públicamente o transformar los contenidos del Sitio con fines comerciales.</li>
          <li>Extraer o reutilizar partes sustanciales del contenido mediante scrapers, bots u otras herramientas automatizadas.</li>
          <li>Utilizar el nombre, logotipo o identidad visual de CITEC sin autorización expresa.</li>
          <li>Registrar como marca propia signos distintivos idénticos o similares a los de CITEC.</li>
        </ul>
        <p>
          Se permite la reproducción para uso personal, educativo o de referencia no comercial, citando expresamente a CITEC como fuente y sin modificar el contenido original.
        </p>
      </>
    ),
  },
  {
    id: "uso-aceptable",
    title: "4. Uso Aceptable del Sitio",
    content: (
      <>
        <p>El usuario se compromete a utilizar el Sitio de forma lícita y conforme a los presentes términos. Queda expresamente prohibido:</p>
        <ul>
          <li>Usar el Sitio con fines ilegales, fraudulentos o que lesionen derechos de terceros.</li>
          <li>Transmitir, cargar o difundir contenidos que sean falsos, difamatorios, obscenos, violentos o que vulneren derechos de propiedad intelectual.</li>
          <li>Introducir virus, malware, spyware u otros programas dañinos que puedan interrumpir, dañar o afectar el funcionamiento del Sitio.</li>
          <li>Intentar acceder de manera no autorizada a sistemas o redes conectadas al Sitio.</li>
          <li>Realizar ataques de denegación de servicio (DDoS) o cualquier otra acción que comprometa la disponibilidad del Sitio.</li>
          <li>Recopilar datos personales de otros usuarios sin su consentimiento.</li>
          <li>Suplantar la identidad de CITEC, sus colaboradores o cualquier otra persona.</li>
        </ul>
        <p>
          El incumplimiento de estas disposiciones puede dar lugar a la adopción de medidas legales por parte de CITEC, incluyendo la denuncia ante las autoridades competentes.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidad",
    title: "5. Limitación de Responsabilidad",
    content: (
      <>
        <p>
          CITEC no garantiza la disponibilidad ininterrumpida del Sitio, ni la ausencia total de errores o inexactitudes en su contenido. El Sitio se proporciona "tal como está" y CITEC no asume responsabilidad por:
        </p>
        <ul>
          <li>Interrupciones, errores técnicos o fallos de conectividad en el acceso al Sitio.</li>
          <li>Daños o perjuicios derivados del uso del Sitio o de la imposibilidad de acceder a él.</li>
          <li>La exactitud, integridad o actualidad de la información publicada, la cual tiene carácter meramente informativo.</li>
          <li>Contenidos de terceros a los que se acceda mediante enlaces externos presentes en el Sitio.</li>
          <li>Actuaciones de terceros que puedan afectar la seguridad del Sitio o de sus usuarios.</li>
        </ul>
        <p>
          En ningún caso la responsabilidad total de CITEC derivada del uso del Sitio superará el importe de cero pesos colombianos (COP $0), dado que el acceso al Sitio es gratuito y de carácter informativo.
        </p>
      </>
    ),
  },
  {
    id: "enlaces",
    title: "6. Enlaces a Sitios de Terceros",
    content: (
      <>
        <p>
          El Sitio puede contener enlaces o hipervínculos a sitios web de terceros con fines informativos. CITEC no tiene control sobre esos sitios ni sobre sus contenidos, y no asume ninguna responsabilidad respecto a su disponibilidad, contenido, exactitud o prácticas de privacidad.
        </p>
        <p>
          La inclusión de un enlace externo no implica ninguna aprobación, respaldo o relación comercial entre CITEC y el sitio de destino. El acceso a sitios de terceros se realiza bajo la exclusiva responsabilidad del usuario.
        </p>
      </>
    ),
  },
  {
    id: "formulario",
    title: "7. Formulario de Contacto y Cotizaciones",
    content: (
      <>
        <p>
          Al utilizar el formulario de contacto del Sitio, el usuario declara que la información proporcionada es veraz, actualizada y completa, y que actúa en nombre propio o con autorización de la empresa u organización que representa.
        </p>
        <p>
          La recepción de una solicitud de cotización no implica aceptación ni compromiso de CITEC. Las propuestas técnicas y comerciales son válidas únicamente cuando sean emitidas por escrito y firmadas por un representante autorizado de CITEC.
        </p>
        <p>
          CITEC se reserva el derecho de no responder solicitudes que resulten inapropiadas, incompletas, fuera del ámbito de los servicios ofrecidos, o que presenten indicios de mala fe.
        </p>
      </>
    ),
  },
  {
    id: "contenido-usuario",
    title: "8. Contenido Enviado por el Usuario",
    content: (
      <>
        <p>
          Al enviar información, mensajes o archivos a través del Sitio, el usuario otorga a CITEC una licencia no exclusiva, libre de regalías, para utilizar dicho contenido con la finalidad de responder la solicitud y gestionar la relación comercial correspondiente.
        </p>
        <p>
          El usuario garantiza que el contenido enviado no vulnera derechos de terceros, no es confidencial y no está sujeto a restricciones legales que impidan su uso por parte de CITEC para los fines indicados.
        </p>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "9. Modificaciones del Sitio y los Términos",
    content: (
      <>
        <p>
          CITEC se reserva el derecho de modificar, suspender o descontinuar, de forma temporal o permanente, cualquier aspecto del Sitio sin previo aviso, incluyendo la disponibilidad de características, contenido y servicios informativos.
        </p>
        <p>
          Los presentes Términos de Uso podrán ser actualizados en cualquier momento. La versión vigente será siempre la publicada en el Sitio. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de los términos actualizados.
        </p>
        <p><strong>Fecha de última actualización:</strong> Mayo de 2025.</p>
      </>
    ),
  },
  {
    id: "ley-aplicable",
    title: "10. Ley Aplicable y Jurisdicción",
    content: (
      <>
        <p>
          Los presentes Términos de Uso se rigen por las leyes de la <strong>República de Colombia</strong>. Para la resolución de cualquier controversia o conflicto derivado del uso del Sitio, las partes se someten a la jurisdicción de los Juzgados y Tribunales competentes de la ciudad de <strong>Bogotá D.C.</strong>, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
        </p>
        <p>
          Las partes intentarán, en primera instancia, resolver cualquier discrepancia de forma amistosa, directa y mediante comunicación escrita dirigida a <strong>legal@citecd.com</strong>.
        </p>
      </>
    ),
  },
  {
    id: "contacto",
    title: "11. Contacto Legal",
    content: (
      <>
        <p>Para cualquier consulta relacionada con los presentes Términos de Uso, puede contactar a CITEC a través de:</p>
        <ul>
          <li><strong>Correo electrónico:</strong> legal@citecd.com</li>
          <li><strong>Correo general:</strong> info@citecd.com</li>
          <li><strong>Teléfono:</strong> +57 (601) 000-0000</li>
          <li><strong>Dirección:</strong> Bogotá D.C., Colombia</li>
        </ul>
      </>
    ),
  },
];

export function TermsOfUse() {
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
                <FileText size={22} style={{ color: "#0052CC" }} />
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
                  Términos de Uso
                </h1>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  {[
                    { label: "Vigente desde", value: "Mayo 2025" },
                    { label: "Aplicable a", value: "citecd.com" },
                    { label: "Jurisdicción", value: "Bogotá D.C., Colombia" },
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
                Para consultas sobre estos términos o uso del Sitio:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="mailto:legal@citecd.com" style={{ display: "flex", gap: "7px", alignItems: "center", fontSize: "12px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}>
                  <Mail size={13} /> legal@citecd.com
                </a>
                <a href="tel:+576010000000" style={{ display: "flex", gap: "7px", alignItems: "center", fontSize: "12px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}>
                  <Phone size={13} /> +57 (601) 000-0000
                </a>
              </div>
            </div>

            {/* Links to other legal docs */}
            <div style={{ border: "1px solid #DFE1E6", borderRadius: "8px", padding: "16px 18px", marginTop: "16px", backgroundColor: "#FFFFFF" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "#5E6C84", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                Documentos relacionados
              </p>
              <Link
                to="/politica-de-privacidad"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}
              >
                <FileText size={13} /> Política de Privacidad <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* Main content */}
          <div>
            {/* Warning banner */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: "16px 20px",
                borderRadius: "8px",
                border: "1px solid #FFCA2C",
                backgroundColor: "#FFFBEB",
                marginBottom: "40px",
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
              }}
            >
              <AlertCircle size={17} style={{ color: "#B45309", flexShrink: 0, marginTop: "1px" }} />
              <p style={{ fontSize: "13px", color: "#78350F", lineHeight: "1.65" }}>
                <strong>Aviso importante:</strong> Al acceder a este sitio web, usted acepta los presentes Términos de Uso. Si representa a una empresa u organización, declara tener autorización para aceptar estos términos en su nombre. El uso del Sitio implica la aceptación plena de las condiciones aquí establecidas.
              </p>
            </motion.div>

            {/* Intro box */}
            <div
              style={{
                padding: "20px 24px",
                borderRadius: "8px",
                border: "1px solid #B3D4FF",
                backgroundColor: "#EBF2FF",
                marginBottom: "40px",
              }}
            >
              <p style={{ fontSize: "14px", color: "#172B4D", lineHeight: "1.7" }}>
                Estos Términos de Uso establecen las condiciones bajo las cuales <strong>CITEC</strong> pone a disposición del público el sitio web <strong>citecd.com</strong>. Se trata de un sitio informativo orientado a clientes empresariales e institucionales interesados en servicios de ingeniería con drones en Colombia. Le invitamos a leer estos términos con atención.
              </p>
            </div>

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
                    to="/politica-de-privacidad"
                    style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#0052CC", textDecoration: "none", fontWeight: 500 }}
                  >
                    Política de Privacidad <ChevronRight size={13} />
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