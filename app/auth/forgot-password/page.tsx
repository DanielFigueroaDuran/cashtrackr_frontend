import ForgotPassword from '@/app/components/auth/Forgot-Password'

const ForgotPasswordPage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">¿Olvidaste tu Contraseña?</h1>
                  <p className="text3xl font-bold">aquí puedes<span className="text-amber-500"> reestablecerlas</span></p>

                  <ForgotPassword />
            </>
      )
}

export default ForgotPasswordPage