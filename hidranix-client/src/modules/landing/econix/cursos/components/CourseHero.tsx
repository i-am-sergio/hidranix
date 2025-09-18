import { CourseData } from "../../../shared/interfaces";
import { FaCalendar, FaClock, FaUsers } from "react-icons/fa";
import { MdMonitor } from "react-icons/md";
import { scrollToSection } from "../../../shared/utils/scrollToSection";
import { handleWhatsAppClick } from "../../../shared/utils/handleWhatsAppRedirect";

interface Props {
  courseData: CourseData;
}

export const CourseHero = ({ courseData }: Props) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-semibold">
                  Curso Especializado
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {courseData.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {courseData.objective}
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FaCalendar className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Inicio</p>
                    <p className="text-white/80">{courseData.startDate}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FaClock className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Duración</p>
                    <p className="text-white/80">{courseData.duration}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <MdMonitor className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Modalidad</p>
                    <p className="text-white/80">{courseData.modality}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3">
                  <FaUsers className="w-6 h-6 text-white" />
                  <div>
                    <p className="font-semibold">Horario</p>
                    <p className="text-white/80">{courseData.schedule}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("registration")}
                className="bg-white cursor-pointer text-primary-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Inscríbete Ahora
              </button>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    "+51916699070",
                    `Hola, me gustaría obtener más informacíon del curso ${courseData.title}`
                  )
                }
                className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-dark transition-all"
              >
                Más Información
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-block bg-white/20 rounded-full p-4 mb-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hidrógeno Verde
                  </h3>
                  <p className="text-white/80">
                    El futuro de la energía sostenible
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white">
                      {courseData.sessions}
                    </p>
                    <p className="text-white/80 text-sm">Sesiones</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white">
                      {courseData.weeks}
                    </p>
                    <p className="text-white/80 text-sm">Semanas</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white">
                      {courseData.modules.length}
                    </p>
                    <p className="text-white/80 text-sm">Módulos</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-xl p-6 text-center">
                  <p className="text-white font-semibold mb-2">Certificación</p>
                  <p className="text-white/90 text-sm">
                    A nombre de PHINIX S.A.C. e HIDRANIX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
