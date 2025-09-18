// src/modules/auth/components/LoginForm.tsx
import { SignIn } from "@clerk/clerk-react";

const LoginForm = () => {
  return (
    <SignIn
      forceRedirectUrl="/dashboard/inicio" signUpUrl="/register"
    />
  );
}

export default LoginForm;