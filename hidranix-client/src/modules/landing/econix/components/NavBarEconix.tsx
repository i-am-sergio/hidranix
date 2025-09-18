import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleButton from "../../animation/SimpleButton";
import BlurButton from "../../animation/BlurButton";
import { HiMenu, HiX } from "react-icons/hi";
import logoEconix from "../../../../assets/Logo_Econix.png";
import logoEconixWhite from "../../../../assets/Logo_Econix_white.png";

const links = [
  { name: "Inicio", path: "#inicio" },
  { name: "Nosotros", path: "#nosotros" },
  { name: "Webinars", path: "#webinars" },
  { name: "Cursos", path: "#cursos" },
  // { name: "Clientes", path: "#clientes" },
];

export const NavBarEconix = ({
  variantColor = false,
  showTitle = false,
  title = "Curso...",
}: {
  variantColor?: boolean;
  showTitle?: boolean;
  title?: string;
}) => {
  const location = useLocation(); // Para obtener la ruta actual
  const [isOpen, setIsOpen] = useState(false); // Para controlar la visibilidad del menú móvil
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para alternar el estado del menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para hacer scroll suave hacia las secciones y cerrar el menú móvil
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Cerrar el menú cuando se haga clic en un enlace
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav
      className="p-4 fixed w-full top-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollY / 100, 1)})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold">
          <Link
            to="/econix"
            className={`flex items-center ${
              variantColor
                ? scrollY > 0
                  ? "text-primary-dark"
                  : "text-white"
                : "text-primary-dark"
            }`}
          >
            <img
              src={
                variantColor
                  ? scrollY === 0
                    ? logoEconixWhite
                    : logoEconix
                  : logoEconix
              }
              alt="Logo Econix"
              className="w-8 h-8 inline-block mr-2"
            />
            Econix
          </Link>
        </div>

        {/* Menú de escritorio */}
        <div className="text-primary-dark hidden xl:flex items-center gap-8 font-bold">
          {showTitle ? (
            <span
              className={` -mr-10 ${
                variantColor
                  ? scrollY != 0
                    ? "text-primary-dark"
                    : "text-white"
                  : "text-primary-dark"
              }`}
            >
              {title}
            </span>
          ) : (
            <>
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => scrollToSection(link.path.slice(1))}
                  className={`${
                    location.pathname === link.path
                      ? "text-accent border-b-2 border-accent"
                      : ""
                  } capitalize hover:text-accent transition-all 
              ${
                variantColor
                  ? scrollY != 0
                    ? "text-primary-dark"
                    : "text-white"
                  : "text-primary-dark"
              } `}
                >
                  {link.name}
                </Link>
              ))}
            </>
          )}

          {/* Botones de Login y Register en Desktop */}
          <div className="flex space-x-4 ml-8">
            <SimpleButton to="/login" scrollY={1}>
              Iniciar sesión
            </SimpleButton>
            <BlurButton to="/register" scrollY={1}>
              Registrate
            </BlurButton>
          </div>
        </div>

        {/* Menú móvil */}
        <div className="xl:hidden flex items-center">
          {/* Botón móvil */}
          <button onClick={toggleMenu} className="z-20">
            {isOpen ? (
              <HiX size={30} className="text-white" />
            ) : (
              <HiMenu
                size={30}
                className={
                  variantColor
                    ? scrollY > 0
                      ? "text-primary-dark"
                      : "text-white"
                    : "text-primary-dark"
                }
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-primary-dark bg-opacity-90 transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => scrollToSection(link.path.slice(1))}
              className={`${
                location.pathname === link.path
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } text-white py-4 text-2xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}

          {/* Botones de Login y Register en Mobile */}
          <div className="mt-8 flex space-x-4">
            <Link to="/login">
              <button className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-primary-light text-white px-4 py-2 rounded hover:bg-primary">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
