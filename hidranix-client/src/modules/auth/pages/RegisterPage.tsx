import { FaArrowLeft } from "react-icons/fa";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-hero-pattern-with-opacity">
      <Link to="/hidranix" className="fixed top-10 left-10 flex mb-6 z-20">
        <FaArrowLeft className="text-white" />
      </Link>
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;