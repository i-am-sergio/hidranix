// src/modules/landing/components/Servicios.tsx
import { GiEnergyArrow, GiProcessor, GiRegeneration } from "react-icons/gi";
import { MdSettingsInputComposite } from "react-icons/md";
import { RiFocus2Fill } from "react-icons/ri";
import { motion } from "framer-motion"; // Usamos motion para la animación
import validacionImage from "../../../../assets/hidranix/validacion.png";
import modeloImage from "../../../../assets/hidranix/modelo.png";

const Servicios = () => {
  const servicios = [
    {
      icon: <GiEnergyArrow className="w-12 h-12 mb-4 text-[#1a7984]" />,
      title: "Sistemas de Hidrógeno Verde",
      description:
        "Implementación de tecnología de electrólisis avanzada para producción eficiente de hidrógeno verde a escala industrial",
    },
    {
      icon: <GiProcessor className="w-12 h-12 mb-4 text-[#1a7984]" />,
      title: "Plataforma IoT Integrada",
      description:
        "Monitoreo inteligente y gestión remota de sistemas energéticos mediante dispositivos IoT conectados en tiempo real",
    },
    {
      icon: <MdSettingsInputComposite className="w-12 h-12 mb-4 text-[#1a7984]" />,
      title: "Soluciones Energéticas Personalizadas",
      description:
        "Diseño de sistemas modulares adaptados a necesidades específicas de consumo energético residencial e industrial",
    },

  ];

  return (
    <section
      id="servicios"
      className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3 }, // Acelerar animación de aparición
            },
          }}
          initial="hidden"
          whileInView="visible"
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#003d3f] to-[#1a7984] bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.1, duration: 0.3 } }, // Acelerar aparición del subtítulo
          }}
          initial="hidden"
          whileInView="visible"
        >
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Soluciones integrales para la transición energética basadas en
            hidrógeno verde y sistemas inteligentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2 + index * 0.1, duration: 0.3 }, // Reducir el delay para las tarjetas
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <div className="h-full">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 hover:border-[#1a7984]/20 group h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="text-[#1a7984] group-hover:text-[#003d3f] transition-colors">
                      {servicio.icon}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#003d3f] text-center mb-4">
                    {servicio.title}
                  </h3>
                  <p className="text-gray-700 text-center leading-relaxed flex-grow">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { delay: 0.3, duration: 0.3 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="mt-16"
        >
          <div className="bg-[#003d3f] p-8 rounded-2xl text-center mx-auto max-w-4xl">
            <p className="text-white text-lg md:text-xl italic">
              "Reducción de hasta 70% en costos energéticos mediante nuestros
              sistemas inteligentes de gestión de hidrógeno"
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 h-full">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <RiFocus2Fill className="w-8 h-8 mr-3 text-primary-light" />
                Competencia
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A nivel nacional, nos enfrentamos a actores destacados como 
                Cocinas Record y Batech Energy. 
                A diferencia de ellas, nuestro enfoque se centra en ofrecer 
                una eficiencia superior en la cocción, aunque con un costo competitivo.  
                Nos enorgullece garantizar el uso exclusivo de energía renovable, 
                lo que resulta en emisiones de CO₂ nulas.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg">
              <table className="min-w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#003d3f]">
                    <th className="p-3 text-left font-bold text-[#003d3f]">Característica</th>
                    <th className="p-3 text-center font-bold text-[#003d3f]">Hidranix</th>
                    <th className="p-3 text-center font-bold text-[#003d3f]">Cocinas Eléctricas</th>
                    <th className="p-3 text-center font-bold text-[#003d3f]">GLP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="p-3">Eficiencia Cocción</td>
                    <td className="p-3 text-center text-green-600 font-bold">80%</td>
                    <td className="p-3 text-center">90%</td>
                    <td className="p-3 text-center">30%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3">Costo de Membresía</td>
                    <td className="p-3 text-center text-green-600 font-bold">S/15.00</td>
                    <td className="p-3 text-center">S/78.00</td>
                    <td className="p-3 text-center">S/50.00</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3">Fuente sostenible</td>
                    <td className="p-3 text-center text-green-600 font-bold">Sí</td>
                    <td className="p-3 text-center">No</td>
                    <td className="p-3 text-center">No</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="p-3">Seguridad</td>
                    <td className="p-3 text-center text-green-600 font-bold">90%</td>
                    <td className="p-3 text-center">90%</td>
                    <td className="p-3 text-center">65%</td>
                  </tr>
                  <tr>
                    <td className="p-3">Emisiones de CO2</td>
                    <td className="p-3 text-center text-green-600 font-bold">0%</td>
                    <td className="p-3 text-center">40%</td>
                    <td className="p-3 text-center">60%</td>
                  </tr>
                </tbody>
              </table>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm font-semibold text-[#003d3f]">
                  INDICADOR POR FAMILIA: <span className="font-normal">100 KG DE CO2 ANUAL</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
                <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="mt-20 bg-white p-8 rounded-xl shadow-lg border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={validacionImage}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                <GiRegeneration className="w-8 h-8 mr-3 text-primary-light" />
                Ventaja competitiva
              </h3>
              <p className="text-gray-700 leading-relaxed">
              Generación independiente de hidrógeno y oxígeno, eliminando cualquier riesgo de detonación. 
              El combustible hidrógeno tiene el triple de energía calorífica que el GLP.  
              El CEO de Hidranix es un ingeniero multidisciplinario en electricidad, mecánica automotriz, 
              programación de software e investigación en energías renovables.  
              Hidranix tiene una integración vertical, sin necesidad de proveedores externos, 
              y no existen empresas locales que comercialicen cocinas de hidrógeno.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          initial="hidden"
          whileInView="visible"
          className="mt-20 bg-white p-8 rounded-xl shadow-lg border border-blue-100"
        >
          <div className="flex justify-center">
            <img src={modeloImage} 
            className="rounded-lg shadow-md max-w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;
