import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

interface Props {
  pageName: string;
  slogan: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  tiktokUrl: string;
}

const Footer = ({
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  tiktokUrl,
  pageName,
  slogan,
}: Props) => {
  const socialLinks = [
    {
      icon: <FaFacebookF className="text-xl" />,
      url: facebookUrl,
    },
    {
      icon: <FaInstagram className="text-xl" />,
      url: instagramUrl,
    },
    {
      icon: <FaLinkedinIn className="text-xl" />,
      url: linkedinUrl,
    },
    {
      icon: <FaTiktok className="text-xl" />,
      url: tiktokUrl,
    },
  ];

  const legalLinks = [
    { name: "Política de Privacidad", path: "/politica-privacidad" },
    { name: "Política de Cookies", path: "/politica-cookies" },
    { name: "Términos y Condiciones", path: "/terminos-condiciones" },
  ];

  return (
    <footer className="bg-primary-dark text-white py-12 px-4 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección Información */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">{pageName}</h3>
            <p className="text-gray-300">{slogan}</p>
          </div>

          {/* Sección Redes Sociales */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Únete a nosotros en esta transformación energética!
              Empieza a usar el agua como combustible con nuestras cocinas del futuro</h4>
            <div className="flex justify-center items-center space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sección Legal */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="flex flex-col md:flex-row md:justify-end space-y-2 md:space-y-0 md:space-x-4">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-center text-sm text-gray-300">
            © {new Date().getFullYear()} {pageName}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
