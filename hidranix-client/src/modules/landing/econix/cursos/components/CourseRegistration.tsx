import { useState } from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaGraduationCap,
  FaMailBulk,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { CourseData } from "../../../shared/interfaces";
import { handleWhatsAppClick } from "../../../shared/utils/handleWhatsAppRedirect";

interface Props {
  courseData: CourseData;
}

export const CourseRegistration = ({ courseData }: Props) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    cargo: "",
    experiencia: "",
    motivacion: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = `Hola, me gustaría obtener más información sobre el curso de "${courseData.title}".\n\nEstos son mis datos:\n\n- Nombre: ${formData.nombre} ${formData.apellido}\n- Email: ${formData.email}\n- Teléfono: ${formData.telefono}\n- Empresa: ${formData.empresa}\n- Cargo: ${formData.cargo}\n- Experiencia: ${formData.experiencia}\n- Motivación: ${formData.motivacion}`;

    handleWhatsAppClick(courseData.instructorInfo.contact, message);

    // Reset form after 3 seconds (para demo)
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      empresa: "",
      cargo: "",
      experiencia: "",
      motivacion: "",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-12 shadow-xl">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-primary-dark mb-4">
                ¡Registro Exitoso!
              </h2>
              <p className="text-gray-600 mb-6">
                Gracias por tu interés. Nos pondremos en contacto contigo muy
                pronto con toda la información del curso.
              </p>
              <p
                className="text-sm text-gray-500 cursor-pointer"
                onClick={handleReset}
              >
                Volver a mostrar el formulario
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50" id="registration">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Regístrate Ahora
            </h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y da el primer paso hacia tu
              especialización
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <form action="" onSubmit={handleSubmit}>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Apellido *
                        </label>
                        <div className="relative">
                          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="Tu apellido"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <FaMailBulk className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <div className="relative">
                          <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="+51 999 999 999"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Empresa/Institución
                        </label>
                        <div className="relative">
                          <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="empresa"
                            value={formData.empresa}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="Nombre de tu empresa"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cargo/Posición
                        </label>
                        <div className="relative">
                          <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="cargo"
                            value={formData.cargo}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            placeholder="Tu posición actual"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Experiencia en el área
                      </label>
                      <select
                        name="experiencia"
                        value={formData.experiencia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      >
                        <option value="">Selecciona tu experiencia</option>
                        <option value="sin-experiencia">Sin experiencia</option>
                        <option value="1-2-años">1-2 años</option>
                        <option value="3-5-años">3-5 años</option>
                        <option value="5-10-años">5-10 años</option>
                        <option value="mas-10-años">Más de 10 años</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        ¿Por qué te interesa este curso?
                      </label>
                      <textarea
                        name="motivacion"
                        value={formData.motivacion}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                        placeholder="Cuéntanos tu motivación para llevar este curso..."
                      ></textarea>
                    </div>

                    <button className="w-full bg-gradient-to-r from-primary-dark to-primary text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center">
                      <IoSend className="w-5 h-5 mr-2" />
                      Enviar Registro
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="font-bold text-primary-dark mb-4">
                  Próximos Pasos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Registro</p>
                      <p className="text-sm text-gray-600">
                        Completa el formulario
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Confirmación</p>
                      <p className="text-sm text-gray-600">
                        Confirma tu inscripción
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Pago</p>
                      <p className="text-sm text-gray-600">Asegura tu cupo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">¡A aprender!</p>
                      <p className="text-sm text-gray-600">
                        Inicia tu curso el {courseData.startDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-dark rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-4">¿Necesitas ayuda?</h3>
                <p className="text-white/80 mb-4">
                  Nuestro equipo está disponible para resolver tus dudas
                </p>
                <div className="space-y-2 text-sm">
                  <p>📞 {courseData.instructorInfo.contact}</p>
                  <p>✉️ {courseData.instructorInfo.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
