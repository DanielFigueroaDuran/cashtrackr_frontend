import PasswordResetHandle from '@/app/components/auth/PasswordResetHandler'
import React from 'react'

const NewPasswordpage = () => {
      return (
            <>
                  <h1 className="font-black text-6xl text-purple-950">Reestablecer Password</h1>
                  <p className="text-3xl font-bold">Ingresa el código que recibiste
                        <span className="text-amber-500"> por email</span>
                  </p>

                  <PasswordResetHandle />
            </>
      )
}

export default NewPasswordpage