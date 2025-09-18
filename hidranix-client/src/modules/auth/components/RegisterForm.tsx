import { SignUp } from '@clerk/clerk-react'

const RegisterForm = () => {
  return (
    <SignUp forceRedirectUrl="/dashboard/inicio" signInUrl='/login' />
  )
}

export default RegisterForm