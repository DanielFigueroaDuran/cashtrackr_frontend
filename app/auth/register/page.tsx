"use client"
import Link from "next/link";
import RegisterForm from "@/app/components/auth/RegisterForm";

const RegisterPage = () => {
      console.log('Register page');
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">Crear una Cuenta</h1>
                  <p className="text3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

                  <RegisterForm />

                  <nav className="mt-10 flex flex-col space-y-4">
                        <Link
                              href='/auth/login'
                              className="text-center text-gray-500"
                        >
                              ¿Ya tienes cuenta? Inicia Sesión
                        </Link>
                        <Link
                              href='/auth/forgot-password'
                              className="text-center text-gray-500"
                        >
                              ¿Olvidaste tu contraseña? Resstablecer
                        </Link>
                  </nav>
            </>
      )
}

export default RegisterPage