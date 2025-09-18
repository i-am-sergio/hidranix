import { GiTargeted } from "react-icons/gi";
import { CourseData } from "../../../shared/interfaces";
import { FaBookOpen, FaCheckCircle, FaUsers } from "react-icons/fa";

interface Props {
  courseData: CourseData;
}

export const CourseInfo = ({ courseData }: Props) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              ¿Por qué llevar este curso?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrolla competencias especializadas en la tecnología energética
              del futuro
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Objetivo del Curso */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary-light/10 rounded-full p-3 mr-4">
                  <GiTargeted className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">
                  Objetivo del Curso
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {courseData.objective}
              </p>
            </div>

            {/* Dirigido A */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-primary-light/10 rounded-full p-3 mr-4">
                  <FaUsers className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">
                  Dirigido A
                </h3>
              </div>
              <ul className="space-y-3">
                {courseData.dirigidoA.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheckCircle className="w-5 h-5 text-primary-light mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metodología */}
          <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-white">
            <div className="flex items-center mb-8">
              <div className="bg-white/20 rounded-full p-3 mr-4">
                <FaBookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Metodología del Curso</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {courseData.methodology.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                    <FaCheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-dark mb-2">
                {courseData.duration}
              </div>
              <p className="text-gray-600">Duración Total</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-dark mb-2">
                {courseData.sessions}
              </div>
              <p className="text-gray-600">Sesiones</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-dark mb-2">
                {courseData.hoursPerWeek}
              </div>
              <p className="text-gray-600">Horas/Semana</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-dark mb-2">
                {courseData.modules.length}
              </div>
              <p className="text-gray-600">Módulos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
