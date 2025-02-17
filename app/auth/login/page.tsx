import LoginForm from "@/app/components/auth/LoginForm"

const LoginPage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">Iniciar Sesión</h1>
                  <p className="text3xl font-bold">y controla tus <span className="text-amber-500">finanzas</span></p>

                  <LoginForm />
            </>
      )
}

export default LoginPage