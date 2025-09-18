import { useState } from "react";
import { FaChevronRight, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Contact, WhatsAppCTAMultipleProps } from "../interfaces";

export const WhatsAppCTAMultiple: React.FC<WhatsAppCTAMultipleProps> = ({
  contacts,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, setSelectedContact] = useState<Contact | null>(null);

  const handleWhatsAppClick = (contact: Contact): void => {
    const encodedMessage = encodeURIComponent(contact.message);
    const whatsappUrl = `https://wa.me/${contact.number.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Panel de contactos */}
      <div
        className={`
        absolute bottom-20 right-0 
        bg-white rounded-2xl shadow-2xl
        overflow-hidden transition-all duration-300
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }
      `}
      >
        <div className="p-4 bg-primary-light text-white">
          <h3 className="font-bold text-lg">Cotiza Ahora</h3>
          <p className="text-sm opacity-90">Selecciona un departamento</p>
        </div>

        <div className="p-2">
          {contacts.map((contact, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedContact(contact);
                handleWhatsAppClick(contact);
              }}
              className="
                w-full flex items-center gap-3 p-3
                hover:bg-gray-100 rounded-lg
                transition-colors duration-200
                group
              "
            >
              <div
                className="
                w-10 h-10 bg-green-100 rounded-full
                flex items-center justify-center
                group-hover:bg-green-200 transition-colors
              "
              >
                <FaPhone size={18} className="text-primary" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-gray-800">{contact.name}</p>
                <p className="text-sm text-gray-500">{contact.number}</p>
              </div>
              <FaChevronRight
                size={20}
                className="text-gray-400 group-hover:text-primary transition-colors"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          hover:cursor-pointer
          relative group
          transition-all duration-300
          ${isOpen ? "rotate-180" : ""}
        `}
        aria-label="Abrir opciones de WhatsApp"
      >
        {/* Efecto de pulso cuando está cerrado */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-primary-light animate-ping opacity-75"></div>
        )}

        {/* Botón */}
        <div
          className={`
          relative flex items-center justify-center
          w-16 h-16 bg-primary-light hover:bg-primary
          text-white rounded-full shadow-lg
          transition-all duration-300
          hover:scale-110 hover:shadow-2xl
        `}
        >
          {isOpen ? (
            <IoClose size={28} className="transition-transform duration-300" />
          ) : (
            <FaWhatsapp
              size={28}
              className="transition-transform duration-300"
            />
          )}
        </div>

        {/* Badge de notificación */}
        {!isOpen && (
          <div
            className="
            absolute -top-1 -right-1 
            w-3 h-3 bg-red-500 rounded-full
            animate-pulse
          "
          ></div>
        )}
      </button>
    </div>
  );
};
