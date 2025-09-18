import {
  FaAward,
  FaBuilding,
  FaCalendar,
  FaCheckCircle,
  FaClock,
  FaMapPin,
} from "react-icons/fa";
import { CourseData } from "../../../shared/interfaces";
import { MdMonitor } from "react-icons/md";
import { scrollToSection } from "../../../shared/utils/scrollToSection";

interface Props {
  courseData: CourseData;
}
export const CourseDetails = ({ courseData }: Props) => {
  const details = [
    {
      icon: FaCalendar,
      title: "Fechas",
      content: `Del ${courseData.startDate} al ${courseData.endDate}`,
    },
    {
      icon: FaClock,
      title: "Duración",
      content: `${courseData.duration} • ${courseData.weeks} • ${courseData.hoursPerWeek} por semana`,
    },
    {
      icon: MdMonitor,
      title: "Modalidad",
      content: `${courseData.modality} • ${courseData.schedule}`,
    },
    {
      icon: FaAward,
      title: "Certificación",
      content: `A nombre de ${courseData.instructorInfo.company}`,
    },
  ];

  const { instructorInfo, benefits } = courseData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Detalles del Curso
            </h2>
            <p className="text-xl text-gray-600">
              Información completa sobre el programa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Course Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Information Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {details.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="bg-primary-light/10 rounded-full p-3 mr-4">
                        <detail.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-dark mb-2">
                          {detail.title}
                        </h3>
                        <p className="text-gray-700">{detail.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">
                  Beneficios del Curso
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="w-5 h-5 text-primary-light mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Code and Contact */}
              <div className="bg-gradient-to-r from-primary-dark to-primary rounded-xl p-8 text-white">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Código del Curso</h4>
                    <p className="text-2xl font-bold">
                      {courseData.courseCode}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Contacto</h4>
                    <p className="text-white/90">{instructorInfo.contact}</p>
                    <p className="text-white/90">{instructorInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instructor Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <FaBuilding className="w-6 h-6 text-primary mr-2" />
                  <h3 className="font-bold text-primary-dark">Organiza</h3>
                </div>
                <h4 className="font-bold text-lg mb-3">
                  {instructorInfo.company}
                </h4>
                <p className="text-gray-700 mb-4">
                  {instructorInfo.description}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <FaMapPin className="w-4 h-4 mr-2" />
                    Perú
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-primary-dark rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">¿Listo para empezar?</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => scrollToSection("registration")}
                    className="w-full bg-white text-primary-dark py-3 px-4 rounded-lg font-bold hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    Inscríbete Ahora
                  </button>
                  <button className="w-full border cursor-pointer border-white text-white py-3 px-4 rounded-lg font-bold hover:bg-white hover:text-primary-dark transition-colors">
                    <a
                      href={courseData.silaboPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={`silabo_${courseData.courseCode}.pdf`}
                    >
                      Descargar Brochure
                    </a>
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-primary-dark mb-4">
                  Información Adicional
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Requisitos:</span>
                    <p className="text-gray-600">
                      Conocimientos básicos en ingeniería o ciencias afines
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Plataforma:</span>
                    <p className="text-gray-600">Zoom / Google Meet</p>
                  </div>
                  <div>
                    <span className="font-semibold">Idioma:</span>
                    <p className="text-gray-600">Español</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
