import { AnimationComponent } from "../../animation/AnimationComponent";
import { FaExclamationTriangle, FaCogs, FaHandshake } from "react-icons/fa";
import solucionImage from "../../../../assets/hidranix/solucion.png";
import promesaImage from "../../../../assets/hidranix/promesa.png";
import kenethImage from "../../../../assets/hidranix/keneth.png";
import luceroImage from "../../../../assets/hidranix/lucero.png";

const Nosotros = () => {
  const equipo = [
    {
      nombre: "Keneth Perez",
      rol: (
      <>
        Fundador y <span className="text-primary font-bold text-xl">CEO</span> de PHINIX y HIDRANIX
      </>
      ),
      foto: kenethImage,
      descripcion:
        "Ingeniero Eléctrico, especialista en hidrógeno verde y energías renovables",
    },
    {
      nombre: "Lucero Castro",
      rol: (
      <>
        Cofundadora y <span className="text-primary font-bold text-xl">COO</span> de PHINIX y HIDRANIX
      </>
      ),
      foto: luceroImage,
      descripcion:
        "Ingeniera Industrial con experiencia en gestión de proyectos e innovación",
    },
  ];

  return (
    <section
      id="nosotros"
      className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary-light to-slate-900 bg-clip-text text-transparent">
                Nosotros
              </span>
            </h2>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.8 } },
          }}
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16 px-4">
            Revolucionando el sector energético mediante la transformación de
            agua en energía limpia y sostenible
          </p>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-12 mt-10">
            {equipo.map((miembro, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-128 h-128 bg-white p-3 rounded-lg shadow-lg" style={{
                  clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  backgroundColor: "#003d3f"
                }}>
                  <img
                    src={miembro.foto}
                    alt={miembro.nombre}
                    className="w-full h-full object-cover"
                    style={{
                      clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)"
                    }}
                  />
                </div>
                <h4 className="text-[#003d3f] font-bold text-lg">{miembro.nombre}</h4>
                <p className="text-gray-700 font-semibold mb-6">{miembro.rol}</p>
                <p className="text-gray-700 font-semibold mb-6">{miembro.descripcion}</p>
              </div>
            ))}
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6 } },
          }}
          className="mb-16 mt-20"
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mx-2">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
              <FaExclamationTriangle className="w-8 h-8 mr-3 text-primary-light" />
              Problemática
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 font-bold">
              El gas tradicional enferma y contamina
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-3 list-disc pl-5">
              <li>
                El <span className="text-primary font-bold">67%</span> de las pérdidas económicas en hogares peruanos se deben al alto costo del gas GLP (INEI, 2022).
              </li>
              <li>
                <span className="text-primary font-bold">21%</span> de niños menores de 5 años sufren de neumonía.
              </li>
              <li>
                <span className="text-primary font-bold">26%</span> de mujeres padecen asma.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              El GLP es responsable del <span className="text-primary font-bold">60%</span> de la contaminación del aire urbano y contribuye en un <span className="text-primary font-bold">33%</span> al calentamiento global.
            </p>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6 } },
          }}
          className="mb-16"
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mx-2 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <FaCogs className="w-8 h-8 mr-3 text-primary-light" />
                Solución
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hidranix presenta una solución energética integral que transforma agua en 
                hidrógeno verde mediante electrólisis alimentada por energía solar. Este se almacena 
                en balones de fibra de carbono certificados bajo la norma ISO 11119-3, garantizando 
                seguridad, resistencia y facilidad de transporte.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                El hidrógeno es luego utilizado en cocinas especialmente diseñadas, donde su 
                combustión genera únicamente vapor de agua como residuo, sin emisiones contaminantes. 
                Todo el sistema está integrado con tecnología IoT que permite monitorear en tiempo real 
                los niveles de hidrógeno, alertar sobre recargas necesarias y asegurar un uso eficiente, 
                cómodo y automatizado para hogares y pequeños negocios urbanos.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={solucionImage}
                className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </AnimationComponent>

        <AnimationComponent
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { delay: 0.4, duration: 0.6 } },
          }}
          className="mb-16"
        >
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg mx-2 grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src={promesaImage}
                className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <FaHandshake className="w-8 h-8 mr-3 text-primary-light" />
                Promesa de valor
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ofrecemos un <span className="text-primary font-bold">30% de aumento en eficiencia de cocción</span> y un 
                <span className="text-primary font-bold"> 60% de ahorro</span>, con garantía de <span className="text-primary font-bold">
                emisiones de CO₂ nulas.</span>
              </p>
              <p className="text-gray-700 leading-relaxed">
                Proponemos reducir los costos del gas de cocina mediante el uso de energías 
                renovables, impulsando así la descarbonización y contribuyendo al cumplimiento 
                de los <span className="text-primary font-bold">ODS 7 y 13.</span>
              </p>
            </div>
          </div>
        </AnimationComponent>

      </div>
    </section>
  );
};

export default Nosotros;
