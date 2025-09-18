import { motion } from "framer-motion";
import { CardItemContent } from "../../shared/interfaces";
import { AnimationComponent } from "../../animation/AnimationComponent";

interface Props {
  sponsors: CardItemContent[];
}

export const SponsorsCircle = ({ sponsors }: Props) => {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Reducir la duración para acelerar la animación
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary-light to-slate-900 bg-clip-text text-transparent">
                Nuestros Patrocinadores
              </span>
            </h2>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1, duration: 0.25 } }, // Acelerar aparición de subtítulo
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 px-4">
            Cononce mas sobre nuestros sponsors
          </p>
        </AnimationComponent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-36 h-20 sm:w-40 sm:h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-primary-light group-hover:scale-110 transition-transform duration-300">
                <img
                  src={sponsor.imgSrc}
                  alt={sponsor.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-3 text-base font-semibold text-gray-800 group-hover:text-primary-dark transition-colors">
                {sponsor.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
