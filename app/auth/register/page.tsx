"use client"
import RegisterForm from "@/app/components/auth/RegisterForm";

const RegisterPage = () => {
      console.log('Register page');
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">Crear una Cuenta</h1>
                  <p className="text3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

                  <RegisterForm />
            </>
      )
}

export default RegisterPage