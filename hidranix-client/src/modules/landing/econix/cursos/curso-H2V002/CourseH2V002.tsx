import { useEffect } from "react";
import type { Contact, CourseData } from "../../../shared/interfaces";
import { NavBarEconix } from "../../components/NavBarEconix";
import { CourseHero } from "../components/CourseHero";
import { CourseInfo } from "../components/CourseInfo";
import { CourseModules } from "../components/CourseModules";
import { CourseDetails } from "../components/CourseDetails";
import { CourseInvestment } from "../components/CourseInvestment";
import Footer from "../../../shared/components/Footer";
import { WhatsAppCTAMultiple } from "../../../shared/components/WhatsAppCTAMultiple";
import { CourseRegistration } from "../components/CourseRegistration";
import silaboPdf from "../../../../../assets/files/Silabo_H2V_002.pdf";
const phinixSocialLinks = {
  facebookUrl: "https://www.facebook.com/phinix.sac",
  instagramUrl: "https://www.instagram.com/phinix.sac",
  linkedinUrl: "https://www.linkedin.com/company/phinix-sac/",
  tiktokUrl: "https://www.tiktok.com/@phinix.hidranix",
};

const courseContacts: Contact[] = [
  {
    name: "Asesor Académico",
    number: "+51916699070",
    message:
      "Hola, me gustaría obtener más información sobre el curso de Hidrógeno Verde...",
  },
];

