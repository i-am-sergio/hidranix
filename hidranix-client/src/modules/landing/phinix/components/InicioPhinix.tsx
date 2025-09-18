import { AnimationComponent } from "../../animation/AnimationComponent";
import phinixLogo from "../../../../assets/phinix_logo.png";

export const InicioPhinix = () => {
  return (
    <div
      id="inicio"
      className="bg-hero-pattern-with-opacity-phinix w-full overflow-hidden flex items-center justify-center-safe min-h-screen bg-cover bg-center flex-wrap"
    >
      <AnimationComponent
        className="text-center max-w-2xl px-4  md:-mt-40"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6 },
          },
        }}
      >
        {/* <div className="text-center max-w-2xl px-4 -mt-40"> */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
          <span className="text-[#f5f5f5] drop-shadow-lg">
            Impulsamos la transición energética en Perú
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold">
          <span className="text-white drop-shadow-lg">
            Especialistas en hidrógeno verde, electromovilidad y automatización
            inteligente
          </span>
        </p>
        {/* </div> */}
      </AnimationComponent>
      <AnimationComponent
        className="md:-mt-20 -mt-40 md:ml-20"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6 },
          },
        }}
      >
        <img
          src={phinixLogo}
          alt="Phinix Logo"
          className="w-64 md:w-80 transition-transform transform hover:scale-105"
        />
      </AnimationComponent>
    </div>
  );
};
