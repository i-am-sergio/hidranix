import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import SimpleButton from "../../animation/SimpleButton";
import BlurButton from "../../animation/BlurButton";
import phinixLogo from "../../../../assets/phinix_logo.png";

const NavbarPhinix = () => {
  const [isOpen, setIsOpen] = useState(false); // Para controlar el menú móvil
  const [scrollY, setScrollY] = useState(0);

  // Alternar el menú
  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para cerrar el menú en móviles cuando se hace clic en un enlace
  const closeMenu = () => setIsOpen(false);


  // Función para hacer scroll suave hacia las secciones y cerrar el menú móvil
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Cerrar el menú cuando se haga clic en un enlace
    if (isOpen) setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicios_link = [
    { name: "Hidranix: Cocina con Agua", path: "/hidranix" },
    { name: "Econix: Educación y consultorías", path: "/econix" },
  ];
  const servicios_ref = [
    { name: "Pozo a Tierra", id: "pozo-a-tierra" },
    { name: "Mantenimiento Eléctrico", id: "mantenimiento-electrico" },
    { name: "Automatización Domótica", id: "automatizacion-domotica" },
    { name: "Servicios HVAC", id: "servicios-hvac" },
    { name: "Impresiones 3D", id: "impresiones-3d" },
    { name: "Servicios a Terceros", id: "servicios-terceros" },
    { name: "Inox y Soldadura", id: "inox-soldadura" },
  ];
  const [openServicios, setOpenServicios] = useState(false);


  return (
    <nav
      className="p-4 fixed w-full top-0 z-50"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${Math.min(scrollY / 100, 1)})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-primary-dark text-xl font-extrabold">
          <Link to="/" className={`flex items-center ${scrollY > 0 ? "text-primary-dark" : "text-[#ececec]"
            }`}>
            <img
              src={phinixLogo}
              alt="Phinix Logo"
              className="w-8 h-8 inline-block mr-2"
            />
            Phinix
          </Link>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden xl:flex items-center gap-8 font-bold">
          {/* Enlaces de secciones dentro de la pagina */}
          <Link to="/" onClick={() => scrollToSection("#inicio".slice(1))}
            className={`flex items-center ${scrollY > 0 ? "text-primary-dark" : "text-white"
              }`}
          >Inicio</Link>
          <Link
            to="/"
            onClick={() => scrollToSection("#nosotros".slice(1))}
            className={`flex items-center ${scrollY > 0 ? "text-primary-dark" : "text-white"
              }`}
          >Nosotros</Link>
          {/* Dropdown Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setOpenServicios(true)}  // al entrar en el div padre (botón o menú), abrir
            onMouseLeave={() => setOpenServicios(false)} // 
          >
            <button
              className={`cursor-pointer flex items-center ${scrollY > 0 ? "text-primary-dark" : "text-white"
                }`}
            >
              Servicios ▾
            </button>

            {openServicios && (
              <div className={`absolute left-0 top-full ${openServicios ? "block" : "hidden"}`}>
                {/* Aquí ya puedes poner el "espacio visual" sin crear hueco de hover */}
                <div className="pt-2">
                  <div className="w-56 bg-white shadow-lg rounded-md z-50">
                    {servicios_link.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-primary-dark hover:bg-gray-100"
                        onClick={() => setOpenServicios(false)} // cerrar al elegir
                      >
                        {item.name}
                      </Link>
                    ))}
                    {servicios_ref.map((item, i) => (
                      <a
                        key={i}
                        href={`#${item.id}`}
                        className="block px-4 py-2 text-sm text-primary-dark hover:bg-gray-100"
                        onClick={() => setOpenServicios(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/"
            onClick={() => scrollToSection("#contacto".slice(1))}
            className={`flex items-center ${scrollY > 0 ? "text-primary-dark" : "text-white"
              }`}
          >Contacto</Link>

          {/* Botones de Login y Register en Desktop */}
          <div className="flex space-x-4 ml-8">
            <SimpleButton to="/login" scrollY={1}>
              Iniciar sesión
            </SimpleButton>
            <BlurButton to="/register" scrollY={1}>
              Registrarse
            </BlurButton>
          </div>
        </div>

        {/* Menú móvil */}
        <div className="xl:hidden flex items-center">
          <button onClick={toggleMenu} className="z-20">
            {isOpen ? (
              <HiX size={30} className="text-white" />
            ) : (
              <HiMenu size={30} className="text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-10 bg-primary-dark bg-opacity-90 transform transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Enlaces de productos */}

          <Link to="/" onClick={() => scrollToSection("#inicio".slice(1))}
            className="text-white py-4 text-2xl capitalize hover:text-accent transition-all"
          >Inicio</Link>
          <Link
            to="/"
            onClick={() => scrollToSection("#nosotros".slice(1))}
            className="text-white py-4 text-2xl capitalize hover:text-accent transition-all"
          >Nosotros</Link>
          <Link
            to="/hidranix"
            className="text-white py-4 text-2xl capitalize hover:text-accent transition-all"
            onClick={closeMenu} // Cerrar el menú al hacer clic
          >
            Hidranix
          </Link>
          <Link
            to="/econix"
            className="text-white py-4 text-2xl capitalize hover:text-accent transition-all"
            onClick={closeMenu} // Cerrar el menú al hacer clic
          >
            Econix
          </Link>
          {/* Enlace al Consultoría en versión móvil */}
          <a
            href="#contacto"
            className="text-white py-4 text-2xl capitalize hover:text-accent transition-all"
            onClick={closeMenu} // Cerrar el menú al hacer clic
          >
            Contacto
          </a>

          {/* Botones de Login y Register en Mobile */}
          <div className="mt-8 flex space-x-4">
            <Link to="/login">
              <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-primary-dark transition-colors duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-white text-primary-dark px-4 py-2 rounded border-none border-transparent hover:bg-transparent hover:border-white hover:text-white cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarPhinix;
