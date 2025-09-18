// src/modules/landing/pages/LandingPhinix.tsx
// import { Link } from "react-router-dom";
import NavbarPhinix from "./components/NavbarPhinix";
import Footer from "../shared/components/Footer";
import { InicioPhinix } from "./components/InicioPhinix";
import { CardItemContent, Contact } from "../shared/interfaces";
import { GridCard } from "./components/GridCard";

// images
import phinixMayo from "../../../assets/eventos/phinix_mayo.jpg";
import phinixMayoForo from "../../../assets/eventos/phinix_participacion_foro.jpg";
import phinixArticuloCientifico from "../../../assets/eventos/phinix_articulo_cientifico.jpg";
import phinixControlElectrico from "../../../assets/eventos/phinix_control_electrico.jpg";
import phinixCatalogo from "../../../assets/eventos/phinix_catalogo.jpg";
import phinixDiaMadre from "../../../assets/eventos/phinix_dia_madre.jpg";
import phinixCongresoInternacional from "../../../assets/eventos/phinix_congreso_internacional.jpg";
import phinixDiaTrabajador from "../../../assets/eventos/phinix_trabajador.jpg";
import phinixNewYear from "../../../assets/eventos/phinix_new_year.jpg";
import phinixSmartHome from "../../../assets/phinix_smarthome.jpeg";
import phinixPozoTierra from "../../../assets/phinix_pozo_tierra.jpg";
import phinixMantenimientoElectrico from "../../../assets/phinix_mantenimiento-electrico.jpg";
import phinixContacto from "../../../assets/phinix_contacto.png";
import { WhatsAppCTAMultiple } from "../shared/components/WhatsAppCTAMultiple";
import ConsultarySection from "./components/ConsultarySection";
import iconoLinkedin from "../../../assets/icons/linkedin.svg";
import iconoFacebook from "../../../assets/icons/facebook.svg";
import iconoInstagram from "../../../assets/icons/instagram.svg";
import iconoWhatsapp from "../../../assets/icons/whatsapp.svg";
import phinixServiciosHVAC from "../../../assets/phinix_servicios_hvac.png";
import phinixImpresiones3D from "../../../assets/phinix_impresiones_3d.png";
import phinixSponsorUnsa from "../../../assets/333.png";
import phinixSponsorEnergizatePeru from "../../../assets/phinix_sponsor_energizate_peru.jpg";
import phinixSponsorPeruEnergia from "../../../assets/111.jpg";
import phinixSponsorFlit from "../../../assets/phinix_sponsor_flit.jpg";
import phinixSponsorGaiaSpePeru from "../../../assets/222.png";
import phinixSponsorPerumin from "../../../assets/phinix_sponsor_perumin.png";
import phinixServiciosTerceros from "../../../assets/phinix_servicios_terceros.png";
import phinixInoxSoldadura from "../../../assets/phinix_inox_soldadura.png";
import { SponsorsCircle } from "./components/SponsorsCircle";
const phinixSocialLinks = {
  facebookUrl: "https://www.facebook.com/phinix.sac",
  instagramUrl: "https://www.instagram.com/phinix.sac",
  linkedinUrl: "https://www.linkedin.com/company/phinix-sac/",
  tiktokUrl: "https://www.tiktok.com/@phinix.hidranix",
};

