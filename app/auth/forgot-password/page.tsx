import Link from 'next/link'
import ForgotPassword from '@/app/components/auth/Forgot-Password'

const ForgotPasswordPage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">¿Olvidaste tu Contraseña?</h1>
                  <p className="text3xl font-bold">aquí puedes<span className="text-amber-500"> reestablecerlas</span></p>

                  <ForgotPassword />

                  <nav className="mt-10 flex flex-col space-y-4">
                        <Link
                              href='/auth/login'
                              className="text-center text-gray-500"
                        >
                              ¿Ya tienes cuenta? Inicia Sesión
                        </Link>
                        <Link
                              href='/auth/register'
                              className="text-center text-gray-500"
                        >
                              ¿No tienes cuenta? Crea una
                        </Link>
                  </nav>
            </>
      )
}

export default ForgotPasswordPage