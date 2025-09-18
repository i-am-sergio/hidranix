import { useEffect } from "react";
import { InicioEconix } from "./components/InicioEconix";
import { NavBarEconix } from "./components/NavBarEconix";
import { NosotrosEconix } from "./components/NosotrosEconix";
import {
  Contact,
  CourseItemContent,
  WebinarItemContent,
} from "../shared/interfaces";
import Footer from "../shared/components/Footer";
import { WhatsAppCTAMultiple } from "../shared/components/WhatsAppCTAMultiple";
import { ListWebinar } from "./components/ListWebinar";
import webinar1 from "../../../assets/webinar1.jpg";
import webinar2 from "../../../assets/webinar2.jpg";
import { ListCourse } from "./components/ListCourse";

const phinixSocialLinks = {
  facebookUrl: "https://www.facebook.com/phinix.sac",
  instagramUrl: "https://www.instagram.com/phinix.sac",
  linkedinUrl: "https://www.linkedin.com/company/phinix-sac/",
  tiktokUrl: "https://www.tiktok.com/@phinix.hidranix",
};

const webinars: WebinarItemContent[] = [
  {
    title:
      "⚙️ Webinar: ¿Pueden Arduino ESP32 o Raspberry Pi Pico ser una alternativa al PLC en zonas remotas?",
    date: "Sábado 9 de agosto",
    time: "7:00 p.m. (hora Perú)",
    description:
      "PHINIX S.A.C. te invita a un webinar gratuito donde exploraremos cómo tecnologías accesibles como Arduino ESP32 y Raspberry Pi Pico están revolucionando la automatización industrial y minera...",
    speaker: {
      name: "Ing. Keneth Brayan Pérez Huaroc",
      title: "Gerente General de PHINIX S.A.C.",
      bio: "Ingeniero Eléctrico con formación en Electrotecnia Industrial, Computación, Mecatrónica e IoT. Experiencia en Minera Antapaccay, Repsol YPF y más.",
    },
    link: "https://lu.ma/l7lj5sn5",
    isFree: true,
    platform: "Google Meet",
    organizer: "PHINIX S.A.C.",
    extraNotes:
      "Además, conoce ECONIX, nuestra nueva división educativa con cursos en energía, sostenibilidad e innovación.",
    imgSrc: webinar1,
  },
  {
    title:
      "🌱✨ Webinar: Hidrógeno verde: conceptos clave, producción y seguridad para la sostenibilidad",
    date: "Jueves 28 de agosto",
    time: "7:00 p.m. (hora Perú)",
    description:
      "Participa en el webinar gratuito sobre Hidrógeno Verde y entérate cómo esta tecnología impulsa la sostenibilidad y las energías renovables. Además, accede al concurso de becas y semibecas para el Curso Especializado en Hidrógeno Verde.",
    speaker: {
      name: "Ing. José Sarachaga",
      title: "Gerente de operaciones en ALS Life Sciences",
      bio: "Ingeniero con más de 15 años de experiencia en minería, hidrocarburos e industria. Especialista en gestión ambiental y proyectos sostenibles, experto en hidrógeno verde y CCS.",
    },
    link: "https://lu.ma/4iigyt0p",
    isFree: true,
    platform: "Google Meet",
    organizer: "Curso Especializado en Hidrógeno Verde",
    extraNotes:
      "Al inscribirte y asistir, podrás participar en el sorteo de becas y semibecas 🎓.",
    imgSrc: webinar2,
  },
];
const customContacts: Contact[] = [
  {
    name: "Asesor de ventas",
    number: "+51916699070",
    message: "Hola, me gustaría solicitar una cotización de ...",
  },
];

const courses: CourseItemContent[] = [
  {
    name: "Hidrógeno Verde: Generación y Almacenamiento para Aplicaciones Energéticas Sostenibles",
    startDate: "16/09/2025",
    endDate: "28/10/2025",
    duration: "36 horas",
    modality: "Online",
    schedule: "Martes y jueves 7:30 p.m. - 10:00 p.m.",
    moreInfoPath:
      "/cursos/generacion-y-almacenamiento-para-aplicaciones-energeticas-sostenibles",
  },
];
export const LandingEconix = () => {
  useEffect(() => {
    document.title = "Econix - Phinix";
  }, []);
  return (
    <>
      <NavBarEconix />
      <InicioEconix />
      <NosotrosEconix />
      <ListWebinar
        id="webinars"
        webinars={webinars}
        title="Webinars"
        subTitle="Únete a nuestros webinars"
      />
      <ListCourse
        id="cursos"
        title="Nuestros Cursos"
        subTitle="Capacítate con nuestros programas especializados"
        courses={courses}
      />
      {/* Footer */}
      <Footer
        {...phinixSocialLinks}
        slogan="Educación, consultoría y oportunidad de nuevas innovaciones exitosas"
        pageName="Econix"
      />
      <WhatsAppCTAMultiple contacts={customContacts} />
    </>
  );
};