const eventos: CardItemContent[] = [
  {
    title: "📌✨ Reconocimiento por el Día Nacional de la Micro y Pequeña Empresa (MYPE) | Mayo 2025",
    description:
      "Nos llena de orgullo cerrar el mes con una gran noticia 💚 PHINIX S.A.C. fue reconocida por el Gobierno Regional de Arequipa durante la ceremonia por el Día Nacional de la Micro y Pequeña Empresa (MYPE), como una de las iniciativas más destacadas por su compromiso con la innovación, sostenibilidad e impacto regional. 🏆🌱 El evento, realizado en el Teatro de la Casa Museo Mario Vargas Llosa, reunió a empresas de toda la región y resaltó el valioso rol de las MYPEs en la construcción de un futuro más justo, tecnológico y responsable. ✨ Este reconocimiento refuerza nuestra misión: seguir impulsando soluciones que transforman la industria con propósito. ¡Gracias a todos los que forman parte de este camino!",
    imgSrc: phinixMayo,
    date: "Mayo 2025",
    chipContent: "Evento",
  },
  {
    title: "🧠⚙️ Publicación de articulo en la ASEAN Journal on Science and Technology for Development",
    description:
      "Nos enorgullece compartir que nuestro CEO, Keneth Brayan Perez Huaroc, ha sido coautor del artículo científico “Implementation of a Low-Cost Electronic Speed Controller for a Low-Voltage Three-Phase Induction Motor in a Reused Vehicle”, publicado en la ASEAN Journal on Science and Technology for Development 🧪🌍. Este estudio presenta el diseño de un controlador electrónico de velocidad de bajo costo para motores trifásicos, una tecnología clave para la transición hacia vehículos eléctricos más accesibles y sostenibles 🚗⚡. 📚 El proyecto destaca por: ✅ Reducir costos de conversión de vehículos a eléctricos, ✅ Usar componentes disponibles en el mercado local y ✅ Promover soluciones energéticas viables para mercados emergentes. Desde PHINIX S.A.C. seguimos apostando por la ingeniería que transforma con impacto social y ambiental 🌱💡",
    imgSrc: phinixArticuloCientifico,
    date: "4 de dicimebre del 2024",
    chipContent: "Publicación científica",
  },
  {
    title:
      "✨ XV Congreso Internacional de Dirección de Proyectos PMI Capítulo Sur Perú 2024 ✨",
    description:
      'El pasado 2 de noviembre, nuestro CEO, Keneth Brayan Perez Huaroc , presentó nuestro innovador proyecto hashtag#Hidranix en el congreso. Este proyecto explora el uso de agua como combustible, convirtiéndola en hidrógeno verde, con aplicaciones prometedoras en cocción de alimentos y electromovilidad. La ponencia, titulada "Innovación y Emprendimiento en la Dirección de Proyectos para la Transición Energética: Aplicaciones del Hidrógeno Verde", mostró cómo hashtag#Hidranix puede contribuir a una transición energética sostenible y revolucionar distintos sectores. Agradecidos con los Organizadores Isaac Franco Zamata Teves y a ponentes con los que se participó como Eduardo Lanao ,Luis Felipe Julca Torres, PMP®, CAPM®, Microsoft MCP©, CIP, Giancarlo Avila A., Victor Cano, Soledad Briones Salas. 🌱 ¡Gracias a todos los que apoyan esta visión de un futuro más limpio y sustentable! 🌱',
    imgSrc: phinixCongresoInternacional,
    date: "2 de noviembre del 2024",
    chipContent: "Evento internacional",
  },
];

