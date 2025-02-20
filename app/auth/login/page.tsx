import Link from "next/link"
import LoginForm from "@/app/components/auth/LoginForm"

const LoginPage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">Iniciar Sesión</h1>
                  <p className="text3xl font-bold">y controla tus <span className="text-amber-500"> finanzas</span></p>

                  <LoginForm />

                  <nav className="mt-10 flex flex-col space-y-4">
                        <Link
                              href='/auth/login'
                              className="text-center text-gray-500"
                        >
                              ¿Ya tienes cuenta? Inicia Sesión
                        </Link>
                  </nav>
            </>
      )
}

export default LoginPage