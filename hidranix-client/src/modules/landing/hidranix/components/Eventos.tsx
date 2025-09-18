import { AnimationComponent } from "../../animation/AnimationComponent";
import NovedadItem from "./EventItem";

import imagenWISE from '../../../../assets/eventos/wise_peru_6g.jpeg';
import imagenStartupPeru from '../../../../assets/eventos/startup_peru_10g.jpeg';
import imagenPeruminHub from '../../../../assets/eventos/perumin_hub_2023.jpeg';
import imagenSemanaInnovacion from '../../../../assets/eventos/semana_innovacion_2024.jpeg';
import imagenPeruEnergiaSur from '../../../../assets/eventos/peru_energia_sur_2025.jpeg';
import imagenGAIA from '../../../../assets/eventos/gaia.png';

interface Event {
  title: string;
  date: string;
  description: string;
  category: 'Evento' | 'Reconocimiento';
  image: string;
}

const companyEvents: Event[] = [
  {
    title: "🌿✨ ¡HIDRANIX es reconocido como Mejor Proyecto Sostenible por GAIA SPE Perú 2025! ✨🌿",
    date: "16 de mayo de 2025",
    description: "Con mucha alegría y gratitud, comparto que nuestro proyecto HIDRANIX, basado en energía limpia con hidrógeno verde, ha sido reconocido como el Mejor Proyecto Sostenible del año por GAIA SPE Perú 2025. 🌍⚡ Este reconocimiento representa el esfuerzo de un equipo comprometido con transformar la industria energética desde la innovación, la ingeniería y la sostenibilidad. 💚Y, por supuesto, un agradecimiento inmenso a mi Co-founder Keneth Brayan Perez Huaroc, por compartir esta visión desde el inicio .🔧 🙏 Quiero agradecer especialmente a Ronald Egusquiza , Miluska Acevedo Calero y José Mantilla por confiar en el propósito de este proyecto y por impulsar espacios donde la ciencia, la juventud y la tecnología se encuentren para crear soluciones reales. Gracias también a mi equipo por soñar en grande, trabajar con pasión y demostrar que desde Arequipa también se lidera cambio. Este logro es solo el inicio. #HIDRANIX #GAIASPE2025 #Sostenibilidad #Innovación #HidrógenoVerde #IngenieríaIndustrial #EnergíaLimpia #MujeresEnSTEM #CambioPositivo",
    category: "Reconocimiento",
    image: imagenGAIA, 
  },
  {
    title: "¡Hidranix gana el primer lugar en WISE Perú 6G!",
    date: "18 de diciembre de 2024",
    description: "🚀¡𝐇𝐢𝐝𝐫𝐚𝐧𝐢𝐱 𝐠𝐚𝐧𝐚 𝐞𝐥 𝐩𝐫𝐢𝐦𝐞𝐫 𝐥𝐮𝐠𝐚𝐫 𝐞𝐧 𝐞𝐥 𝐜𝐨𝐧𝐜𝐮𝐫𝐬𝐨 𝐖𝐈𝐒𝐄 𝐏𝐞𝐫ú 𝟔𝐆!🏆🥇 Estamos emocionados de anunciar que hemos obtenido el primer lugar en el concurso WISE Perú 6G, una iniciativa que impulsa el talento femenino en STEM y la innovación tecnológica en el país. #Hidranix destacó entre más de 100 participantes y obtuvo el primer lugar en la categoría “Prototipo” en esta sexta edición del concurso WISE Perú 2024, organizado por el Centro de Innovación y Emprendimiento Hub Udep de la Universidad de Piura a través del programa WISE Women in STEM Entrepreneurship. Este logro ha sido posible gracias al cofinanciamiento del Programa Nacional de Desarrollo Tecnológico e Innovación - ProInnóvate y el valioso respaldo de Celepsa. Queremos agradecer también a nuestra mentora Giannina Castro Gamarra y a Eva Preciado, quienes nos brindaron su guía y apoyo durante el proceso. En #Hidranix, seguimos apostando por la innovación y el desarrollo sostenible. ¡Este es solo el comienzo! 💡✨ #Hidranix #Innovación #WISEPerú #STEM #Emprendimiento #Tecnología",
    category: "Reconocimiento",
    image: imagenWISE,
  },
  {
    title: "¡Hidranix es ganador de StartUp Perú 10G 2024 - Cambio Climático!",
    date: "24 de octubre de 2024",
    description: "¡𝐇𝐢𝐝𝐫𝐚𝐧𝐢𝐱 𝐞𝐬 𝐠𝐚𝐧𝐚𝐝𝐨𝐫 𝐝𝐞 𝐒𝐭𝐚𝐫𝐭𝐔𝐩 𝐏𝐞𝐫ú 𝟏𝟎𝐆 𝟐𝟒 -𝐂𝐚𝐦𝐛𝐢𝐨 𝐂𝐥𝐢́𝐦𝐚𝐭𝐢𝐜𝐨! 🚀🔥 Estamos emocionados de anunciar que hemos obtenido el primer lugar en el concurso StartUp Perú 10G 2024 -Cambio Climatico, un programa impulsado por ProInnóvate del Ministerio de la Producción del Perú . Este reconocimiento nos ha permitido avanzar en nuestra misión de transformar la manera de cocinar con energía limpia y accesible a través del hidrógeno verde. Gracias al capital semilla de ProInnóvate, hemos podido fortalecer nuestra producción e impulsar nuestra presencia en el mercado, destinando 40% de los fondos a equipos y materiales clave para mejorar nuestro prototipo. Agradecemos a ProInnóvate y #StartUpPerú10G por el apoyo y la confianza en nuestro proyecto. Este es solo el comienzo, seguimos trabajando para llevar Hidranix a más hogares y contribuir a un Perú con energía más limpia y eficiente. #Hidranix #StartUpPerú10G #ProInnóvate #Innovación #EnergíaLimpia #HidrógenoVerde #Sostenibilidad #TransformaciónEnergética #Emprendimiento #Perú",
    category: "Reconocimiento",
    image: imagenStartupPeru,
  },
  {
    title: "Hidranix finalista en PERUMIN Hub 2023",
    date: "25 de septiembre de 2023",
    description: "🌎✨ Otro gran logro para HIDRANIX ✨🌎 Nos complace compartir que nuestra startup #HIDRANIX fue reconocida como finalista en la categoría 'Innovaciones por Validar' en el área de Medio Ambiente y Sostenibilidad en PERUMIN Hub 2023. Este reconocimiento valida el enfoque innovador de nuestra tecnología basada en hidrógeno verde, destacando su potencial para optimizar la eficiencia energética y reducir la huella ambiental en aplicaciones industriales y domésticas. En #HIDRANIX, seguimos avanzando en la investigación y desarrollo de soluciones sostenibles, con el objetivo de mejorar la viabilidad técnica y económica de las energías limpias en el sector Agradecemos a Keneth Brayan Perez Huaroc (CEO) y Lucero Isabel Castro Huanca (COO) por su liderazgo y compromiso, así como a JAKU EMPRENDE UNSA, PERUMIN Convención Minera, y al Parque Tecnológico de la UNSA por el apoyo en este camino de innovación. WISE Women in STEM Entrepreneurship ¡Gracias a todos los que forman parte de este proyecto! 💚⚡ #StartUpHIDRANIX #Startup #InnovaciónSostenible #PERUMINHub #HidrógenoVerde #EnergíaLimpia",
    category: "Evento",
    image: imagenPeruminHub,
  },
  {
    title: "Participación en la Semana de la Innovación y Galardón en GOVLINKTALKS: FLIT DEMO DAY",
    date: "8 - 12 de julio de 2024",
    description: "¡Qué gran recuerdo! 🎉💡 #Hidranix tuvo el honor de participar en la #SemanaDeLaInnovación, un evento increíble organizado en colaboración con Concytec Perú del 8 al 12 de julio - 2024 en Arequipa 🚀, y en el FLIT Festival Latinoamericano de Innovación y Tecnología. Además, nos llevamos una gran alegría al ser galardonados en el concurso #GOVLINKTALKS:FLIT DEMO DAY. Este reconocimiento es el reflejo del esfuerzo y la pasión de nuestro equipo por transformar la manera de cocinar con energía limpia. Asi mismo un agradecimiento especial a Keneth Brayan Perez Huaroc y Lucero Isabel Castro Huanca por representarnos de la mejor manera en ambos eventos, así como a los organizadores y a todos los que hicieron posible esta experiencia. 🙌 También extendemos nuestro agradecimiento a JAKU EMPRENDE UNSA y ADN Partners por su apoyo. ¡Seguimos avanzando con energía hacia nuevos logros! ⚡🌱 #Hidranix #Innovación #Tecnología #Demoday #FeriaLatinoamericana 🚀🌟",
    category: "Reconocimiento",
    image: imagenSemanaInnovacion,
  },
  {
    title: "¡Hidranix presente en PERÚ ENERGÍA SUR 2025 – Arequipa!",
    date: "3 de abril de 2025",
    description: "¡HIDRANIX en PERÚ ENERGÍA SUR 2025 – Arequipa! ⚡ Un espacio que reúne a quienes creemos en un futuro energético más limpio y sostenible. Este foro, uno de los más relevantes del sector, llegó a Arequipa —región clave por su dinamismo económico e industrial— con un objetivo claro: descentralizar el diálogo energético y abordar los desafíos y oportunidades del sur del país. Desde HIDRANIX, llevamos nuestra propuesta de valor basada en el hidrógeno verde como una solución real para transformar la manera en que cocinamos y generamos energía ♻️. Nuestro CEO, KENETH PEREZ junto a nuestros practicantes DIANA TICONA y BRYAN MUÑOZ, participaron con entusiasmo representando el compromiso del equipo con la transición energética del Perú 🌱. Queremos agradecer especialmente a Miluska Acevedo Calero y al Dr. Edgar Cáceres Cabana por la invitación, así como a Fernando Maceda , Jean Louis y José Mantilla por el espacio compartido y las valiosas conversaciones. ¡Volvemos con nuevas ideas, alianzas y más motivación para seguir construyendo un Perú con energía limpia, descentralizada e inclusiva!",
    category: "Evento",
    image: imagenPeruEnergiaSur,
  },
];
const Eventos = () => {
  return (
    <section id="eventos" className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary-light to-slate-900 bg-clip-text text-transparent">
                Eventos
              </span>
            </h2>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } }
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 px-4">
            Participaciones y logros destacados de Hidranix.
          </p>
        </AnimationComponent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
          {companyEvents.map((event, index) => (
            <NovedadItem key={index} event={event} animationDelay={0.1 + index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;