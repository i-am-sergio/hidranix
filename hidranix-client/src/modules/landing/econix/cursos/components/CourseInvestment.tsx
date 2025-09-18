import {
  FaAward,
  FaCheckCircle,
  FaClock,
  FaCreditCard,
  FaDollarSign,
} from "react-icons/fa";
import { CourseData } from "../../../shared/interfaces";
import { handleWhatsAppClick } from "../../../shared/utils/handleWhatsAppRedirect";

interface Props {
  courseData: CourseData;
}
export const CourseInvestment = ({ courseData }: Props) => {
  const paymentMethods = [
    "Transferencia bancaria",
    "Depósito en cuenta",
    "Pago en línea",
  ];

  const includes = [
    "36 horas de clases especializadas",
    "Material didáctico digital",
    "Acceso a grabaciones de sesiones",
    "Certificado digital",
    "Foro de discusión con expertos",
    "Casos prácticos y talleres",
    "Soporte técnico durante el curso",
  ];
  const { investment } = courseData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Inversión
            </h2>
            <p className="text-xl text-gray-600">
              Invierte en tu futuro profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pricing Cards */}
            <div className="space-y-6">
              {/* Early Bird Pricing */}
              <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  ¡Oferta!
                </div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <FaClock className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-2xl font-bold">Precio Promocional</h3>
                      <p className="text-white/80">
                        Hasta el {investment.earlyBirdDeadline}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-bold">
                        S/ {investment.earlyBird}
                      </span>
                      <span className="text-xl ml-2 text-white/80">soles</span>
                    </div>
                    <p className="text-white/80 line-through">
                      Precio regular: S/ {investment.regular}
                    </p>
                    <p className="text-yellow-300 font-semibold">
                      Ahorras: S/ {investment.regular - investment.earlyBird}
                    </p>
                  </div>

                  <button className="w-full bg-white text-primary-dark py-4 px-6 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                    Aprovecha la Oferta
                  </button>
                </div>
              </div>

              {/* Regular Pricing */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <FaDollarSign className="w-8 h-8 text-primary mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark">
                      Precio Regular
                    </h3>
                    <p className="text-gray-600">
                      Después del {investment.earlyBirdDeadline}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-primary-dark">
                      S/ {investment.regular}
                    </span>
                    <span className="text-lg ml-2 text-gray-600">soles</span>
                  </div>
                </div>

                <button className="w-full border-2 border-primary text-primary py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-colors">
                  Inscribirse
                </button>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <FaAward className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary-dark">
                    ¿Qué incluye?
                  </h3>
                </div>

                <ul className="space-y-4">
                  {includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-light mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <FaCreditCard className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary-dark">
                    Formas de Pago
                  </h3>
                </div>

                <ul className="space-y-3">
                  {paymentMethods.map((method, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{method}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-4 bg-primary-light/10 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Nota:</strong> Para más información sobre opciones
                    de financiamiento, contáctanos al{" "}
                    {courseData.instructorInfo.contact}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary-dark to-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes dudas sobre la inversión?
            </h3>
            <p className="text-white/90 mb-6">
              Nuestro equipo está listo para resolver todas tus consultas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white cursor-pointer text-primary-dark px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                onClick={() =>
                  handleWhatsAppClick(
                    courseData.instructorInfo.contact,
                    `Hola, tengo dudas sobre la inversión en el curso ${courseData.title}`
                  )
                }
              >
                Contactar Asesor
              </button>
              <button
                className="border-2 cursor-pointer border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary-dark transition-colors"
                onClick={() =>
                  handleWhatsAppClick(
                    courseData.instructorInfo.contact,
                    `Hola, quiero más información sobre el curso ${courseData.title}`
                  )
                }
              >
                Solicitar Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
