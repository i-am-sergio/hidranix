// src/modules/auth/pages/LoginPage.tsx
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { FaArrowLeft } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-hero-pattern-with-opacity">
      <Link to="/hidranix" className="fixed top-10 left-10 flex mb-6 z-20">
        <FaArrowLeft className="text-white" />
      </Link>
      <div className="w-full max-w-md p-6 bg-transparent rounded-lg">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;