const courseData: CourseData = {
  title:
    "Hidrógeno Verde: Generación y Almacenamiento para Aplicaciones Energéticas Sostenibles",
  courseCode: "H2V002",
  duration: "36 horas académicas",
  modality: "Online",
  startDate: "16/09/2025",
  endDate: "28/10/2025",
  schedule: "Martes y jueves 7:30 p.m. - 10:00 p.m.",
  sessions: "12 sesiones",
  weeks: "6 semanas",
  hoursPerWeek: "6 horas",
  objective:
    "Proporcionar a los participantes un conocimiento profundo sobre el hidrógeno verde, sus aplicaciones, su impacto en la transición energética, y cómo contribuir a la reducción de huella de carbono mediante esta tecnología innovadora. Los participantes aprenderán sobre la producción, almacenamiento y uso del hidrógeno verde en un mundo que busca soluciones sostenibles.",
  methodology: [
    "Clases teóricas con ejemplos de casos reales, presentaciones multimedia y recursos interactivos",
    "Talleres prácticos con simulaciones, estudios de caso, y análisis de proyectos de hidrógeno verde",
    "Evaluaciones interactivas para medir el progreso y comprensión de los temas",
    "Foro de discusión online para compartir ideas y resolver dudas con expertos",
    "Certificación a nombre de PHINIX S.A.C. e HIDRANIX, al completar el curso con éxito",
  ],
  dirigidoA: [
    "Profesionales de ingeniería interesados en energías renovables y tecnologías sostenibles",
    "Técnicos y especialistas en sistemas energéticos que busquen especializarse en hidrógeno verde",
    "Estudiantes de ingeniería en etapa avanzada con interés en transición energética",
    "Empresarios y emprendedores del sector energético que busquen nuevas oportunidades de negocio",
    "Consultores y asesores en proyectos de sostenibilidad y medio ambiente",
  ],

  modules: [
    {
      number: 1,
      title:
        "Fundamentos del Hidrógeno Verde y Producción Directa sin Compresión",
      sessions: "1 y 2",
      hours: 6,
      week: 1,
      dates: ["Jueves 18 de septiembre", "Martes 23 de septiembre"],
      objective:
        "Brindar a los participantes una comprensión técnica sólida sobre el hidrógeno verde como vector energético, enfocándose especialmente en métodos de generación que permitan alcanzar presiones elevadas desde la producción, evitando o minimizando el uso de etapas de compresión.",
      topics: [
        "Fundamentos, aplicaciones y electrólisis del hidrógeno verde",
        "El rol del hidrógeno en la transición energética mundial",
        "Tipología y clasificación del hidrógeno: gris, azul, turquesa y verde",
        "Ecosistema del hidrógeno: aplicaciones, regulación y nuevos mercados",
        "Cadena de valor del hidrógeno",
        "Regulación, seguridad y mercados emergentes",
      ],
    },
    {
      number: 2,
      title: "Tecnologías de Compresión y Licuefacción de Hidrógeno",
      sessions: "3 y 4",
      hours: 6,
      week: 2,
      dates: ["Jueves 25 de septiembre", "Martes 30 de septiembre"],
      objective:
        "Profundizar en los métodos de compresión de hidrógeno gaseoso y explorar alternativas de licuefacción y almacenamiento en estado líquido o supercrítico, con el propósito de comprender los fundamentos y criterios de diseño de sistemas de producción y almacenamiento de H₂ que operen a presiones extremas o bajas temperaturas.",
      topics: [
        "Fundamentos y tecnologías de compresión de hidrógeno",
        "Fundamentos físicos de la compresión de gases",
        "Tipos de compresores para hidrógeno: principios y aplicaciones",
        "Alternativas de licuefacción y diseño de sistemas integrados",
        "Principios de licuefacción del hidrógeno y comportamiento criogénico",
        "Sistemas híbridos de generación-presurización integrados",
      ],
    },
    {
      number: 3,
      title:
        "Repostaje, Recarga y Seguridad en Sistemas de Almacenamiento de Hidrógeno",
      sessions: "5 y 6",
      hours: 6,
      week: 3,
      dates: ["Jueves 2 de octubre", "Martes 7 de octubre"],
      objective:
        "Capacitar a los participantes en los fundamentos técnicos del repostaje automático, la recarga segura de cilindros de hidrógeno a alta presión y el diseño seguro de sistemas de almacenamiento, integrando normativas, buenas prácticas y análisis de riesgo en el manejo de hidrógeno comprimido.",
      topics: [
        "Repostaje automático y recarga de cilindros de hidrógeno",
        "Fundamentos del repostaje de hidrógeno a alta presión",
        "Componentes del sistema de repostaje: válvulas, conectores y sensores",
        "Seguridad integral y diseño de almacenamiento presurizado",
        "Riesgos en el almacenamiento de hidrógeno a alta presión",
        "Estrategias de mitigación y diseño seguro",
      ],
    },
    {
      number: 4,
      title: "Normativa, Estándares Técnicos y Buenas Prácticas en Hidrógeno",
      sessions: "7 y 8",
      hours: 6,
      week: 4,
      dates: ["Jueves 9 de octubre", "Martes 14 de octubre"],
      objective:
        "Dotar a los participantes de conocimientos fundamentales sobre el marco normativo internacional y nacional del hidrógeno, así como las mejores prácticas para el diseño, construcción, operación y mantenimiento de sistemas que involucren producción, almacenamiento y manejo de hidrógeno en ambientes seguros y técnicamente viables.",
      topics: [
        "Regulaciones, estándares y certificaciones aplicables al hidrógeno",
        "Normas y estándares internacionales clave en sistemas de hidrógeno",
        "Reglamentación nacional y marco legal peruano",
        "Buenas prácticas de diseño, operación y mantenimiento",
        "Operación segura y monitoreo continuo",
        "Protocolos de pruebas, ensayos y certificación de componentes",
      ],
    },
    {
      number: 5,
      title: "Aplicación Técnica: Integración de Sistemas en el Caso HIDRANIX",
      sessions: "9 y 10",
      hours: 6,
      week: 5,
      dates: ["Jueves 16 de octubre", "Martes 21 de octubre"],
      objective:
        "Aplicar los conocimientos técnicos adquiridos sobre producción y almacenamiento de hidrógeno en un caso real: el sistema HIDRANIX. Se mostrará el diseño, componentes y funcionamiento del sistema, sin revelar detalles patentables, enfocándose en sorprender al público con el nivel de integración alcanzado.",
      topics: [
        "Diseño técnico funcional del sistema HIDRANIX",
        "Arquitectura general del sistema HIDRANIX",
        "Electrolizador presurizado: diseño, materiales y resistencia mecánica",
        "Almacenamiento, seguridad y proyección de aplicaciones",
        "Proceso automático de llenado del tanque de fibra de carbono",
        "Mecanismos de seguridad térmica, estructural y de presión",
      ],
    },
    {
      number: 6,
      title: "Proyección Estratégica y Presentación de Proyectos",
      sessions: "11 y 12",
      hours: 6,
      week: 6,
      dates: ["Jueves 23 de octubre", "Martes 28 de octubre"],
      objective:
        "Integrar conocimientos técnicos, económicos y estratégicos en la formulación y presentación de un proyecto de hidrógeno inspirado en HIDRANIX. El enfoque estará en aplicar lo aprendido sin exponer detalles confidenciales, buscando demostrar viabilidad, impacto económico y escalabilidad.",
      topics: [
        "Análisis económico y escalabilidad de proyectos Power-to-X",
        "Evaluación de viabilidad económica de proyectos de hidrógeno",
        "Mercados y oportunidades comerciales",
        "Formulación y presentación estratégica de proyectos",
        "Metodología de presentación de proyectos",
        "Casos de éxito y lecciones aprendidas",
      ],
    },
  ],
  investment: {
    regular: 600,
    earlyBird: 570,
    earlyBirdDeadline: "09/09/2025",
  },
  instructorInfo: {
    company: "PHINIX S.A.C. e HIDRANIX",
    description:
      "Expertos en tecnologías energéticas sostenibles y sistemas de hidrógeno verde",
    contact: "+51 916699070",
    email: "comercial.phinix@gmail.com",
  },
  benefits: [
    "Conocimiento especializado en hidrógeno verde",
    "Aplicación práctica con casos reales",
    "Certificado digital reconocido",
    "Acceso a foros de discusión con expertos",
    "Material didáctico actualizado",
    "Networking con profesionales del sector",
  ],
  silaboPdf: silaboPdf,
};

export const CourseH2V002 = () => {
  useEffect(() => {
    document.title = `${courseData.title} - Econix`;
  }, []);

  return (
    <>
      <NavBarEconix variantColor showTitle title={courseData.title} />
      <CourseHero courseData={courseData} />
      <CourseInfo courseData={courseData} />
      <CourseModules modules={courseData.modules} />
      <CourseDetails courseData={courseData} />
      <CourseInvestment courseData={courseData} />
      <CourseRegistration courseData={courseData} />
      <Footer
        {...phinixSocialLinks}
        slogan="Educación, consultoría y oportunidad de nuevas innovaciones exitosas"
        pageName="Econix"
      />
      <WhatsAppCTAMultiple contacts={courseContacts} />
    </>
  );
};
