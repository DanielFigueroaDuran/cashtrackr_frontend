"use client"

import { useState } from "react"
import ValidateTokenForm from "./ValidateTokenForm";
import ResetPasswordForm from "./ResetPasswordForm";

const PasswordResetHandle = () => {
  const [isValidToken, setIsValidToken] = useState(false);

  return (
    <>
      {!isValidToken ? <ValidateTokenForm /> : <ResetPasswordForm />}
    </>
  )
}

export default PasswordResetHandle