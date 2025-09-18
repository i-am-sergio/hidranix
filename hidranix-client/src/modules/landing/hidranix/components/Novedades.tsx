import { motion } from "framer-motion";

import imagen1 from "../../../../assets/novedades/1may2025.jpeg";
import imagen2 from "../../../../assets/novedades/24abr2025.jpeg";
import imagen3 from "../../../../assets/novedades/21abr2025.jpeg";

import produccionImage from "../../../../assets/ministerio_de_la_produccion_logo.png";
import proinnovateImage from "../../../../assets/proinnovate_logo.png";
import unsaImage from "../../../../assets/unsa_logo.png";
import jakuImage from "../../../../assets/jaku_logo.png";

import NovedadItem from "./NovedadItem";

interface Post {
  title: string;
  date: string;
  description: string;
  category: "Evento" | "Noticia" | "Acuerdo" | "Avance" | "Informativo";
  image: string;
}

const companyPosts: Post[] = [
  {
    title: "Día del Trabajo: La Energía que Mueve el Cambio",
    date: "1 de mayo de 2025",
    description:
      "Hoy reconocemos a quienes, con esfuerzo y pasión, hacen posible cada avance. En Hidranix creemos que el trabajo con propósito transforma no solo empresas, sino también el mundo. ¡Feliz Día del Trabajo! Gracias por ser parte de esta energía que mueve el cambio ⚡🌱 #DíaDelTrabajo #Hidranix #EnergíaConPropósito #Sostenibilidad #HidrógenoVerde #FuturoLimpio",
    category: "Informativo",
    image: imagen1,
  },
  {
    title: "¿Quién Liderará el Hidrógeno Verde en Latinoamérica en 2030?",
    date: "27 de febrero de 2025",
    description:
      "🌎 Latinoamérica tiene todo para ser un actor clave en esta nueva era energética: recursos renovables, electricidad barata ⚡ y cada vez más proyectos en marcha. Pero… ¿qué país logrará producir hidrógeno verde al menor costo? 💰 Chile, Argentina, Perú, Colombia, México y Brasil compiten en esta carrera hacia un futuro limpio y sostenible. Descúbrelo en nuestra infografía y dinos: ¿cuál tiene la ventaja? 🚀 #HidranixInformativo #HidrógenoVerde #Sostenibilidad #Innovación #Agenda2030 #EnergíaLimpia #Latinoamérica",
    category: "Informativo",
    image: imagen2,
  },
  {
    title: "Día Mundial de la Innovación: Impulsando un Futuro Sostenible",
    date: "21 de abril de 2025",
    description:
      "¡Hoy celebramos el poder de las ideas! 💡 En el Día Mundial de la Innovación, reconocemos la creatividad que impulsa soluciones sostenibles. En Hidranix creemos que un futuro más limpio comienza con innovación energética ⚡🌱 ¿Y tú, qué estás haciendo hoy que podría cambiar el mañana? #DíaDeLaInnovación #InnovaciónSostenible #HidrógenoVerde #EnergíaLimpia #IdeasQueTransforman #FuturoVerde #Hidranix",
    category: "Informativo",
    image: imagen3,
  },
];

const aliados = [
  { name: "Ministerio de la Producción", location: "Perú", logo: produccionImage },
  { name: "ProInnóvate", location: "Perú", logo: proinnovateImage },
  { name: "UNSA", location: "Arequipa, Perú", logo: unsaImage },
  { name: "Jaku", location: "Arequipa, Perú", logo: jakuImage },
];

const Novedades = () => {
  return (
    <section
      id="novedades"
      className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary-light to-slate-900 bg-clip-text text-transparent">
              Novedades
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1, duration: 0.3 } },
          }}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 px-4">
            Actualízate con nuestras noticias, publicaciones más recientes y aliados estratégicos.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aliados.map((aliado, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <img
                  src={aliado.logo}
                  alt={aliado.name}
                  className="h-20 w-auto object-contain mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-800">{aliado.name}</h4>
                <p className="text-sm text-gray-500">{aliado.location}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
          {companyPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 + index * 0.1, duration: 0.3 },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <NovedadItem key={index} post={post} animationDelay={0.1 + index * 0.2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Novedades;
