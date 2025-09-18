import { motion } from "framer-motion";
import { useState } from "react";
// Importar los íconos SVG como imágenes directamente
import LocationIcon from "../../../../assets/icons/location.svg";
import PhoneIcon from "../../../../assets/icons/phone.svg";
import MailIcon from "../../../../assets/icons/mail.svg";

const ConsultarySection = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombres, apellidos, email, asunto, mensaje } = formData;

    const mensajeCompleto = `Hola, me gustaría obtener más información sobre ${asunto}. \n\nNombre: ${nombres} ${apellidos}\nCorreo: ${email}\nMensaje: ${mensaje}`;
    const encodedMessage = encodeURIComponent(mensajeCompleto);
    const whatsappLink = `https://wa.me/51916699070?text=${encodedMessage}`;

    // Abre WhatsApp en una nueva pestaña con el mensaje
    window.open(whatsappLink, "_blank");
  };

  const info = [
    {
      icon: <img src={LocationIcon} alt="Location" className="w-[30px] h-[30px] text-primary-dark" />, // Icono de ubicación
      title: "Dirección",
      description: "Arequipa, Perú",
    },
    {
      icon: <img src={PhoneIcon} alt="Phone" className="w-[30px] h-[30px] text-primary-dark" />, // Icono de teléfono
      title: "Teléfono",
      description: "+51 916 699 070",
    },
    {
      icon: <img src={MailIcon} alt="Mail" className="w-[30px] h-[30px] text-primary-dark" />, // Icono de correo
      title: "Correo",
      description: "hidranix.phinix@gmail.com",
    },
  ];

  return (
    <motion.section
      id="consultory"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen bg-white py-20 pt-32"
    >
      <div
        id="contacto"
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-white rounded-xl border border-gray-300" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-primary text-center font-bold">Consultoría</h3>
              <p className="text-gray-600 text-center">
                ¿Necesitas nuestra ayuda? Escríbenos.
              </p>
              {/* input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="nombres"
                  placeholder="Nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                />
                <input
                  type="text"
                  name="apellidos"
                  placeholder="Apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                />
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark"
                >
                  <option value="" disabled>Asunto</option>
                  <option value="consulta">Consulta</option>
                  <option value="soporte">Soporte</option>
                  <option value="colaboracion">Cotización</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              {/* textarea */}
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark h-[150px]"
                placeholder="Escribe tu mensaje aquí"
              />
              {/* button */}
              <button
                type="submit"
                className="p-3 bg-primary text-white rounded-lg hover:bg-primary/80 hover:cursor-pointer transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* info */}
          <div className="xl:w-[40%] order-1 xl:order-none mb-8 xl:mb-0 hidden xl:block">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 p-8 mx-16 bg-white border border-gray-300 rounded-lg shadow-md"
                >
                  <div className="w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center justify-center">
                    {item.icon} {/* Usar los SVGs importados */}
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-dark font-semibold">{item.title}</p>
                    <h3 className="text-lg text-primary-dark">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ConsultarySection;
