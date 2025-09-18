import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { CardItemContent } from "../../shared/interfaces";

interface Props {
  item: CardItemContent;
  isClickable?: boolean;
  animationDelay: number;
  minWidth?: number;
  equalHeight?: boolean;
}

const modalVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 0.2, damping: 12 },
  },
  exit: { scale: 0.8, opacity: 0, transition: { duration: 0.2 } },
};

export const GridCardItem = ({
  item,
  animationDelay,
  isClickable = true,
  minWidth,
  equalHeight = false,
}: Props) => {
  const { date, description, imgSrc, title, chipContent, descriptionCol1, descriptionCol2, twoColumns } = item;
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const safeDescription = description ?? "";
  const descriptionToShow = isClickable
    ? safeDescription.slice(0, 100)
    : safeDescription;

  const handleOpenModal = () => {
    if (isClickable) setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        id={item.id}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              delay: animationDelay,
              stiffness: 25,
              damping: 8,
              duration: 0.3,
            },
          },
        }}
        className={`bg-white rounded-lg shadow-md overflow-hidden ${
          isHovered ? "scale-105 transition-transform duration-300" : ""
        } ${isClickable ? "cursor-pointer" : ""}`}
        style={{ minWidth: minWidth }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleOpenModal}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: false }}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-auto object-cover aspect-video"
          />
        )}
        <div className={`p-6 flex-grow ${equalHeight ? "flex flex-col" : ""}`}>
          {chipContent && (
            <span className="inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-2">
              {chipContent}
            </span>
          )}
          <h3 className="text-xl font-semibold text-phinix-teal mb-2">{title}</h3>

          <div className={`text-gray-700 ${twoColumns ? "grid grid-cols-2 gap-6" : ""}`}>
            {twoColumns && descriptionCol1 && descriptionCol2 ? (
              <>
                <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: descriptionCol1 }} />
                <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: descriptionCol2 }} />
              </>
            ) : description?.includes('<') ? (
              <div
                className="whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="whitespace-pre-line">
                {descriptionToShow}
                {safeDescription.length > 100 && isClickable && (
                  <span className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent"></span>
                )}
              </p>
            )}
          </div>

          {isClickable && (
            <div className="flex justify-center mt-4">
              <button
                className="bg-primary-light text-white cursor-pointer rounded-full p-2 focus:outline-none focus:ring focus:ring-primary-dark"
                onClick={handleOpenModal}
              >
                <IoIosArrowUp className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Modal/Ventana */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={modalVariants}
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 cursor-pointer text-primary-dark hover:text-primary-light focus:outline-none z-10"
              onClick={handleCloseModal}
            >
              <IoClose className="h-6 w-6 fill-current" />
            </button>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {title}
              </h3>
              {date && <p className="text-gray-600 text-sm mb-2">{date}</p>}
              {chipContent && (
                <span className="inline-block bg-primary-light text-white text-xs font-semibold rounded-full px-3 py-1 mb-4">
                  {chipContent}
                </span>
              )}
              
              {/* CONTENIDO DEL MODAL - MANEJA DOS COLUMNAS */}
              <div className={`mt-4 ${twoColumns ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""}`}>
                {twoColumns && descriptionCol1 && descriptionCol2 ? (
                  <>
                    <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: descriptionCol1 }} />
                    <div className="whitespace-pre-line" dangerouslySetInnerHTML={{ __html: descriptionCol2 }} />
                  </>
                ) : description?.includes('<') ? (
                  <div
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                ) : (
                  <p className="text-gray-700 whitespace-pre-line">{description}</p>
                )}
              </div>
              
              {imgSrc && (
                <div className="mt-6">
                  <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};