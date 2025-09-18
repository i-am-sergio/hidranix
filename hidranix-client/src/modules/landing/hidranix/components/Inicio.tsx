// src/modules/landing/components/Inicio.tsx
import { AnimatedButton } from "../../animation/AnimatedButton";
import { AnimationComponent } from "../../animation/AnimationComponent";
import { FaArrowRight } from "react-icons/fa";
import HidranixLogo from "../../../../assets/hidranix_logo.svg";

const Inicio = () => {
  return (
    <div
      id="inicio"
      className="bg-hero-pattern-with-opacity w-full overflow-hidden flex items-center justify-center min-h-screen"
    >
      <div className="bg-hero-pattern-content container mx-auto max-w-7xl w-full py-24 md:py-16 xl:py-8 flex flex-col xl:flex-row items-center justify-between gap-12 px-4 sm:px-6">
        {/* Text Content */}
        <div className="text-center xl:text-left w-full space-y-8">
          <AnimationComponent
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.3, duration: 0.8 },
              },
            }}
          >
            <span className="font-bold text-[#ebebeb] text-lg md:text-xl tracking-widest">
              INNOVACIÓN EN ENERGÍAS RENOVABLES
            </span>
          </AnimationComponent>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <AnimationComponent
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent font-poppins text-5xl xl:text-8xl">
                HIDRANIX
              </span>
            </AnimationComponent>
            <AnimationComponent
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.8 },
                },
              }}
            >
              <span className="text-white py-6 block font-poppins text-lg xl:text-6xl">
                Convertimos el agua en fuego para cocinar con hidrógeno verde
              </span>
            </AnimationComponent>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center xl:justify-start gap-6 mt-12">
            <AnimationComponent
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: { delay: 0.6, type: "spring", stiffness: 300 },
                },
              }}
            >
              <AnimatedButton href={"/hidranix"}>
                <span className="mr-2">Descubre la Tecnología</span>
                <FaArrowRight className="text-xl" />
              </AnimatedButton>
            </AnimationComponent>
          </div>
        </div>

        {/* Image Section */}
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.8 },
            },
          }}
          className="w-3/4 xl:w-1/2 flex justify-center"
        >
          <div className="relative max-w-xl xl:max-w-none">
            <img
              src={HidranixLogo}
              alt="Tecnología Hidranix"
              className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-transparent rounded-lg" />
          </div>
        </AnimationComponent>
      </div>
    </div>
  );
};

export default Inicio;