const novedades: CardItemContent[] = [
  {
    title:
      "🔬♻ ¡Hidranix en el Foro de Química Verde y Economía Circular! ♻🔬",
    description:
      "El pasado 21 de mayo, HIDRANIX, la startup de innovación sostenible de PHINIX S.A.C., participó en el Foro de Química Verde y Economía Circular organizado por Cámara de Comercio e Industria de Arequipa y Grupo GEA🌱 Nuestra presencia reafirma el compromiso con una ingeniería que transforma y con el desarrollo de soluciones basadas en hidrógeno verde, economía circular y tecnologías limpias. 💧⚡ Gracias a espacios como este —respaldados por UNIDO, Fondo para el Medio Ambiente Mundial , y el Centro de Química Verde de Yale University— seguimos impulsando el diálogo entre la academia y la industria para construir un futuro sostenible desde el sur del Perú. 🌍",
    imgSrc: phinixMayoForo,
    date: "21 de mayo 2025",
    chipContent: "Participación",
  },
  {
    title: "🔧⚡ ¿Qué es un Sistema de Control Eléctrico y cuáles son sus aplicaciones?",
    description:
      "Un Sistema de Control Eléctrico es el conjunto de dispositivos, sensores y circuitos que permite dirigir, automatizar y proteger el funcionamiento de máquinas y procesos industriales. ✅ Se aplican en: Plantas industriales, sistemas de bombeo y climatización, automatización de procesos, energías renovables y más. 🧠 Desde PHINIX S.A.C. aplicamos estos sistemas en proyectos sostenibles, garantizando eficiencia energética y optimización operativa a través de soluciones inteligentes y personalizadas.💡 Apostamos por una ingeniería que transforma.",
    imgSrc: phinixControlElectrico,
    date: "Mayo 2025",
    chipContent: "Informativo",
  },
  {
    title: "🚀 ¡PHINIX S.A.C. lanza su nuevo Catálogo de Productos y Servicios 2025!",
    description:
      "Explora nuestras soluciones tecnológicas para impulsar la sostenibilidad y la eficiencia en sectores clave: ⚡ Energía limpia, 💧 agua y eficiencia hídrica, 🚘 electromovilidad, 🔌 automatización industrial y 💡 tecnología de última generación, productos de calidad y compromiso con el medio ambiente. Todo en un solo lugar. Todo al alcance de tu industria. 📥 Escanea el código QR",
    imgSrc: phinixCatalogo,
    date: "2025",
    chipContent: "Lanzamiento",
  },
  {
    title: "💚 ¡Feliz Día de la Madre! 💚",
    description:
      "En PHINIX S.A.C. celebramos a todas las madres que inspiran con su fuerza, sabiduría y amor incondicional. Madres ingenieras, madres de ingenieros, madres que creen en un futuro mejor y lo hacen posible cada día. 🌍✨ Gracias por enseñarnos a construir con valores, a avanzar con pasión y a soñar en grande. Hoy y siempre, honramos su legado. 💫",
    imgSrc: phinixDiaMadre,
    date: "Mayo 2025",
    chipContent: "Celebración",
  },
  {
    title: "👷 ¡Feliz día del trabajador! 👷",
    description:
      "🌍 En PHINIX S.A.C. creemos que nada se enciende sin energía… ¡y esa energía son nuestras personas! En este Día Internacional del Trabajador, reconocemos a quienes impulsan el cambio hacia un futuro más sostenible. 💚 Gracias por ser parte del motor que transforma el mundo con innovación, compromiso y propósito.",
    imgSrc: phinixDiaTrabajador,
    date: "1 de mayo 2025",
    chipContent: "Celebración",
  },
  {
    title: "✨ ¡Feliz Año Nuevo 2025! ✨",
    description:
      "🌟 Este nuevo año es una oportunidad para seguir creciendo, innovando y construyendo un futuro más sostenible juntos. 🌍💡 🙏 Agradecemos los retos superados, las lecciones aprendidas y los logros alcanzados en 2024. 🔑 Que el 2025 nos traiga éxito, salud, y muchas más razones para sonreír y seguir avanzando. 😊🚀 💡 Te desea PHINIX E.I.R.L. e HIDRANIX, trabajando juntos hacia un futuro más sostenible. 💪🌱 #FelizAñoNuevo #Phinix #Hidranix #InnovaciónSostenible #2025. 🥂 ¡Por un año lleno de logros, colaboración y progreso! 🥂 🎆 ¿Cuál es tu compromiso para un 2025 más sostenible? ¡Compártelo con nosotros!",
    imgSrc: phinixNewYear,
    date: "Enero 2025",
    chipContent: "Celebración",
  },
];

