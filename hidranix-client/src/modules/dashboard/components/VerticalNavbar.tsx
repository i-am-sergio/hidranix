import { Link } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface VerticalNavbarProps {
  role: "CLIENT" | "ADMIN" | null;
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({ role }) => {
  const { signOut } = useClerk();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleNavbar}
        className={`md:hidden fixed top-4 left-4 z-50 text-white p-2 bg-primary rounded-lg ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <FaBars size={24} />
      </button>

      <div
        className={`fixed md:relative z-40 w-64 bg-primary text-white h-full p-6 transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="mb-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Panel de Control</h2>
            <button onClick={toggleNavbar} className="md:hidden text-white">
              <FaTimes size={24} />
            </button>
          </div>
          {/* <p className="flex items-center">{user?.firstName}</p> */}
        </div>

        <ul className="space-y-4 pt-8">
          {role === "CLIENT" && (
            <>
              <li>
                <Link
                  to="/dashboard/inicio"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaHome className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                  <span className="ml-4">Monitoreo</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/historial"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaHistory className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
                  </svg>
                  <span className="ml-4">Historial de Pagos</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/pago"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaCreditCard className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" />
                  </svg>
                  <span className="ml-4">Pagar Servicio</span>
                </Link>
              </li>
            </>
          )}

          {role === "ADMIN" && (
            <>
              <li>
                <Link
                  to="/dashboard/stats"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaChartBar className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z" />
                  </svg>
                  <span className="ml-4">Estadísticas</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/clients"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaUsers className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                  </svg>
                  <span className="ml-4">Clientes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/admins"
                  className="hover:text-gray-300 flex items-center gap-2 p-2 rounded hover:bg-primary-light"
                  onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                >
                  {/* <FaUserShield className="text-xl" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" />
                  </svg>
                  <span className="ml-4">Admins</span>
                </Link>
              </li>
            </>
          )}
        </ul>

        <div className="relative max-w-md mx-auto p-4">
          <button
            onClick={handleSignOut}
            className="mt-8 w-4/5 text-white bg-primary-light px-4 py-2 rounded flex items-center gap-2 justify-center fixed bottom-10 left-4 right-4 mx-auto border-2 border-primary-light hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default VerticalNavbar;