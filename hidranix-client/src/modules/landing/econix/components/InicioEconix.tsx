import { AnimationComponent } from "../../animation/AnimationComponent";
import logoEconix from "../../../../assets/Logo_Econix_white.png";

export const InicioEconix = () => {
  return (
    <div
      id="inicio"
      className="bg-hero-pattern-with-opacity-econix w-full overflow-hidden flex items-center justify-center-safe min-h-screen bg-cover bg-center flex-wrap"
    >
      <AnimationComponent
        className="text-center max-w-2xl px-4  md:-mt-40"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.8 },
          },
        }}
      >
        {/* <div className="text-center max-w-2xl px-4 -mt-40"> */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8">
          <span className="text-gradient bg-gradient-to-r from-primary to-primary-dark drop-shadow-lg">
            Formamos a los líderes de la energía del futuro
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold">
          <span className="text-white drop-shadow-lg">
            Educación, consultoría y oportunidades de nuevas innovaciones
            exitosas
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
            transition: { delay: 0.6, duration: 1 },
          },
        }}
      >
        <img
          src={logoEconix}
          alt="Econix Logo"
          className="-mt-30 w-64 md:w-80 transition-transform transform hover:scale-105"
        />
      </AnimationComponent>
    </div>
  );
};