const servicios: CardItemContent[] = [
  {
    id: "pozo-a-tierra",
    title: "Pozo a Tierra + Certificado",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Previene accidentes eléctricos.
    • Evita sanciones normativas.
    • Protege equipos y personas.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Instalación técnica especializada.
    • Medición con telurémetro.
    • Reporte Técnico y planos.
    • Certificadooficial.`,
    twoColumns: true,
    imgSrc: phinixPozoTierra,
  },
  {
    id: "mantenimiento-electrico",
    title: "Mantenimiento Eléctrico para Empresas y PYMEs",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Previene fallas eléctricas.
    • Evita apradas operativas, recalentamientos o incendios.
    • Cumple con estándares de seguridad.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Inspección de tableros eléctricos.
    • Limpieza técnica y reaprite de conexiones.
    • Informe técnico con recomendaciones.`,
    twoColumns: true,
    imgSrc: phinixMantenimientoElectrico,
  },
  {
    id: "automatizacion-domotica",
    title: "Automatización Domótica (Smart Home)",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Mejora la comodidad y seguridad de tu espacio.
    • Control remoto desde app o asistentes virtuales.
    • Ahorro energético y modernización del ambiente`,
    descriptionCol2: `<strong>Incluye</strong>
    • Instalación de control de luces por app o voz.
    • Sensores de movimiento y cámaras.
    • Compataibilidad con Alexa y Google Home.`,
    twoColumns: true,
    imgSrc: phinixSmartHome,
  },
  {
    id: "servicios-hvac",
    title: "Servicios HVAC",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Mejora el confort térmico.
    • Optimiza el consumo energético.
    • Reduce el riesgo de fallas y sobrecargas.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Instalación y mantenimiento de equipos HVAC.
    • Soluciones de ventilación, calefaccción y aire acondicionado.
    • Diagnóstico técnico y recomendaciones.`,
    twoColumns: true,
    imgSrc: phinixServiciosHVAC,
  },
  {
    id: "impresiones-3d",
    title: "Impresiones 3D en Resina",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Prototipado preciso y rápido.
    • Alta resolución y acabados.
    • Adaptable a multiples industrias.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Prototipado preciso y rápido.
    • Alta resolución y acabados profesionales.
    • Adaptable a multiples industrias.`,
    twoColumns: true,
    imgSrc: phinixImpresiones3D,
  },
  {
    id: "servicios-terceros",
    title: "Servicios de Terceros (Soldadura, etc.)",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Ahorra tiempo y esfuerzo delegando tares.
    • Mejora la calidad y seguridad de tus instalaciones.
    • Flexibilidad para proyectos pequeños o de gran escala.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Soldadura, pintura técnica, montaje estructural y más.
    • Mano de obra calificada y herramientas especializadas.
    • Supervisión técnica y cumplimiento normativo.`,
    twoColumns: true,
    imgSrc: phinixServiciosTerceros,
  },
  {
    id: "inox-soldadura",
    title: "Trabajos en Torno de Inox y Soldadura",
    descriptionCol1: `<strong>Beneficios clave</strong>
    • Alta precisión para piezas únicas o seriadas.
    • Acabados limpios y resistentes a la corrosión.
    • Ideal para aplicaciones industriales, sanitarias o decorativas.`,
    descriptionCol2: `<strong>Incluye</strong>
    • Torneado de acero inoxidable (ejes, pernos, casquillos, adaptadores, etc).
    • Fabricación de piezas especiales bajo plano o muestra.
    • Equipos calibrados y operados por técnicos expertos.`,
    twoColumns: true,
    imgSrc: phinixInoxSoldadura,  
  },
];
const customContacts: Contact[] = [
  {
    name: "Asesor de ventas",
    number: "+51916699070",
    message: "Hola, me gustaría solicitar una cotización de ...",
  },
  // {
  //   name: "Soporte Técnico",
  //   number: "+51989563108",
  //   message: "Hola, necesito ayuda técnica",
  // },
];
// #088c9c rgb(8,140,156)
// Servicios Agregados phinix
const presentacion: CardItemContent[] = [
  {
    title: "MISIÓN",
    description:
      `Desarrollar e implementar soluciones tecnológicas innovadoras en energía, automatización y sostenibilidad, contribuyendo al desarrollo de una sociedad más eficiente, limpia y consciente. Nos enfocamos en la excelencia operativa, el compromiso con nuestros clientes y el impacto positivo en las comunidades donde operamos.`,
  },
  {
    title: "VISIÓN",
    description:
      `Ser una empresa referente en América Latina en soluciones integrales de energía renovable, automatización y sostenibilidad, liderando la transformación tecnológica hacia un futuro más verde, inteligente e inclusivo.`,
    
  },
  {
  title: "NUESTROS VALORES",
  descriptionCol1: `
    <ol class="custom-values-list">
      <li><strong>Innovación continua:</strong> Buscamos constantemente nuevas ideas y tecnologías que nos permitan mejorar nuestros productos y servicios.</li>
      <li><strong>Compromiso con la sostenibilidad:</strong> Actuamos con responsabilidad ambiental y promovemos el uso eficiente de los recursos.</li>
      <li><strong>Excelencia técnica:</strong> Garantizamos calidad, precisión y seguridad en cada proyecto que desarrollamos.</li>
      <li><strong>Ética y transparencia:</strong> Mantenemos relaciones honestas y responsables con nuestros clientes, aliados y colaboradores.</li>
    </ol>
  `,
  descriptionCol2: `
    <ol class="custom-values-list" start="5">
      <li><strong>Cercanía y servicio al cliente:</strong> Escuchamos, entendemos y acompañamos a nuestros clientes para brindar soluciones a la medida.</li>
      <li><strong>Colaboración:</strong> Fomentamos el trabajo en equipo y las alianzas estratégicas para crecer juntos.</li>
      <li><strong>Impacto social:</strong> Promovemos el desarrollo local y la inclusión a través de nuestras iniciativas tecnológicas y educativas.</li>
      <li><strong>Sostenibilidad:</strong> Buscamos equilibrio en tres aspectos clave: el crecimiento económico, la protección del medio ambiente y el bienestar social.</li>
    </ol>
  `,
  twoColumns: true,
},
  {
    title: "CONTACTO",
    description: `
    <strong>Contáctanos</strong>
    <img src="${iconoLinkedin}" alt="LinkedIn" class="inline-icon" /> PHINIX S.A.C.
    <img src="${iconoFacebook}" alt="Facebook" class="inline-icon" /> PHINIX S.A.C.
    <img src="${iconoInstagram}" alt="Instagram" class="inline-icon" /> phinix.sac
    <img src="${iconoWhatsapp}" alt="WhatsApp" class="inline-icon" /> +51 916 699 070
    <img src="${iconoWhatsapp}" alt="WhatsApp" class="inline-icon" /> +51 989 563 108
    
    `,
    imgSrc: phinixContacto,
  },
]

