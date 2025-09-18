import { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'; // Usamos motion para la animación

interface EventProps {
  event: {
    title: string;
    date: string;
    description: string;
    category: 'Evento' | 'Reconocimiento';
    image?: string;
  };
  animationDelay: number;
}

const modalVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 0.2, damping: 12 } },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

const EventItem: React.FC<EventProps> = ({ event, animationDelay }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const descriptionToShow = event.description.slice(0, 100);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              delay: animationDelay, // Reducir el delay para hacer que las animaciones empiecen más rápido
              stiffness: 25, // Acelerar la animación
              damping: 8, // Reducir el damping para hacerla más rápida
              duration: 0.3, // Acelerar la animación
            },
          },
        }}
        initial="hidden"
        whileInView="visible" // Iniciar la animación cuando entra en la vista
        viewport={{ once: false }} // Hace que la animación ocurra cada vez que el componente entra en la vista
        className={`bg-white rounded-lg shadow-md overflow-hidden ${
          isHovered ? 'scale-105 transition-transform duration-300' : ''
        } cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
      >
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-auto object-cover aspect-video"
          />
        )}
        <div className="p-6">
          <span className="inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-2">{event.category}</span>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
          <p className="relative text-gray-700">
            {descriptionToShow}
            {event.description.length > 100 && (
              <span className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></span>
            )}
          </p>
          <div className="flex justify-center mt-4">
            <button
              className="bg-primary-light text-white cursor-pointer rounded-full p-2 focus:outline-none focus:ring focus:ring-primary-dark"
              onClick={handleOpenModal}
            >
              <IoIosArrowUp className="text-xl" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal/Ventana */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/75 z-50 flex items-center justify-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalVariants}
        >
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 relative">
            <button
              className="absolute top-4 right-4 cursor-pointer text-primary-dark hover:text-primary-light focus:outline-none"
              onClick={handleCloseModal}
            >
              <IoClose className="h-6 w-6 fill-current" />
            </button>
            <div className="p-8 grid md:grid-cols-2 gap-8">
              {event.image && (
                <div className="md:order-1">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              )}
              <div className="md:order-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                <span className="inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-4">{event.category}</span>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default EventItem;
