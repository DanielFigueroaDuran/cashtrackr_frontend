import ConfirmAccoountForm from "@/app/components/auth/ConfirmAccoountForm"

const ConfirnAccountPage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-900">Confirma tu cuenta </h1>
                  <p className="text3xl font-bold">
                        Ingresa el código que recibiste
                        <span className="text-amber-500"> por email</span>
                  </p>

                  <ConfirmAccoountForm />
            </>
      )
}

export default ConfirnAccountPage