const sponsors  : CardItemContent[] = [
  { 
    title: "UNSA", 
    imgSrc: phinixSponsorUnsa , 
    description: "Arequipa, Peru"},
  { 
    title: "Energízate Perú", 
    imgSrc: phinixSponsorEnergizatePeru , 
    description: "Arequipa, Peru"
  },
  { 
    title: "Perú Energía", 
    imgSrc: phinixSponsorPeruEnergia , 
    description: "Arequipa, Peru"
  },
  { 
    title: "Flit", 
    imgSrc: phinixSponsorFlit , 
    description: "Arequipa, Peru"
  },
  { 
    title: "Gaia SPE Perú", 
    imgSrc: phinixSponsorGaiaSpePeru , 
    description: "Arequipa, Peru"
  },
  { 
    title: "Perumin Hub", 
    imgSrc: phinixSponsorPerumin , 
    description: "Arequipa, Peru"
  },
  
  ]
const LandingPhinix = () => {
  return (
    <div>
      {/* Navbar */}
      <NavbarPhinix />

      <InicioPhinix />
      {/* Agregando cambios phinix */}
      <GridCard
        id="nosotros"
        title="Presentación de PHINIX S.A.C."
        subTitle="Somos PHINIX S.A.C., empresa autorizada especializada en soluciones eléctricas, mantenimiento y tecnología inteligente para hogares, negocios y empresas."
        key="presentacion"
        cards={presentacion}
        isClickable={false} // No clickable for services
        minWidth={390}
        equalHeight={true} // Igualar alturas para presentación
      />

      {/* Fin de cambios phinix */}

      <GridCard
        title="Servicios"
        subTitle="Dirigido a Empresas, viviendas, locales, etc. Que requieren cumplir normas eléctricas o mejorar su seguridad"
        key="services"
        cards={servicios}
        isClickable={false} // No clickable for services
        equalHeight={true} // Igualar alturas para servicios
        minWidth={380}
      />
      <GridCard
        title="Eventos"
        subTitle="Conoce más de nuestros eventos"
        key="events"
        cards={eventos}
      />
      <GridCard
        title="Novedades"
        subTitle="Entérate de nuestras últimas novedades"
        key="news"
        cards={novedades}
      />

      {/* <GridCard
        id="sponsors"
        title="Nuestros Patrocinadores"
        subTitle="Conoce más de nuestros principales sponsor"
        key="sponsors"
        cards={sponsors}
        isClickable={false} // No clickable for services
        minWidth={160}
        equalHeight={true} // Igualar alturas para presentación
      /> */}

      <SponsorsCircle sponsors={sponsors} />


      {/* Consultoría Form */}
      <ConsultarySection />

      {/* Footer */}
      <Footer
        {...phinixSocialLinks}
        slogan="Unidos para optimizar el ahorro, fomentar descarbonización,usando Energías Renovables con Hidrógeno Verde."
        pageName="Phinix"
      />
      <WhatsAppCTAMultiple contacts={customContacts} />
    </div>
  );
};

export default LandingPhinix;
